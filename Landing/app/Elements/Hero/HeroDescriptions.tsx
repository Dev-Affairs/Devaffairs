"use client";

import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


const hoverEffect = {
//   scale: 1.05,
//   rotate: 1,
  boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
};

function HeroDescriptions() {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {[
        {
          title: "Digital Way",
          description: "DATA & INFRASTRUCTURE AGILITY",
        },
        {
          title: "Cloud Solutions",
          description: "SCALABILITY & SECURITY INTEGRATION",
        },
        {
          title: "AI & Automation",
          description: "INTELLIGENCE & EFFICIENCY GROWTH",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={hoverEffect}
          whileTap={{ scale: 0.98 }}
          className="relative w-80 p-6 bg-white rounded-lg shadow-md transition-all duration-300 cursor-pointer border border-transparent"
        >
          <motion.p
            className="text-gray-700 text-lg font-semibold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
          >
            {item.title}
          </motion.p>
          <motion.p
            className="mt-2 text-gray-400 font-bold tracking-wider"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
          >
            {item.description.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: i * 0.15 },
                }}
                className="block"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
          {/* <motion.div
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-300"
            whileHover={{ opacity: 0.1 }}
          /> */}
        </motion.div>
      ))}
    </div>
  );
}

export default HeroDescriptions;
