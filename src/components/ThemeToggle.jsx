import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      className={`fixed top-4 right-4 z-50 p-3 backdrop-blur-md rounded-full border transition-all duration-300 ${
        isDark 
          ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
          : 'bg-black/10 border-black/20 text-gray-800 hover:bg-black/20'
      }`}
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        key={isDark ? 'dark' : 'light'}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <FaSun size={20} className="text-yellow-400" />
        ) : (
          <FaMoon size={20} className="text-blue-600" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;