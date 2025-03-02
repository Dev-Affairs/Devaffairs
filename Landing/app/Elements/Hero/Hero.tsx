import React from "react";
import { motion } from "framer-motion";
import { RotateWords } from "@/app/Components/RotateWords/RotateWords";
import ScrollDown from "@/app/Components/ScrollDown/ScrollDown";
import { scrollToView } from "@/app/Services/AppService"

function Hero() {
    return (
        <div
            className="min-h-screen flex justify-center items-center relative overflow-hidden"
            onWheel={(e) => {
                if (e.deltaY > 0) scrollToView("feature-section"); // Scroll down triggers smooth scroll
            }}
            id="hero-section"
        >
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-col items-center justify-center text-center p-6 lg:p-20 z-10"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-4xl font-bold md:text-7xl select-none cursor-pointer text-center"
                >
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: [0] }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="text-red-500 inline-block"
                    >
                        Design
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                        className="text-gray-700"
                    >
                        {" "}
                        Your Space
                    </motion.span>

                    <br />
                    <motion.span
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
                        className="text-gray-700"
                    >
                        On The{" "}
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-cyan-600 to-blue-900 animate-gradient"
                    >
                        Internet
                    </motion.span>
                </motion.h1>
                <motion.span
                    className="select-none cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                >
                    <RotateWords
                        preText="We"
                        postText="Things For You"
                        words={["Design", "Develop", "Manage"]}
                        className="text-lg text-gray-400 mt-4 text-center w-fit flex items-center justify-center mx-auto gap-1.5"
                        animateDuration={0.5}
                        rotateDuration={2000}
                        rotateDelay={2000}
                        rotateClassName="text-gray-800"
                    />
                </motion.span>

                {/* Smooth Scroll Button */}
                {/* <motion.div
                    className="mt-10 cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
                    onClick={() => scrollToView("feature-section")}
                >
                    <ScrollDown sectionId="feature-section" />
                </motion.div> */}
            </motion.section>
        </div>
    );
}

export default Hero;
