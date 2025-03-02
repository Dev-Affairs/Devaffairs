"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import NavMenu from "./NavMenu";
import Link from "next/link";

function NavBar() {
    const [isVisible, setIsVisible] = useState(true);
    const prevScrollPos = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const hideThreshold = window.innerHeight * 0.7;
            
            if (currentScrollPos < prevScrollPos.current) {
                setIsVisible(true);
            } 
            else if (currentScrollPos > hideThreshold) {
                setIsVisible(false);
            }

            prevScrollPos.current = currentScrollPos;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`flex justify-between items-center px-6 lg:px-12 py-4 border-b bg-white shadow-md fixed w-full top-0 left-0 z-50 h-20 transition-transform duration-500 ${
                isVisible ? "" : "-translate-y-full"
            }`}
        >
            <div className="flex justify-between container m-auto">
                <Link
                    className="flex items-center space-x-2 cursor-pointer select-none"
                    href={"/"}
                >
                    <Image
                        src="/logo/da_logo_bg.svg"
                        alt="Logo"
                        width={36}
                        height={36}
                    />
                    <h1 className="text-black text-xl font-bold">
                        DEV AFFAIRS
                    </h1>
                </Link>
                <NavMenu />
            </div>
        </nav>
    );
}

export default NavBar;
