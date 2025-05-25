'use client';

import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ArticleCard } from '../ArticleCard/ArticleCard';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

interface Article {
  slug: string;
  image: string;
  tags: string[];
  title: Array<{ text: string; highlight?: boolean }>;
  description: string;
}

interface ArticlesGridProps {
  Articles: Article[];
}

const ArticlesGrid = ({ Articles = [] }: ArticlesGridProps) => {
  return (
    <section>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {Articles.map((article, index) => (
            <Motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              custom={index}
              viewport={{ once: true, amount: 0.2 }}
              className=""
            >
              <ArticleCard {...article} />
            </Motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ArticlesGrid;
