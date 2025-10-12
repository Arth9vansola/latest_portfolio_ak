import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const { isDark, theme } = useTheme();
  const stats = [
    {
      number: 50,
      suffix: '+',
      label: 'Projects Completed',
      icon: '🚀'
    },
    {
      number: 6,
      suffix: '+',
      label: 'Certifications',
      icon: '🏆'
    },
    {
      number: 2,
      suffix: '+',
      label: 'Years Experience',
      icon: '⏱️'
    },
    {
      number: 100,
      suffix: '%',
      label: 'Client Satisfaction',
      icon: '😊'
    }
  ];

  return (
    <motion.section 
      className="py-20 transition-colors duration-300"
      style={{ backgroundColor: isDark ? 'rgba(16, 13, 37, 0.5)' : 'rgba(241, 245, 249, 0.8)' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold mb-4 transition-colors duration-300"
            style={{ color: isDark ? '#ffffff' : '#1e293b' }}
          >
            Portfolio Stats
          </h2>
          <p 
            className="max-w-2xl mx-auto transition-colors duration-300"
            style={{ color: isDark ? '#aaa6c3' : '#475569' }}
          >
            Numbers that reflect my journey and commitment to excellence in development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl transition-all duration-300 border border-white/10"
              style={{ 
                backgroundColor: isDark ? '#151030' : '#f8fafc',
                borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: isDark ? 'rgba(21, 16, 48, 0.8)' : 'rgba(248, 250, 252, 0.8)'
              }}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div 
                className="text-4xl font-bold mb-2 transition-colors duration-300"
                style={{ color: isDark ? '#ffffff' : '#1e293b' }}
              >
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <p 
                className="transition-colors duration-300"
                style={{ color: isDark ? '#aaa6c3' : '#475569' }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StatsSection;