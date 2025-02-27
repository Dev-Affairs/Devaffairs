import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Image from 'next/image';

function Footer() {

    const socialLinks = [
        {
            name: 'Facebook',
            link: 'https://www.facebook.com/devaffairs.dev',
            icon: <FaFacebookF />,
            className: "bg-blue-600 hover:bg-blue-700"
        },
        {
            name: 'Twitter',
            link: '#',
            icon: <FaXTwitter />,
            className: "bg-gray-800 hover:bg-gray-900"
        },
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/devaffairs.dev',
            icon: <FaInstagram />,
            className: "bg-pink-500 hover:bg-pink-600"
        },
        {
            name: 'Linkedin',
            link: 'https://www.linkedin.com/company/devaffairs',
            icon: <FaLinkedinIn />,
            className: "bg-blue-700 hover:bg-blue-800"
        }
    ]

    return (
        <>
            <footer className="bg-gray-100 p-6 border-t border-gray-200">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-7">
                        <div className="flex items-center space-x-2 cursor-pointer select-none">
                            <Image src="/logo/da_logo_bg.svg" alt="Logo" width={25} height={25} />
                            {/* <Image src="/logo/da_text.svg" alt="Brand Name" height={28} width={120} /> */}
                            <span className='text-gray-800 text-l font-bold'>DEV AFFAIRS</span>
                        </div>
                        <div className="flex space-x-4">
                            {
                                socialLinks.map((link, index) => (
                                    <a href={link.link} className={"p-2 rounded-full text-white transition duration-300 " + link.className} key={index} target="_blank" rel="noopener noreferrer">
                                        {link.icon}
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <hr className="my-4 border-gray-200" />
                    <div className="flex flex-col md:flex-row justify-between items-center gap-1">
                        <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300 mb-2 md:mb-0">Privacy Policy</a>
                        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 justify-center items-center gap-1">
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Products</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Blog</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Contact</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Team</a></li>
                        </ul>
                    </div>
                    <div className="text-center mt-10">
                        <p className="text-gray-600 text-sm">&copy; 2025. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer