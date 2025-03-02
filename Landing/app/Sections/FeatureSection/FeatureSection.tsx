import React from "react";
import { motion } from "framer-motion";
import HeaderText from "@/app/Components/HeaderText/HeaderText";
import HeaderSubText from "@/app/Components/HeaderSubText/HeaderSubText";
import { scrollToView } from "@/app/Services/AppService";
import { GrAndroid } from "react-icons/gr";
import { FaApple } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";

const FeatureSection = () => {
  const services = [
    "Website Design & Development",
    "Mobile App Development",
    "Custom Software Development",
    "UI/UX design",
    "Cloud Services",
    "SEO & Digital Marketing",
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative px-6 py-6 md:py-16 border-t flex flex-col justify-center items-center"
      id="feature-section"
      onWheel={(e) => {
        if (e.deltaY > 0) scrollToView("steps-section"); // Scroll down triggers smooth scroll
      }}
    >
      <div className="text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <HeaderText title="We Craft Digital Solutions" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-gray-600 mt-4"
        >
          <HeaderSubText text="Specialized in delivering top-notch web and software solutions tailored to meet the unique needs of both businesses and individuals" />
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
          className={`bg-blue-700 hover:bg-blue-600 p-6 rounded-lg shadow-md flex flex-col gap-4 hover:shadow-xl transition-all duration-300 cursor-pointer select-none`}
        >
          <div className="p-4">
            <h2 className="text-3xl mb-2 text-gray-100">Services</h2>
            <hr className="my-2 md:my-4 border-gray-200/80" />
            {
              services.map((service, index) => (
                <div key={index} className="flex items-center gap-2 text-lg md:px-2">
                  <span className="text-gray-100">{service}</span>
                </div>
              ))
            }
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className={`bg-gray-100 p-6 rounded-lg shadow-md flex flex-col gap-4 hover:shadow-lg transition-all duration-300 cursor-pointer`}
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl text-gray-800">Performance</h3>
            <p className="text-gray-600 text-lg">We focus on building High Performance, secure, and scalable solutions that align with your goals and drive success.</p>
          </div>
          <div>
            {
              ["Scalable", "User Friendly", "Modern Design"].map((feature, index) => (
                <span key={index} className="text-xl text-gray-800 flex flex-row items-center gap-2">
                  <GoDotFill />
                  {feature}
                </span>
              ))
            }
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="group bg-gray-100 rounded-lg shadow-md flex flex-col gap-4 hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-opacity duration-300"></div>
          <span className="absolute inset-0 flex flex-col  items-center justify-center text-white transition-opacity duration-300">
            <div className="flex items-center justify-center gap-4 p-4 text-3xl group-hover:text-4xl  transition-all duration-600">
              <SlGlobe className="text-blue-400" />
              <GrAndroid className="text-green-500" />
              <FaApple className="text-slate-200" />
            </div>
            <h5 className="text-xl font-semibold">
              Cross Platform Solutions
            </h5>
          </span>
          <img
            src="/images/feature_image2.webp"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          className={`bg-gray-100 p-6 rounded-lg shadow-md flex flex-col gap-4 hover:shadow-lg transition-all duration-300 cursor-pointer md:col-span-2`}
        >
          <h3 className="text-3xl text-gray-800">We are committed to building practical, efficient, and results driven solutions that truly make an impact.</h3>
          <p className="text-gray-600 text-md">With a team of experienced Developers, Designers, and Tech experts, we take a client-first approach, ensuring each project is crafted with precision, creativity, and functionality. Whether you need
            {
              ["sleek business website", "powerful web application", "workflow solution", "enterprise-grade software system"].map((item, index) => (
                <span key={index}> a <span className={`text-gray`}>{` ${item}`}</span>, </span>
              ))
            }
            we turn your vision into reality.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
          className={`p-6 rounded-lg shadow-md flex flex-col gap-4 transition-all duration-300 cursor-pointer bg-orange-500`}
        >
          <h1 className="text-5xl">
            Analytics <br />And Insights
          </h1>
          <span className="text-lg">
            Dashboards and reports that help you make better decisions and drive growth.
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeatureSection;
