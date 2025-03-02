'use client';

import HeaderText from '@/app/Components/HeaderText/HeaderText';
import SocialIcons from '@/app/Components/SocialIcons/SocialIcons';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
    const [form, setForm] = useState({ name: '', email: '', purpose: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Form submitted!');
    };

    return (
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center p-6 md:p-12 bg-white text-black min-h-screen">
            <motion.div
                className="md:w-1/2 w-full p-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <HeaderText title="Contact Us" />

                <h1 className="text-3xl font-bold">We’d love to hear from you</h1>
                <p className="text-gray-600 mt-2 text-lg">
                    If you have a requirement in your mind, please don’t hesitate to contact us.
                </p>
                <div className="mt-6 space-y-4">
                    <p className="flex items-center gap-2 text-gray-600 text-lg"><FaMapMarkerAlt /> Bhubaneswar, Chandrasekhar Pur, India</p>
                    <p className="flex items-center gap-2 text-gray-600 text-lg"><FaEnvelope /> business@devaffairs.dev</p>
                </div>
                <SocialIcons  animate={false}/>
            </motion.div>

            <motion.div
                className="md:w-1/2 w-full p-6 bg-gray-100 rounded-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-gray-600">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full p-3 mt-1 bg-white rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-gray-600">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full p-3 mt-1 bg-white rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-gray-600">Purpose</label>
                        <input
                            type="text"
                            name="purpose"
                            value={form.purpose}
                            onChange={handleChange}
                            className="w-full p-3 mt-1 bg-white rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-gray-600">Message</label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            className="w-full p-3 mt-1 bg-white rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                            rows={4}
                            required
                        ></textarea>
                    </div>
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full p-3 bg-blue-600 text-white rounded font-semibold"
                    >
                        SUBMIT
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
}
