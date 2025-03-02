"use client";

import { motion } from "framer-motion";

const ContactRefSection = () => {
    return (
        <section className="py-6 md:py-16 text-center" id="contact-ref-section">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative flex items-center justify-center h-[400px] md:h-[40vh] lg:h-[40vh] max-w-7xl bg-gradient-to-b from-[#021a4f] to-[#00318b]  md:rounded-xl mx-auto text-center px-6"
            >
                <motion.div 
                    className="max-w-2xl"
                    initial="hidden"
                    whileInView="visible"
                    transition={{ staggerChildren: 0.2 }}
                    viewport={{ once: true }}
                >
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-white text-3xl md:text-5xl font-semibold leading-tight"
                    >
                        Bring Us Your Requirements
                    </motion.h1>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="text-gray-200 mt-4"
                    >
                        <span>We will translate your requirement into solution that meets your needs and exceeds your expectations</span>
                    </motion.p>

                    <motion.div 
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        className="mt-6 flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-indigo-700 transition duration-300"
                        >
                            Contact us
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-indigo-700 transition duration-300"
                        >
                            Follow us
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ContactRefSection;
