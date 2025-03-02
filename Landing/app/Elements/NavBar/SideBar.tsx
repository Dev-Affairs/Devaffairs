import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface MenuItem {
    name: string;
    link?: string;
    image?: string;
    description?: string;
    items?: Array<{ name: string; link: string }>;
    page?: string;
}

interface NavMenu {
    name: string;
    link?: string;
    page?: string;
    menuItems?: MenuItem[];
}

interface SideBarProps {
    navMenuDetails: NavMenu[];
    sidebarOpen: boolean;
    setSidebarOpen: (value: boolean) => void;
}

function SideBar({ navMenuDetails, sidebarOpen, setSidebarOpen }: SideBarProps) {
    const [activeMenuItem, setActiveMenuItem] = useState<string>('');

    useEffect(() => {
        if (sidebarOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [sidebarOpen]);

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setSidebarOpen(false)}
            ></div>
            <aside
                className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] md:w-[40%] bg-white backdrop-blur-lg text-white transform transition-transform duration-300 shadow-lg z-50 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <IoMdClose
                    className="text-black absolute text-3xl right-5 top-5 z-50 cursor-pointer"
                    onClick={() => setSidebarOpen(false)}
                />
                <div className="flex justify-center items-center px-6 py-8 bg-white/90 shadow-md backdrop-blur-lg relative">
                    <div className="flex flex-col gap-2 items-center space-x-2 cursor-pointer select-none">
                        <Image src="/logo/da_logo_bg.svg" alt="Logo" width={50} height={50} />
                    </div>
                </div>
                <div className="flex flex-col py-4 overflow-y-auto h-[calc(100vh-80px)]">
                    {navMenuDetails.map((navItem, navItemIndex) => (
                        navItem.menuItems && navItem.menuItems.length ? (
                            <div className="w-full flex flex-col h-max" key={navItemIndex}>
                                <div
                                    className="px-4 py-3 text-black hover:bg-orange-600 hover:text-white transition w-full cursor-pointer flex justify-between items-center"
                                    onClick={() =>
                                        setActiveMenuItem(activeMenuItem === navItem.name ? '' : navItem.name)
                                    }
                                >
                                    {navItem.name}
                                    {activeMenuItem === navItem.name ? (
                                        <FaChevronUp className='text-xs' />
                                    ) : (
                                        <FaChevronDown className='text-xs' />
                                    )}
                                </div>
                                <div
                                    className={`flex flex-col gap-2 px-6 overflow-auto text-black border-y border-gray-200 transition-all duration-300 ease-in-out ${activeMenuItem === navItem.name
                                            ? "max-h-[500px] opacity-100 py-3"
                                            : "max-h-0 opacity-0"
                                        }`}
                                >
                                    {navItem.menuItems.map((menuItem, index) =>
                                        menuItem.items && menuItem.items.length ? (
                                            <ul className="mb-2 md:mb-0" key={index}>
                                                {menuItem.items.map((item, itemIndex) => (
                                                    <li key={itemIndex} className='w-full py-2'>
                                                        <Link href={item.link} className="hover:underline hover:text-blue-600 w-full block">
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : menuItem.image ? (
                                            <div className="flex flex-col space-y-2" key={index}>
                                                <span className="text-xl">{menuItem.name}</span>
                                                <span
                                                    onClick={() => window.open(menuItem.page, "_blank", "noopener,noreferrer")}

                                                    className={`p-8 rounded-lg bg-blend-multiply hover:bg-blend-soft-light h-[15vh] relative overflow-hidden cursor-pointer`}
                                                >
                                                    <span
                                                        className="absolute inset-0 bg-center bg-cover transition-transform duration-300 scale-100 hover:scale-105 bg-local bg-gray-500 bg-no-repeat rounded-lg bg-blend-multiply hover:bg-blend-soft-light "
                                                        style={{ backgroundImage: `url('${menuItem.image}')` }}
                                                    ></span>
                                                    <p className="relative z-10 max-w-xl mb-5 leading-tight tracking-tight text-white">
                                                        {menuItem.description}
                                                    </p>
                                                </span>
                                            </div>
                                        ) : null
                                    )}
                                </div>
                            </div>
                        ) : navItem.link ? (
                            <Link
                                href={navItem.link}
                                className="px-4 py-3 text-black hover:bg-orange-600 hover:text-white transition"
                                key={navItemIndex}
                            >
                                {navItem.name}
                            </Link>
                        ) : navItem.page ? (
                            <span onClick={() => window.open(navItem.page, "_blank", "noopener,noreferrer")} className="px-4 py-3 text-black hover:bg-orange-600 hover:text-white transition" key={navItemIndex}>{navItem.name}</span>
                        ) : null
                    ))}
                </div>
            </aside>
        </>
    );
}

export default SideBar;
