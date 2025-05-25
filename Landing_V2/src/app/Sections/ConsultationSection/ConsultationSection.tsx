'use client';

import Image from 'next/image';
import { motion as Motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const ConsultationSection = () => {
  return (
    <section
      className="main-margin bg-white dark:bg-[#161616] shadow-md rounded-3xl text-black dark:text-white"
      role="region"
      aria-label="Client Testimonial Section"
    >
      <div className="mx-auto rounded-2xl px-6 sm:px-10 py-12 sm:py-16 flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <Motion.div
          className="w-full lg:w-1/2 h-[280px] sm:h-[360px] relative rounded-xl overflow-hidden"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src="/sections/consultationSection/stone.png"
            alt="Stone textured wall representing stability and strategy"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </Motion.div>

        {/* Quote Block */}
        <Motion.div
          className="w-full lg:w-1/2 space-y-6"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <p className="text-xl sm:text-2xl font-medium leading-relaxed text-black dark:text-white">
            "DevAffairs transformed our online presence, making it easier for us
            to attract clients and showcase our work effectively."
          </p>
          <div className="inline-block bg-gray-100 dark:bg-white/10 text-black dark:text-white rounded-lg px-5 py-3">
            <p className="font-semibold">Emily Johnson</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">CEO, Marketing Co.</p>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default ConsultationSection;
