'use client';

import { motion as Motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="main-margin relative text-white shadow-md rounded-3xl">
            {/* Top Navigation */}
            <div className='px-6 md:px-10 lg:px-15 bg-[#ffffff] dark:bg-[#161616] rounded-t-3xl'>

                <div className="flex justify-end gap-4 py-10">
                    {['About', 'Project', 'Blog', 'Contact'].map((item) => (
                        <button
                            key={item}
                            className="border border-black/10 dark:border-white/10 text-sm px-4 py-1.5 rounded-xl 
                 bg-white dark:bg-[#1c1c1c] text-black dark:text-white 
                 hover:bg-black/5 dark:hover:bg-white/10 transition cursor-pointer"
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <hr />

                {/* Main Section */}
                <Motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start my-16"
                >
                    {/* Left Text */}
                    <div className="space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-semibold">
                            <span className="text-black dark:text-white">Let&apos;s work </span><br />
                            <span className="title-bg">
                                TOGETHER
                            </span>
                        </h2>
                        <p className="text-basic max-w-sm">
                            Discover innovative solutions tailored for your digital marketing needs and watch your business thrive.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="text-basic space-y-1 h-full flex flex-col justify-center items-start">
                        <p>T: 212-472-9372</p>
                        <p>F: 212-382-0457</p>
                    </div>

                    {/* Email + Social */}
                    <div className="text-basic space-y-1 h-full flex flex-col justify-center items-start">
                        <p>bussness@deaffairs.dev</p>
                        <div className='flex flex-col justify-center items-start'>
                            <Link href="#">X ( Twitter )</Link>
                            <Link href="#">Instagram</Link>
                            <Link href="#">LinkedIn</Link>
                        </div>
                    </div>
                </Motion.div>

                <hr />

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center text-basic py-10">
                    <p>© DevAffairs. All rights reserved.</p>
                    <div className="flex gap-4 mt-2 md:mt-0">
                        <Link href="#">Privacy</Link>
                        <Link href="#">Policy</Link>
                    </div>
                </div>
            </div>

            {/* Background Overlay Logo */}
            {/* relative inset-x-0 bottom-0 z-0 bg-[#1b1b1b] w-full h-max flex items-center justify-start px-6 sm:px-12 lg:px-20 rounded-b-3xl overflow-hidden */}
            <div className="relative inset-x-0 bottom-0 z-0 w-full h-max flex items-center justify-start overflow-hidden rounded-b-3xl">
                {/* Logo Container */}
                <div className="w-full">
                    <Image
                        src="/logo/full-logo_dark.svg"
                        alt="Logo"
                        width={1920}
                        height={0}
                        className="w-full h-auto object-contain dark:block hidden"
                    />
                    <Image
                        src="/logo/full-logo_white.svg"
                        alt="Logo"
                        width={1920}
                        height={0}
                        className="w-full h-auto object-contain block dark:hidden"
                    />
                </div>
            </div>
        </footer>
    );
}