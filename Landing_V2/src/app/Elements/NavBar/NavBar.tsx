"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import NavMenu from "./NavMenu";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/app/context/ThemeContext";

function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollPos = useRef(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const hideThreshold = window.innerHeight * 0.5;

      if (currentScrollPos < prevScrollPos.current) {
        setIsVisible(true);
      } else if (currentScrollPos > hideThreshold) {
        setIsVisible(false);
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center justify-between px-6 lg:px-12 
        border border-white/20 dark:border-white/10 
        bg-white dark:bg-white/5 
        backdrop-blur-md 
        shadow-lg 
        fixed w-full top-0 left-0 z-50 h-14 
        transition duration-500 ${
          isVisible ? '' : '-translate-y-full'
        }`}
    >
      <div className="flex justify-between items-center container mx-auto w-full">
        {/* Logo */}
        <Link
          className="flex items-center space-x-2 cursor-pointer select-none"
          href="/"
        >
          <Image
            src="/logo/da_logo_bg.svg"
            alt="Logo"
            width={30}
            height={30}
          />
          <h1 className="text-black dark:text-white font-bold text-base sm:text-lg">
            DEV AFFAIRS
          </h1>
        </Link>

        {/* Menu & Theme Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="text-gray-800 dark:text-gray-200 sm:p-2 rounded hover:bg-black/5 dark:hover:bg-white/10 transition cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <NavMenu />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
