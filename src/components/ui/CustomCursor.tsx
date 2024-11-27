'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on devices with mouse
    const isTouchDevice = () => {
      return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        // @ts-ignore
        (navigator.msMaxTouchPoints > 0));
    };

    setIsVisible(!isTouchDevice());

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    if (!isTouchDevice()) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 pointer-events-none z-50 mix-blend-difference hidden sm:block"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: isPointer ? 1.4 : isPressed ? 0.8 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        <div className={`
          w-full h-full rounded-full 
          bg-white
          transition-opacity duration-200
          opacity-100
        `} />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-50 mix-blend-difference hidden sm:block"
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: isPointer ? 1.6 : isPressed ? 1.2 : 1,
          rotate: isPointer ? 45 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 25,
          mass: 0.1,
        }}
      >
        <div className={`
          w-full h-full 
          rounded-full 
          border border-white
          transition-all duration-200
          ${isPointer ? 'opacity-90' : 'opacity-70'}
          ${isPointer ? 'rounded-lg' : 'rounded-full'}
        `} />
      </motion.div>
    </>
  );
}
