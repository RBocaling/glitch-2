import React, { useEffect, useState } from 'react';


const GlitchText = ({ 
  text, 
  className = '',
  intensity = 'medium' 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const [superGlitch, setSuperGlitch] = useState(false);
  const [horizontalOffset, setHorizontalOffset] = useState(0);

  // More frequent random glitch effects
  useEffect(() => {
    // Regular glitch interval
    const randomGlitchInterval = setInterval(() => {
      if (Math.random() < 0.2) { // Increased frequency (20% chance)
        setGlitchActive(true);
        // Random horizontal shift for RGB-split effect, resembling reference image
        setHorizontalOffset(Math.random() > 0.5 ? 2 : -2);
        setTimeout(() => {
          setGlitchActive(false);
          setHorizontalOffset(0);
        }, 150); // Shorter duration to match the reference image style
      }
    }, 2000); // More frequent checks

    // Super glitch effect (rare but intense)
    const superGlitchInterval = setInterval(() => {
      if (Math.random() < 0.08) { // 8% chance of super glitch
        setSuperGlitch(true);
        setHorizontalOffset(Math.random() > 0.5 ? 4 : -4);
        setTimeout(() => {
          setSuperGlitch(false);
          setHorizontalOffset(0);
        }, 300);
      }
    }, 4000);

    return () => {
      clearInterval(randomGlitchInterval);
      clearInterval(superGlitchInterval);
    };
  }, []);

  // Enhanced intensity values with RGB split effects matching the reference image
  const getIntensityValues = () => {
    switch (intensity) {
      case 'low':
        return {
          animSpeed1: '0.1s',
          animSpeed2: '0.15s',
          animSpeed3: '0.12s',
          opacityLevel: '0.7',
          offset1: '-2px',
          offset2: '2px',
          offset3: '1px',
          skewIntensity: '0.3s',
          clipPath: 'inset(5% 0 70% 0)',
          clipPath2: 'inset(70% 0 5% 0)',
          clipPath3: 'inset(30% 0 30% 0)',
          textShadow1: '-2px 0 #ff00ff, 0 0 3px rgba(255, 0, 255, 0.5)',
          textShadow2: '2px 0 #00ffff, 0 0 3px rgba(0, 255, 255, 0.5)',
          textShadow3: '0 0 2px white',
          mainTextShadow: '0 0 2px white, 0 0 4px rgba(255, 255, 255, 0.5)'
        };
      case 'high':
        return {
          animSpeed1: '0.05s',
          animSpeed2: '0.06s',
          animSpeed3: '0.04s',
          opacityLevel: '1',
          offset1: '-3px',
          offset2: '3px',
          offset3: '1px',
          skewIntensity: '0.1s',
          clipPath: 'inset(10% 0 80% 0)',
          clipPath2: 'inset(80% 0 10% 0)',
          clipPath3: 'inset(40% 0 40% 0)',
          textShadow1: '-3px 0 #ff00ff, 0 0 5px rgba(255, 0, 255, 0.7)',
          textShadow2: '3px 0 #00ffff, 0 0 5px rgba(0, 255, 255, 0.7)',
          textShadow3: '0 0 3px white, 0 0 6px rgba(255, 255, 255, 0.7)',
          mainTextShadow: '0 0 3px white, 0 0 6px rgba(255, 255, 255, 0.7)'
        };
      default: // medium - balanced intensity
        return {
          animSpeed1: '0.08s',
          animSpeed2: '0.08s',
          animSpeed3: '0.08s',
          opacityLevel: '0.9',
          offset1: '-2.5px',
          offset2: '2.5px',
          offset3: '1px',
          skewIntensity: '0.2s',
          clipPath: 'inset(30% 0 60% 0)',
          clipPath2: 'inset(60% 0 30% 0)',
          clipPath3: 'inset(45% 0 45% 0)',
          textShadow1: '-2.5px 0 #ff00ff, 0 0 4px rgba(255, 0, 255, 0.6)',
          textShadow2: '2.5px 0 #00ffff, 0 0 4px rgba(0, 255, 255, 0.6)',
          textShadow3: '0 0 2px white, 0 0 5px rgba(255, 255, 255, 0.6)',
          mainTextShadow: '0 0 2px white, 0 0 5px rgba(255, 255, 255, 0.6)'
        };
    }
  };

  const {
    animSpeed1,
    animSpeed2,
    animSpeed3,
    opacityLevel,
    offset1,
    offset2,
    offset3,
    skewIntensity,
    clipPath,
    clipPath2,
    clipPath3,
    textShadow1,
    textShadow2,
    textShadow3,
    mainTextShadow
  } = getIntensityValues();

  // Calculate if any glitch effect is active
  const isGlitching = isHovered || glitchActive || superGlitch;
  
  // RGB split effect for main text
  const mainColor = superGlitch ? 'rgba(255, 255, 255, 0.95)' : 'white';
  
  // Calculate transformed offsets based on current horizontal offset state
  const transformedOffset1 = `calc(${offset1} + ${horizontalOffset}px)`;
  const transformedOffset2 = `calc(${offset2} + ${horizontalOffset * -1}px)`;

  return (
    <div 
      className={`relative inline-block font-mono ${className} ${superGlitch ? 'super-glitch' : ''}`}
      data-text={text}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: isGlitching
          ? `glitch-skew ${superGlitch ? '0.1s' : skewIntensity} ease-in-out infinite alternate` 
          : 'none',
        color: mainColor,
        textShadow: mainTextShadow,
        letterSpacing: '0.05em',
        fontWeight: 'bold',
        position: 'relative',
        display: 'inline-block',
        transform: superGlitch ? 'scale(1.02)' : 'scale(1)',
        transition: 'transform 0.1s ease'
      }}
    >
      {/* Main text */}
      <span className="relative z-10 inline-block">
        {text}
      </span>
      
      {/* Red/Magenta channel - positioned to left */}
      <span 
        className="absolute top-0 left-0 w-full h-full z-20"
        style={{
          left: transformedOffset1,
          opacity: isGlitching ? (superGlitch ? '1' : opacityLevel) : '0.5',
          color: '#ff00ff',
          textShadow: textShadow1,
          mixBlendMode: 'screen',
          clipPath: isGlitching ? clipPath : 'none',
          display: 'block',
          animation: isGlitching ? `glitch-anim ${animSpeed1} infinite steps(1)` : 'none'
        }}
        aria-hidden="true"
      >
        {text}
      </span>
      
      {/* Blue/Cyan channel - positioned to right */}
      <span 
        className="absolute top-0 left-0 w-full h-full z-20"
        style={{
          left: transformedOffset2,
          opacity: isGlitching ? (superGlitch ? '1' : opacityLevel) : '0.5',
          color: '#00ffff',
          textShadow: textShadow2,
          mixBlendMode: 'screen',
          clipPath: isGlitching ? clipPath2 : 'none',
          display: 'block',
          animation: isGlitching ? `glitch-anim2 ${animSpeed2} infinite steps(1)` : 'none'
        }}
        aria-hidden="true"
      >
        {text}
      </span>
      
      {/* White flash layer - only visible during active glitches for scanline effect */}
      {isGlitching && (
        <span 
          className="absolute top-0 left-0 w-full h-full z-30 scan-lines"
          style={{
            left: offset3,
            opacity: superGlitch ? '0.9' : '0.7',
            color: 'white',
            textShadow: textShadow3,
            animation: `glitch-anim3 ${animSpeed3} infinite steps(1)`,
            clipPath: clipPath3,
            mixBlendMode: 'overlay'
          }}
          aria-hidden="true"
        >
          {text}
        </span>
      )}
      
      {/* Extreme glitch layer for super glitch only */}
      {superGlitch && (
        <span 
          className="absolute top-0 left-0 w-full h-full z-40"
          style={{
            opacity: '0.95',
            color: 'white',
            filter: 'brightness(2) contrast(2)',
            animation: 'glitch-flash 0.05s infinite steps(1)',
            transform: 'translate(1px, -1px)'
          }}
          aria-hidden="true"
        >
          {text}
        </span>
      )}
      
      {/* Black cut-out effect for super glitch only */}
      {superGlitch && (
        <span 
          className="absolute top-0 left-0 w-full h-full z-50"
          style={{
            opacity: '0.9',
            color: 'black',
            clipPath: 'inset(50% 0 20% 0)',
            animation: 'glitch-flash 0.08s infinite steps(1) reverse',
          }}
          aria-hidden="true"
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default GlitchText;
