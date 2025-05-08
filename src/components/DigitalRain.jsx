import React, { useEffect, useRef } from 'react';

const DigitalRain = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    
    // Matrix-like characters
    const chars = "01010101010101001010111101010101010100101010101010101010GLITCHHYPE";
    
    // Generate random columns of characters
    const columnCount = Math.floor(containerWidth / 20); // Adjust spacing between columns
    let columns = [];
    
    const getRandomChar = () => {
      return chars[Math.floor(Math.random() * chars.length)];
    };
    
    const getRandomSpeed = () => {
      return 5 + Math.random() * 10; // seconds for animation duration
    };
    
    const getRandomDelay = () => {
      return Math.random() * 8; // seconds for animation delay
    };
    
    const getRandomOpacity = () => {
      return 0.1 + Math.random() * 0.6; // Opacity between 0.1 and 0.7
    };
    
    const getRandomSize = () => {
      return 0.8 + Math.random() * 0.7; // Font size multiplier
    };
    
    const getRandomStartingPosition = () => {
      return Math.random() * 100;
    };
    
    // Create columns of digital rain
    for (let i = 0; i < columnCount; i++) {
      // Create characters for each column
      const column = document.createElement('span');
      column.className = 'digital-rain-character';
      column.textContent = getRandomChar();
      column.style.opacity = getRandomOpacity().toString();
      column.style.fontSize = `${getRandomSize()}rem`;
      column.style.left = `${(i / columnCount) * 100}%`;
      column.style.top = `${getRandomStartingPosition()}%`;
      column.style.animationDuration = `${getRandomSpeed()}s`;
      column.style.animationDelay = `${getRandomDelay()}s`;
      
      container.appendChild(column);
      columns.push(column);
    }
    
    // Randomly change characters
    const interval = setInterval(() => {
      columns.forEach(column => {
        if (Math.random() > 0.9) { // 10% chance to change character
          column.textContent = getRandomChar();
        }
      });
    }, 1000);
    
    return () => {
      clearInterval(interval);
      columns.forEach(column => column.remove());
    };
  }, []);
  
  return (
    <div ref={containerRef} className="digital-rain"></div>
  );
};

export default DigitalRain;