import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkIsMobile = () => {
      const mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = (e) => {
      const hoveredElement = e.target;
      const isClickable = hoveredElement && (
        hoveredElement.tagName === 'BUTTON' ||
        hoveredElement.tagName === 'A' ||
        hoveredElement.onclick ||
        hoveredElement.classList.contains('cursor-pointer') ||
        window.getComputedStyle(hoveredElement).cursor === 'pointer'
      );
      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', updateCursorType);
    
    // Handle mobile devices - hide custom cursor
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      return () => {};
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', updateCursorType);
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [position.x, position.y]);

  // Don't render on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`w-2 h-2 bg-white rounded-full transition-all duration-150 ${
            isPointer ? 'scale-150' : 'scale-100'
          }`}
        />
      </div>
      
      {/* Trailing ring */}
      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.1s ease-out',
        }}
      >
        <div
          className={`w-8 h-8 border border-white rounded-full transition-all duration-300 ${
            isPointer ? 'scale-150 border-purple-400' : 'scale-100'
          }`}
          style={{
            mixBlendMode: 'difference',
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;