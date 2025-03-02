'use client';

import HeaderText from '@/app/Components/HeaderText/HeaderText';
import { motion } from 'framer-motion';
import Image from 'next/image';

const blogPosts = [
    {
        id: 1,
        title: 'Exploring the future with artificial intelligence',
        category: 'Technology',
        date: 'January 7, 2025',
        image: '/images/blog_bg1.jpg',
    },
    {
        id: 2,
        title: 'The pioneering ideas in the AI revolution',
        category: 'Technology',
        date: 'January 7, 2025',
        image: '/images/blog_bg2.jpg',
    },
    {
        id: 3,
        title: 'The intersection of creativity and technology',
        category: 'Technology',
        date: 'January 7, 2025',
        image: '/images/blog_bg3.jpg',
    },
    {
        id: 1,
        title: 'Exploring the future with artificial intelligence',
        category: 'Technology',
        date: 'January 7, 2025',
        image: '/images/blog_bg1.jpg',
    },
    {
        id: 2,
        title: 'The pioneering ideas in the AI revolution',
        category: 'Technology',
        date: 'January 7, 2025',
        image: '/images/blog_bg2.jpg',
    },
    {
        id: 3,
        title: 'The intersection of creativity and technology',
        category: 'Technology',
        date: 'January 7, 2025',
        image: '/images/blog_bg3.jpg',
    }
];

const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ArticlesSection() {
    return (
        <section className="my-16 py-16 px-4 sm:px-8 lg:px-16 container mx-auto">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-3xl sm:text-4xl font-bold text-center text-gray-900"
            >
                <HeaderText title="Dev Affairs Articles" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {blogPosts.map((post, index) => (
                    <motion.div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.2 } },
                        }}
                    >
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={600}
                            height={400}
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-6">
                            <p className="text-sm text-gray-500">{post.category} • {post.date}</p>
                            <h3 className="mt-2 text-lg font-semibold text-gray-900">{post.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
