'use client';

import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const faqs = [
  {
    question: 'What is digital marketing, and why is it important?',
    answer:
      'Digital marketing refers to marketing efforts that use the internet or electronic devices. It helps businesses reach a larger audience, increase brand awareness, and generate leads efficiently.',
  },
  // Duplicate for example (repeat 4-5 times)
  {
    question: 'What is digital marketing, and why is it important?',
    answer:
      'Digital marketing refers to marketing efforts that use the internet or electronic devices. It helps businesses reach a larger audience, increase brand awareness, and generate leads efficiently.',
  },
  {
    question: 'What is digital marketing, and why is it important?',
    answer:
      'Digital marketing refers to marketing efforts that use the internet or electronic devices. It helps businesses reach a larger audience, increase brand awareness, and generate leads efficiently.',
  },
  {
    question: 'What is digital marketing, and why is it important?',
    answer:
      'Digital marketing refers to marketing efforts that use the internet or electronic devices. It helps businesses reach a larger audience, increase brand awareness, and generate leads efficiently.',
  },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#181818] rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left px-10 py-8 text-white font-medium"
      >
        {question}
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-5 text-gray-400 text-sm"
          >
            {answer}
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="main-margin py-20">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">FAQs</h2>
          <p className="text-basic">
            Discover answers to common questions about Noira&apos;s services and how we
            can assist you.
          </p>
          <button className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
            Get in Touch
          </button>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-[#222] rounded-xl p-6 transition duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left text-gray-900 dark:text-white text-base font-medium"
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                {faq.question}
                <span className="ml-4">
                  {openIndex === index ? <FaMinus size={12} /> : <FaPlus size={12} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <Motion.div
                    id={`faq-content-${index}`}
                    key="answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden mt-3 text-sm text-gray-700 dark:text-gray-400"
                  >
                    <p>{faq.answer}</p>
                  </Motion.div>
                )}
              </AnimatePresence>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
