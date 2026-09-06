"use client";

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { playTransitionBeep } from '@/utils/sound';

export default function Template({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    playTransitionBeep();
  }, [pathname]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="relative z-10"
    >
      {children}
    </motion.div>
  );
}