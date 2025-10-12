import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => onLoadComplete(), 500);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-primary flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      style={{ pointerEvents: isComplete ? 'none' : 'all' }}
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Arth
          </h1>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Progress Text */}
        <motion.p
          className="text-gray-400 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Loading Portfolio... {progress}%
        </motion.p>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-1 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-purple-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;