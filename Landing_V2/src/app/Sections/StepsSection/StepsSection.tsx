'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Analysis & Planning',
    description:
      'We begin by understanding your goals, challenges, and requirements. Through collaborative discussions and research, we create a detailed roadmap that aligns with your vision and business objectives.',
  },
  {
    title: 'Design & Development',
    description:
      'Once the design is finalized, our development team brings it to life using cutting-edge technologies and best practices. We focus on scalability, security, and performance to ensure your product not only looks great but also functions flawlessly.',
  },
  {
    title: 'Optimization & Release',
    description:
      'During the Optimization & Release phase, we conduct rigorous testing to refine every detail and ensure a flawless product. Once optimized and approved, we launch with precision and provide ongoing support to guarantee a seamless transition and sustained success.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function StepsSection() {
  return (
    <section className="py-20 text-black dark:text-white bg-white dark:bg-neutral-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
        {/* Left side */}
        <motion.div
          className="lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 text-transparent bg-clip-text">
            From concept to completion,<br />
            we craft every step to drive <br /> meaningful results
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
            Our approach keeps you engaged at every stage, ensuring the final product not only meets your expectations but also delivers tangible value to your business.
          </p>
        </motion.div>

        {/* Right side (Steps) */}
        <div className="lg:w-1/2 space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="border-l-2 pl-6 border-gray-200 dark:border-white/10"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <h3 className="text-lg font-semibold text-red-600">{step.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
