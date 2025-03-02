'use client';

import HeaderSubText from '@/app/Components/HeaderSubText/HeaderSubText';
import HeaderText from '@/app/Components/HeaderText/HeaderText';
import { scrollToView } from '@/app/Services/AppService';
import { motion } from 'framer-motion';

const techs = [
    { name: 'Flutter', pageLink: "https://flutter.dev", src: '/tech/Flutter.svg' },
    { name: 'React', pageLink: "https://react.dev", src: '/tech/React.svg' },
    { name: 'Next', pageLink: "https://nextjs.org", src: '/tech/NextJs.svg' },
    { name: 'Go', pageLink: "https://go.dev", src: '/tech/Go.svg' },
    { name: 'Node Js', pageLink: "https://nodejs.org", src: '/tech/NodeJs.svg' },
    { name: 'Angular', pageLink: "https://angular.dev", src: '/tech/Angular.svg' },
    { name: 'Cloudflare', pageLink: "https://www.cloudflare.com", src: '/tech/Cloudflare.svg' },
    { name: 'AWS', pageLink: "https://aws.amazon.com", src: '/tech/AWS.svg' },
    { name: 'MongoDB', pageLink: "https://www.mongodb.com", src: '/tech/MongoDB.svg' },
    { name: 'Postgresql', pageLink: "https://www.postgresql.org", src: '/tech/Postgresql.svg' }
];

// Motion Variants
const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TechSection = () => {
    return (
        <section id="integrations-section" className="py-10 md:py-16 px-6 text-center"
            onWheel={(e) => {
                if (e.deltaY > 0) scrollToView("blog-section");
            }}>
                
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <HeaderText title="Technology Stack" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="text-gray-600 mt-4 text-lg"
                >
                    <HeaderSubText text="Leveraging a modern and powerful technology stack we ensure to pick the best for your requirment" />
                </motion.div>
            </motion.div>

            <motion.div
                className="grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-4 mt-8 justify-center max-w-7xl mx-auto"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                variants={containerVariants}
            >
                {techs.map((tech, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="p-2 md:p-4 flex items-center justify-center cursor-pointer transition-all duration-300 select-none"
                        title={tech.name}
                        onClick={() => window.open(tech.pageLink, "_blank", "noopener,noreferrer")}
                    >
                        <motion.img
                            src={tech.src}
                            alt={tech.name}
                            width={75}
                            height={75}
                            className="mr-2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default TechSection;
