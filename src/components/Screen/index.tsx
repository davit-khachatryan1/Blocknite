import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWheel } from '@use-gesture/react';
import AltarinText from '../AnimatedText';


export const Screen = ({ color, text, scrollY, component }: any) => {
  // Calculate how much this screen should be translated based on the scroll amount.
  const translateY = Math.max(0, window.innerHeight - scrollY);

  console.log(translateY);

  return <div style={{
    height: '100vh',
    backgroundColor: color,
    transform: `translateY(${translateY}px)`,
    transition: 'transform 0.2s ease-out', // Smooth transition for better UX
    position: 'fixed', // Fixed position to stay within the viewport
    width: '100%',
    top: 0,
    left: 0,
  }}>
    {component}
  </div>;
};