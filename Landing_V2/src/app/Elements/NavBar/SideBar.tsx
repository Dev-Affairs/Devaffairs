'use client';

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
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [sidebarOpen]);

  return (
    <>
      {/* Backdrop */}
      {/* <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40${
          sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      /> */}

      {/* Slide-in Sidebar from Left */}
      <aside
        className={`fixed top-0 left-0  h-screen w-screen bg-white dark:bg-neutral-950 text-black dark:text-white z-50 transition-transform duration-300 transform overflow-y-auto  ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Icon */}
        <IoMdClose
          className="absolute top-5 right-6 text-3xl text-black dark:text-white cursor-pointer z-50"
          onClick={() => setSidebarOpen(false)}
        />

        {/* Logo */}
        <div className="flex justify-center items-center px-6 py-8 bg-white/90 dark:bg-white/10 shadow-md backdrop-blur-md">
          <Image src="/logo/da_logo_bg.svg" alt="Logo" width={50} height={50} />
        </div>

        {/* Navigation Content */}
        <div className="flex flex-col py-6 px-4">
          {navMenuDetails.map((navItem, navItemIndex) => (
            <div key={navItemIndex} className="w-full">
              {navItem.menuItems && navItem.menuItems.length ? (
                <div className="mb-4">
                  <div
                    className="py-3 px-2 flex justify-between items-center cursor-pointer hover:bg-orange-600 hover:text-white rounded-md transition"
                    onClick={() =>
                      setActiveMenuItem(activeMenuItem === navItem.name ? '' : navItem.name)
                    }
                  >
                    {navItem.name}
                    {activeMenuItem === navItem.name ? <FaChevronUp /> : <FaChevronDown />}
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out px-4 ${
                      activeMenuItem === navItem.name ? 'max-h-[500px] py-2' : 'max-h-0'
                    }`}
                  >
                    {navItem.menuItems.map((menuItem, index) =>
                      menuItem.items ? (
                        <ul key={index} className="pl-2 space-y-2 text-sm">
                          {menuItem.items.map((item, subIndex) => (
                            <li key={subIndex}>
                              <Link href={item.link} className="block hover:underline">
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : menuItem.image ? (
                        <div key={index} className="my-4">
                          <p className="text-base font-semibold mb-1">{menuItem.name}</p>
                          <div
                            onClick={() =>
                              menuItem.page &&
                              window.open(menuItem.page, '_blank', 'noopener,noreferrer')
                            }
                            className="relative mt-2 h-40 rounded-lg overflow-hidden cursor-pointer group"
                          >
                            <div
                              className="absolute inset-0 bg-cover bg-center bg-blend-multiply bg-gray-600 group-hover:scale-105 transition-transform duration-300"
                              style={{ backgroundImage: `url(${menuItem.image})` }}
                            />
                            <p className="relative z-10 text-white p-4 text-sm">
                              {menuItem.description}
                            </p>
                          </div>
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              ) : navItem.link ? (
                <Link
                  href={navItem.link}
                  className="block py-3 px-2 hover:bg-orange-600 hover:text-white rounded-md transition"
                >
                  {navItem.name}
                </Link>
              ) : navItem.page ? (
                <span
                  onClick={() =>
                    window.open(navItem.page || '#', '_blank', 'noopener,noreferrer')
                  }
                  className="block py-3 px-2 hover:bg-orange-600 hover:text-white rounded-md transition cursor-pointer"
                >
                  {navItem.name}
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}

export default SideBar;
