import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 z-50 origin-left"
        style={{ scaleX: scrollProgress }}
      />
      
      {/* Circular Progress Indicator */}
      <div className="fixed bottom-6 left-6 z-40">
        <div className="relative w-12 h-12">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-gray-300"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <motion.path
              className="text-purple-500"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              style={{
                strokeDasharray: '100, 100',
                strokeDashoffset: `${100 - scrollProgress * 100}`,
              }}
              transition={{ duration: 0.1 }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs text-white font-bold">
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollProgress;