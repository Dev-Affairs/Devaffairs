'use client';

import { Mail, MapPin } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import Image from 'next/image';

const cards = [
  {
    icon: <Mail size={32} />,
    title: 'Contact Us',
    desc: 'Discover innovative solutions tailored for your digital marketing needs and watch your business thrive.',
  },
  {
    icon: <MapPin size={32} />,
    title: 'Location',
    desc: 'Discover innovative solutions tailored for your digital marketing needs and watch your business thrive.',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function ContactCardSection() {
  return (
    <section className="main-margin relative text-white px-6 py-20 sm:px-10 md:px-20">
      {/* Background Image */}
        <Image
          src="/sections/contactCardSection/redsoil.png" // make sure this image exists in /public
          alt="bg"
          fill
          className="object-cover rounded-2xl"
        />
      <div className="absolute inset-0 -z-10">
      </div>

      {/* Overlay Cards */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, i) => (
          <Motion.div
            key={i}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 space-y-4 shadow-lg"
          >
            <div className="text-white">{card.icon}</div>
            <h3 className="text-2xl font-semibold">{card.title}</h3>
            <p className="text-sm text-white/90">{card.desc}</p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
