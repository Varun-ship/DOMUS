'use client';

import { motion } from 'framer-motion';
import { ReactNode, createElement } from 'react';

interface AnimatedHeadingProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  delay?: number;
}

export default function AnimatedHeading({ children, as = 'h1', className = '', delay = 0 }: AnimatedHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="animated-heading"
    >
      {createElement(as, { className }, children)}
    </motion.div>
  );
}

