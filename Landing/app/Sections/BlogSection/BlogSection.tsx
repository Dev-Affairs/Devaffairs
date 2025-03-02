'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import HeaderText from '@/app/Components/HeaderText/HeaderText';
import { scrollToView } from '@/app/Services/AppService';

const BlogSection = () => {
    const blogs = [
        {
            id: 1,
            category: 'DESIGN',
            title: 'Simplify your decisions with our powerful analytics tools',
            author: 'Henríquez',
            readTime: '10 min read',
            imageSrc: '/images/dasboard_1.jpg',
            date: "Dec 17, 2024",
            avatar: "/avatars/default_user.png"
        },
        {
            id: 2,
            category: 'DEVELOPER',
            title: 'Transform insights into strategy with ease with our help',
            author: 'Henríquez',
            readTime: '10 min read',
            imageSrc: '/images/dasboard_1.jpg',
            date: "Dec 17, 2024",
            avatar: "/avatars/default_user.png"
        },
    ];

    // Animation Variants
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
        }),
    };

    return (
        <motion.section
            id="blog-section"
            className="relative px-6 py-6 md:py-16 border-t flex flex-col justify-center items-center text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            onWheel={(e) => {
                if (e.deltaY > 0) scrollToView("contact-ref-section"); // Scroll down triggers smooth scroll
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <HeaderText title="Featured Articles" />
            </motion.div>
            <motion.div
                className="container mx-auto py-10 grid md:grid-cols-3 gap-6 max-w-7xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {blogs.map((blog, index) => (
                    <motion.div
                        key={blog.id}
                        className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
                        custom={index}
                        variants={cardVariants}
                    >
                        <div className="relative w-full h-64">
                            <Image
                                src={blog.imageSrc}
                                alt={blog.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-xl group-hover:bg-blend-multiply transition-all duration-300 cursor-pointer bg-blend-soft-light"
                            />
                        </div>
                        <div className="p-6 bg-white flex flex-col gap-3">
                            <div className='flex items-center justify-between space-x-2 text-gray-500 text-sm'>
                                <span className="text-blue-600 font-medium cursor-pointer">{blog.category}</span>
                                <span>{blog.readTime}</span>
                            </div>
                            <div className="flex items-center gap-2 text-black">
                                <Image
                                    src={blog.avatar}
                                    alt={blog.author}
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 rounded-full"
                                />
                                <span className=" text-gray-700">{blog.author}</span>
                            </div>
                            <h3 className="text-xl font-bold text-black">{blog.title}</h3>
                            <span className=" space-x-2 text-gray-500 text-sm ">{blog.date}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default BlogSection;
