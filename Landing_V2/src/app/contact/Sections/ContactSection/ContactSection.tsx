'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="main-margin py-16">
      {/* Title */}
      <motion.div
        className="text-center mb-12 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          GET IN <span className="title-bg">TOUCH</span>, LET US KNOW <br />
          HOW <span className="ml-1">WE CAN HELP</span>
        </h2>
      </motion.div>

      {/* Contact Content */}
      <motion.div
        className="bg-white dark:bg-neutral-900 shadow-md rounded-2xl mx-auto p-6 sm:p-16 flex flex-col md:flex-row gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Contact Info */}
        <motion.div
          className="w-full md:w-1/2 space-y-6 text-sm sm:text-base"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div>
            <p className="font-medium text-gray-600 dark:text-gray-400">Email:</p>
            <p className="font-semibold">Advisora@gmail.com</p>
          </div>
          <div>
            <p className="font-medium text-gray-600 dark:text-gray-400">Phone:</p>
            <p className="font-semibold">(123) 1221 2323</p>
          </div>
          <div>
            <p className="font-medium text-gray-600 dark:text-gray-400">Address:</p>
            <p className="font-semibold">
              123 Innovation Avenue, Suite 456 <br />
              Tech District, San Francisco, CA 94107 <br />
              United States
            </p>
          </div>
          <div className="flex gap-4 pt-2">
            <a href="#" className="hover:opacity-80" aria-label="Twitter">
              <FaXTwitter size={22} />
            </a>
            <a href="#" className="hover:opacity-80" aria-label="Instagram">
              <FaInstagram size={22} />
            </a>
            <a href="#" className="hover:opacity-80" aria-label="LinkedIn">
              <FaLinkedinIn size={22} />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 space-y-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              className="w-full rounded-md px-4 py-2 bg-gray-100 dark:bg-neutral-800 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="w-full rounded-md px-4 py-2 bg-gray-100 dark:bg-neutral-800 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message..."
              rows={4}
              className="w-full rounded-md px-4 py-2 bg-gray-100 dark:bg-neutral-800 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none"
              onChange={handleChange}
              value={formData.message}
              required
            />
          </div>

          <button
            type="submit"
            className="w-fit px-6 py-2 mt-2 rounded-full border border-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-white hover:opacity-90 transition font-medium"
          >
            Submit
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
