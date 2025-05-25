'use client';

import { motion as Motion } from 'framer-motion';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const StatsGrid = () => {
  return (
    <section className="text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {/* Card 1: Image w/ stat, spans 2 rows */}
        <Motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative row-span-2 aspect-[8/12] overflow-hidden shadow-md rounded-xl"
        >
          <Image
            src="/sections/detailSection/bulding-glass.png"
            alt="Building"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-between p-4 bg-black/30">
            <h4 className="text-white text-sm font-medium">
              Client Engagement Boost
            </h4>
            <div>
              <p className="text-4xl font-bold">80%</p>
              <p className="text-sm text-white">
                Driving conversions with targeted marketing campaigns.
              </p>
            </div>
          </div>
        </Motion.div>

        {/* Card 2: Stat Block */}
        <Motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="dark:bg-[#111] bg-[#ff7608] p-6 flex flex-col justify-center h-auto shadow-md rounded-xl"
        >
          <h4 className="text-white text-sm font-medium mb-2">
            Conversion Rate Increase
          </h4>
          <p className="text-5xl font-bold">95%</p>
          <p className="text-sm text-gray-300 mt-2">
            Driving conversions with targeted marketing campaigns.
          </p>
        </Motion.div>

        {/* Card 3: Image only */}
        <Motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden h-auto shadow-md rounded-xl"
        >
          <Image
            src="/sections/detailSection/mac.png"
            alt="Macbook"
            fill
            className="object-cover"
            priority
          />
        </Motion.div>

        {/* Card 4: Image only */}
        <Motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden h-auto shadow-md rounded-xl"
        >
          <Image
            src="/sections/detailSection/bird.png"
            alt="Swan"
            fill
            className="object-cover"
            priority
          />
        </Motion.div>

        {/* Card 5: Stat Block */}
        <Motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#0f6ce7] dark:bg-[#111] p-6 flex flex-col justify-center h-auto shadow-md rounded-xl"
        >
          <h4 className="text-white text-sm font-medium mb-2">
            Conversion Rate Increase
          </h4>
          <p className="text-5xl font-bold">250+</p>
          <p className="text-sm text-gray-300 mt-2">
            Achieving success through strategic planning and execution.
          </p>
        </Motion.div>
      </div>
    </section>
  );
};

export default StatsGrid;
