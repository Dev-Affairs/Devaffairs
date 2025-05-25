'use client';

import { motion as Motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const ServicesSection = () => {
  const services = [
    'EMAIL MARKETING',
    'SOCIAL MEDIA',
    'SEO SERVICES',
    'DIGITAL MARKETING',
    'BRAND STRATEGY',
  ];

  return (
    <section className="main-margin bg-[#ffffff] dark:bg-[#161616] py-20 px-6 sm:px-10 md:px-20 shadow-md rounded-3xl">
      <div className="mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Left Heading */}
        <Motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-medium leading-snug"
        >
          <span className="title-bg">
            Services
          </span>{' '}
          that
          <br />
          cover all Bases
        </Motion.div>

        {/* Right List */}
        <div className="flex flex-col space-y-4">
          {services.map((service, index) => (
            <Motion.p
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="text-2xl sm:text-6xl font-semibold dark:text-gray-400 dark:hover:text-white text-gray-600 hover:text-gray-900 transition duration-300"
            >
              {service}
            </Motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
