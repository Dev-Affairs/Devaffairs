'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const team = [
    {
    name: 'Anil Kumar',
    role: 'UX/UI Designer',
    desc: 'UX/UI Designer with a passion for traveling and capturing moments through photography.',
    image: '/team/anil.jpg',
  },
  {
    name: 'Rasmi Ranjan',
    role: 'UX/UI Designer',
    desc: 'UX/UI Designer with a passion for traveling and capturing moments through photography.',
    image: '/team/rasmi.jpg',
  },
  {
    name: 'Sunil Kumar',
    role: 'UX/UI Designer',
    desc: 'UX/UI Designer with a passion for traveling and capturing moments through photography.',
    image: '/team/sunil.jpg',
  },
  {
    name: 'Linton Das',
    role: 'UX/UI Designer',
    desc: 'UX/UI Designer with a passion for traveling and capturing moments through photography.',
    image: '/team/linton.jpg',
  },
  {
    name: 'Manish Jangra',
    role: 'UX/UI Designer',
    desc: 'UX/UI Designer with a passion for traveling and capturing moments through photography.',
    image: '/team/manish.jpg',
  }
];

const fadeInUp = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function TeamSection() {
  return (
    <section className="main-margin py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-md">
              Our Team
            </span>{' '}
            of World-Class Designers & Marketers
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="w-full max-w-xs p-[1px] rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 shadow-md hover:shadow-xl hover:border-white/20 transition duration-300"
            >
              <div className="rounded-lg overflow-hidden bg-white/5 dark:bg-white/5">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 space-y-1">
                  <h3 className="font-semibold text-sm sm:text-base">{member.name}</h3>
                  <p className="text-xs text-[#898989] dark:text-[#686868]">{member.role}</p>
                  <p className="text-xs text-[#898989] dark:text-[#686868]">{member.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
