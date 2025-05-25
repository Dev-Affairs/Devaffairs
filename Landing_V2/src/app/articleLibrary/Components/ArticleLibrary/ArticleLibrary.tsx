'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ArticlesGrid from '../ArticlesGrid/ArticlesGrid';
import articleData from '@/app/config/articleData';


// Extract unique tags for dropdown
const allTags = Array.from(
  new Set(articleData.flatMap((item) => item.tags))
);

function ArticleLibrary() {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const filteredArticles =
    selectedTag === 'All'
      ? articleData
      : articleData.filter((item) => item.tags.includes(selectedTag));

  return (
    <section className="main-margin">
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
          Article Library
        </span>

        <select
          className="px-4 py-2 rounded-md bg-white dark:bg-neutral-800 text-black dark:text-white border border-gray-300 dark:border-white/10 focus:outline-none"
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
        >
          <option value="All">All Categories</option>
          {allTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <ArticlesGrid Articles={filteredArticles} />
      </motion.div>
    </section>
  );
}

export default ArticleLibrary;
