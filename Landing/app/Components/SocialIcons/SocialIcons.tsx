import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

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
];

const fadeUpVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { transition: { staggerChildren: 0.2 } }
};


function SocialIcons({animate}: {animate: boolean}) {
    return (
        <>
        {
            animate ? (
                <motion.div className="flex space-x-4 mt-6 text-center justify-center md:justify-start" variants={staggerContainer}>
                {socialLinks.map((link, index) => (
                    <motion.a
                        href={link.link}
                        className={`p-3 rounded-full text-white transition duration-300 ${link.className}`}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={fadeUpVariant}
                    >
                        {link.icon}
                    </motion.a>
                ))}
            </motion.div>
            ) : (
                <div className="flex space-x-4 mt-6 text-center justify-center md:justify-start">
                {socialLinks.map((link, index) => (
                    <Link
                        href={link.link}
                        className={`p-3 rounded-full text-white transition duration-300 ${link.className}`}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link.icon}
                    </Link>
                ))}
            </div>
            )
        }
           
        </>
    )
}

export default SocialIcons