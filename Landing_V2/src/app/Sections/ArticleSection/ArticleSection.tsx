'use client';

import ArticlesGrid from '@/app/articleLibrary/Components/ArticlesGrid/ArticlesGrid';
import articleData from '@/app/config/articleData';
import { motion as Motion } from 'framer-motion';


const ArticleSection = () => {
  return (
    <section className="main-margin py-12 text-center flex flex-col gap-10">
      <div className="mx-auto space-y-6">
        {/* Animated Heading */}
        <Motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-semibold leading-snug"
        >
          <span className="title-bg">
            Redefining
          </span>{' '}
          the Meaning of Marketing
        </Motion.h2>

        {/* Subtext */}
        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-basic"
        >
          From standout marketing assets to high-performing campaigns and landing pages, see how<br />
          we bring ideas to life.
        </Motion.p>

        {/* Button */}
      </div>

      <div>
        <ArticlesGrid Articles={articleData} />
      </div>
      <div>
        <Motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition"
        >
          Read more Articles
        </Motion.button>
      </div>
    </section>
  );
};

export default ArticleSection;
