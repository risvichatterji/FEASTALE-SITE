
import React from 'react';
// Fix: Import the Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  stagger?: number;
}

// Fix: Explicitly type containerVariants with the Variants type.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: i, delayChildren: 0.04 * i },
  }),
};

// Fix: Explicitly type childVariants with the Variants type to resolve type incompatibility.
const childVariants: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: 20,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', stagger = 0.05 }) => {
  const words = text.split(' ').map((word, index) => ({ word, id: `${word}-${index}` }));

  return (
    <motion.div
      style={{ display: 'flex', flexWrap: 'wrap' }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={stagger}
      className={className}
    >
      {words.map(({ word, id }, index) => (
        <span key={id} className="mr-[0.25em] whitespace-nowrap">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={`${char}-${charIndex}`}
              style={{ display: 'inline-block' }}
              variants={childVariants}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;