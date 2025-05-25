'use client';

import { motion as Motion } from 'framer-motion';
import StatsGrid from './StatsGrid';

const DetailSection = () => {
  return (
    <section className="main-margin flex gap-16 flex-col">
      {/* Top Detail Banner */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Title */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-semibold text-left max-w-xl leading-snug"
        >
          <span>We </span>
          <span className="title-bg">
            Helping
          </span>{' '}
          Companies
          <br />
          grow beyond their Limits
        </Motion.div>

        {/* Right Paragraph */}
        <Motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="text-basic max-w-lg text-sm"
        >
          We pride ourselves on delivering impactful results. Our campaigns have
          achieved a 30% increase in client engagement, highlighting our digital
          marketing expertise. Join the successful agencies that trust us to enhance
          their brand presence.
        </Motion.p>
      </div>
      <StatsGrid />
    </section>
  );
};

export default DetailSection;
