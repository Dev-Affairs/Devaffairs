'use client';

import { scrollToView } from '@/app/Services/AppService';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const StepsSection = () => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            setHasAnimated(true);
        }
    }, [inView]);

    const fadeInVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: (delay: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut', delay }
        })
    };

    const steps = [
        {
            title: "Analysis & Planning",
            description: "We begin by understanding your goals, challenges, and requirements. Through collaborative discussions and research, we create a detailed roadmap that aligns with your vision and business objectives."
        },
        {
            title: "Design & Development",
            description: "Once the design is finalized, our development team brings it to life using cutting-edge technologies and best practices. We focus on scalability, security, and performance to ensure your product not only looks great but also functions flawlessly."
        },
        {
            title: "Optimization & Release",
            description: "During the Optimization & Release phase, we conduct rigorous testing to refine every detail and ensure a flawless product. Once optimized and approved, we launch with precision and provide ongoing support to guarantee a seamless transition and sustained success."
        }
    ];

    return (
        <section ref={ref} className="relative w-full px-6 md:px-16 py-20 bg-gradient-to-b from-black via-[#021a4f] to-[#00318b] text-white" id="steps-section"
            onWheel={(e) => {
                if (e.deltaY > 0) scrollToView("integrations-section");
            }}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                    initial="hidden"
                    animate={hasAnimated ? 'visible' : 'hidden'}
                    variants={fadeInVariant}
                    className="flex flex-col justify-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        From concept to completion, we craft every step to drive meaningful results.
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Our approach keeps you engaged at every stage, ensuring the final product not only meets your expectations but also delivers tangible value to your business.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="border-l-2 border-white pl-6"
                            initial="hidden"
                            animate={hasAnimated ? 'visible' : 'hidden'}
                            variants={fadeInVariant}
                            custom={index * 0.3}
                        >
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                            <p className="text-gray-300 mt-2">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StepsSection;
