'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ContactInfoSection() {
  return (
    <section className="main-margin py-16">
      <div className="space-y-12">
        {/* Top Text */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-semibold leading-snug">
            A Commitment to Excellence<br />
            in <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-md">Digital Marketing</span>
          </h2>

          {/* Paragraph */}
          <p className="max-w-xl text-gray-700 dark:text-gray-300 text-sm sm:text-base">
            We pride ourselves on delivering impactful results. Our campaigns have achieved a 30% increase in client engagement,
            highlighting our digital marketing expertise. Join the successful agencies that trust us to enhance their brand presence.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full overflow-hidden rounded-2xl relative h-[70vh]"
        >
          <Image
            src="https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Purple flower close-up"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
