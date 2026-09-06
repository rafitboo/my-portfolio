"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if hovering over a link, button, or input field
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'input' ||
        e.target.closest('a') ||
        e.target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Do not render the custom cursor on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Inner Dot - Fast tracking */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#A4D8FF] rounded-full pointer-events-none z-[100] shadow-[0_0_10px_rgba(164,216,255,0.8)]"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      
      {/* Outer Ring - Spring trailing & hover expansion */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#A4D8FF] rounded-full pointer-events-none z-[100]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.8 : 1,
          backgroundColor: isHovering ? 'rgba(164, 216, 255, 0.15)' : 'rgba(164, 216, 255, 0)',
          borderColor: isHovering ? 'rgba(164, 216, 255, 0.8)' : 'rgba(164, 216, 255, 0.4)'
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
}