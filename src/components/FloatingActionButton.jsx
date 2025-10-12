import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useTheme } from '../context/ThemeContext';
// Import resume PDF as a URL
import resumePdf from '../assets/resume/arth resume final.pdf?url';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, theme } = useTheme();

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Arth_Vansola_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const actions = [
    {
      icon: FaDownload,
      label: 'Download CV',
      onClick: downloadResume,
      color: 'bg-blue-500/80 hover:bg-blue-600/90 backdrop-blur-sm'
    },
    {
      icon: FaEnvelope,
      label: 'Send Email',
      onClick: () => {
        window.location.href = 'mailto:workaero55@gmail.com';
      },
      color: 'bg-green-500/80 hover:bg-green-600/90 backdrop-blur-sm'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      onClick: () => {
        window.open('https://github.com/Arth9vansola', '_blank');
      },
      color: 'bg-gray-700/80 hover:bg-gray-800/90 backdrop-blur-sm'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      onClick: () => {
        window.open('https://www.linkedin.com/in/arth-vansola-ab6629256/', '_blank');
      },
      color: 'bg-blue-600/80 hover:bg-blue-700/90 backdrop-blur-sm'
    },
    {
      icon: FaXTwitter,
      label: 'X',
      onClick: () => {
        window.open('https://x.com/ArthM3333', '_blank');
      },
      color: 'bg-black/80 hover:bg-black/90 backdrop-blur-sm'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col-reverse space-y-reverse space-y-3 mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {actions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <motion.button
                  key={index}
                  className={`p-3 rounded-full shadow-lg transition-all duration-200 ${action.color} flex items-center space-x-2 group border border-white/10`}
                  style={{ 
                    color: isDark ? '#ffffff' : '#ffffff',
                    borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.2)'
                  }}
                  onClick={action.onClick}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent size={16} />
                  <span className="hidden group-hover:block text-sm whitespace-nowrap font-medium">
                    {action.label}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB Button */}
      <motion.button
        className={`w-14 h-14 rounded-full text-white shadow-lg flex items-center justify-center border border-white/10 ${
          isDark 
            ? 'bg-gradient-to-r from-purple-500/80 to-blue-500/80 backdrop-blur-sm hover:from-purple-600/90 hover:to-blue-600/90' 
            : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <FaPlus size={20} />
      </motion.button>
    </div>
  );
};

export default FloatingActionButton;