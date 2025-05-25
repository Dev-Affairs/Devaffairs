'use client';

import { motion as Motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-background text-foreground"
      role="region"
      aria-label="Hero Section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Dark mode background */}
        <Image
          src="/sections/heroSection/dark-background.png"
          alt="Dark Background"
          fill
          className="object-cover object-center opacity-90 hidden dark:block"
          priority
          sizes="100vw"
        />
        {/* Light mode background */}
        <Image
          src="/sections/heroSection/light-background.png"
          alt="Light Background"
          fill
          className="object-cover object-center opacity-90 block dark:hidden"
          priority
          sizes="100vw"
        />

        {/* Gradient Overlay (Top-to-Bottom Fade) */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent dark:from-black/70 pointer-events-none" /> */}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-8 md:px-20 text-center md:text-left">
        <Motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl space-y-6"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tighttext-white">
            BOSQAR INVEST is a fast-growing <br />
            CEE company builder and perpetual <br />
            capital provider
          </h1>

          <button className="px-6 py-2 border border-black dark:border-white text-black dark:text-white rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300">
            CONTACT
          </button>
        </Motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
