'use client'

import { useEffect, useRef, useState } from "react";
import SideBar from './SideBar';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface MenuItem {
    name: string;
    link?: string;
    image?: string;
    description?: string;
    items?: Array<{ name: string; link: string }>;
}

interface NavMenuItem {
    name: string;
    link?: string;
    page?: string;
    menuItems?: MenuItem[];
}

interface MegaMenuState {
    status: boolean;
    data: NavMenuItem | null;
}

function NavMenu() {
    const [megaMenuState, setMegaMenuState] = useState<MegaMenuState>({ status: false, data: null });
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    const navMenuDetails: NavMenuItem[] = [
        {
            name: "Products",
            menuItems: [
                {
                    name: "Invozapp",
                    image: "/images/dasboard_1.jpg",
                    description: "Inventory and Invoices made easy."
                },
                {
                    name: "Saam",
                    image: "/images/dasboard_2.jpg",
                    description: "Samms."
                },
                {
                    items: [
                        {
                            name: "Our Blog",
                            link: "ourBlogs"
                        },
                        {
                            name: "Terms & Conditions",
                            link: "terms"
                        }
                    ],
                    name: ""
                }
            ]
        },
        {
            name: "Blog",
            link: "/blog"
        },
        {
            name: "Contact",
            link: "/contact"
        },
        {
            name: "Team",
            link: "/team"
        },
        {
            name: "Page",
            page: "https://google.com"
        }
    ]

    const menuRef = useRef<HTMLDivElement>(null);
    const navMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node) && navMenuRef.current && !navMenuRef.current.contains(event.target as Node)) {
                setMegaMenuState({ status: false, data: null });
            }
        };

        if (megaMenuState.status) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [megaMenuState.status]);

    const onClickMenuItem = (item: NavMenuItem) => {
        setMegaMenuState(prevState => ({
            status: prevState.status ? false : true,
            data: item
        }));
    }
    return (
        <>
            <div className="hidden lg:flex space-x-6 text-gray-700 lg:justify-center lg:items-center select-none" ref={navMenuRef}>
                {navMenuDetails.map((item, index) => (
                    item.menuItems && item.menuItems.length ? (
                        <div className='flex items-center space-x-1 cursor-pointer' key={index} onClick={() => onClickMenuItem(item)}>
                            <span className="hover:text-blue-600">{item.name}</span>
                            {megaMenuState.status && megaMenuState.data?.name === item.name ? (
                                <FaChevronUp className='text-xs' />
                            ) : (
                                <FaChevronDown className='text-xs' />
                            )}
                        </div>
                    ) : item.link ? (
                        <Link href={item.link} className="hover:text-blue-600" key={index}>{item.name}</Link>
                    ) : item.page ? (
                        <span onClick={() => window.open(item.page, "_blank", "noopener,noreferrer")} className="hover:text-blue-600" key={index}>{item.name}</span>
                    ) : null
                ))}
            </div>

            <RxHamburgerMenu className="lg:hidden block text-gray-700 text-3xl" onClick={() => setSidebarOpen(true)} />
            {megaMenuState.status && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 mt-20" onClick={() => setMegaMenuState({ status: false, data: null })}></div>
            )}
            <AnimatePresence>
                {megaMenuState.status && (
                    <motion.div
                        ref={menuRef}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className='absolute mt-20 w-full top-0 left-0 z-50'
                    >
                        <div id="mega-menu-full-image-dropdown" className="bg-white border-gray-200 shadow-md border-y min-h-[30vh]">
                            {megaMenuState.data && (
                                <div className="max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-800 md:px-6">
                                    <div className='py-4 text-xl'>
                                        {megaMenuState.data.name}
                                    </div>
                                    <div className='grid md:grid-cols-3 gap-6'>
                                        {megaMenuState.data?.menuItems?.map((menuItem, index) => (
                                            menuItem.items && menuItem.items.length ? (
                                                <ul className="mb-4 space-y-4 md:mb-0" key={index}>
                                                    {menuItem.items.map((item, itemIndex) => (
                                                        <li key={itemIndex}>
                                                            <a href="#" className="hover:underline hover:text-blue-600">
                                                                {item.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : menuItem.image ? (
                                                <a
                                                    href="#"
                                                    className={`p-8 rounded-lg bg-blend-multiply hover:bg-blend-soft-light h-[15vh] relative overflow-hidden gap-1 flex flex-col`}
                                                    key={index}>
                                                    <span
                                                        className="absolute inset-0 bg-center bg-cover transition-transform duration-300 scale-100 hover:scale-105 bg-local bg-gray-500 bg-no-repeat rounded-lg bg-blend-multiply hover:bg-blend-soft-light "
                                                        style={{ backgroundImage: `url('${menuItem.image}')` }}
                                                    ></span>
                                                    <span className="relative text-lg z-10 text-white">{menuItem.name}</span>
                                                    <p className="relative z-10 max-w-xl mb-5 text-white">
                                                        {menuItem.description}
                                                    </p>
                                                </a>
                                            ) : null
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} navMenuDetails={navMenuDetails} />
        </>
    );
}

export default NavMenu;
