'use client';

import { motion } from 'framer-motion';
import { ReactNode, createElement } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  as?: 'p' | 'div' | 'span';
  className?: string;
  delay?: number;
}

export default function AnimatedText({ children, as = 'p', className = '', delay = 0 }: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {createElement(as, { className }, children)}
    </motion.div>
  );
}

