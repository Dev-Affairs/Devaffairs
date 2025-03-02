'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SocialIcons from '@/app/Components/SocialIcons/SocialIcons';


const pages = [
    {
        name: 'Home',
        link: '#'
    },
    {
        name: 'Articles',
        link: '#'
    },
    {
        name: 'Contact Us',
        link: '#'
    }
]

const links = [
    {
        "name": "Invozapp",
        "link": "#"
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

const Footer = () => {
    return (
        <motion.footer
            id="footer"
            className="bg-gray-100 text-white pb-3 pt-12 px-6 md:px-16 lg:px-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8" variants={staggerContainer}>

                {/* Branding & Description */}
                <motion.div variants={fadeUpVariant}>
                    <div className="flex items-center space-x-2 cursor-pointer select-none">
                        <Image src="/logo/da_logo_bg.svg" alt="Logo" width={25} height={25} />
                        <span className='text-gray-800 text-l font-bold'>DEV AFFAIRS</span>
                    </div>
                    <hr className="my-4 border-gray-200" />
                    <p className="mt-4 text-sm text-gray-800">
                        Design Your Space On the Internet
                    </p>
                    <SocialIcons animate={true}/>
                </motion.div>

                {/* Navigation Links */}
                <motion.div className="grid grid-cols-2 gap-8 text-sm text-gray-800" variants={fadeUpVariant}>
                    <div>
                        <h3 className="font-bold">Pages</h3>
                        <ul className="mt-3 space-y-2">
                            {pages.map((page, index) => (
                                <li key={index}>
                                    <Link href={page.link}>{page.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold">Links</h3>
                        <ul className="mt-3 space-y-2">
                            {links.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.link}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* Newsletter Subscription */}
                <motion.div className='flex flex-col space-y-4' variants={fadeUpVariant}>
                    <h3 className="font-bold text-gray-800">Mail us</h3>
                    <div className='flex text-center flex-row gap-2 w-full justify-center md:justify-start text-xl'>
                        <span className="text-gray-700 cursor-pointer">business@devaffairs.dev</span>
                    </div>
                </motion.div>

            </motion.div>

            {/* Footer Bottom */}
            <motion.div className="text-center text-xs text-gray-400 mt-12" variants={fadeUpVariant}>
                <p className="text-gray-600 text-sm">&copy; 2025. All Rights Reserved.</p>
            </motion.div>
        </motion.footer>
    );
};

export default Footer;
