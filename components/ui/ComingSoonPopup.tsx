import React from 'react';
import { motion } from 'framer-motion';

const ComingSoonPopup: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-charcoal text-white rounded-full shadow-lg text-sm font-semibold"
    >
      Coming Soon...
    </motion.div>
  );
};

export default ComingSoonPopup;