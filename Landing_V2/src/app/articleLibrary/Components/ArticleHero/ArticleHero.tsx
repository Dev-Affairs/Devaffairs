'use client';

import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

function ArticleHero() {
    return (
        <section className="main-margin pt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full overflow-hidden rounded-2xl relative h-[30vh] sm:h-[70vh]"
        >
          <Image
            src="/articles/background_image.png"
            alt="Purple flower close-up"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        </section>
    )
}

export default ArticleHero