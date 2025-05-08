import React, { useState, useEffect, useRef } from "react";
import glitchLogo from "../assets/image_1746514888692.png";

export default function HeroSection() {
  const [rocketMode, setRocketMode] = useState(false);
  const [isGlitchActive, setIsGlitchActive] = useState(false);
  const [glitchIntensity, setGlitchIntensity] = useState(0.5);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  
  // Random glitch effect at intervals with varying intensity
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.3) { // Increased frequency
        setIsGlitchActive(true);
        setGlitchIntensity(Math.random() * 0.7 + 0.4); // Higher intensity between 0.4 and 1.1
        
        // Create random micro-glitches within the main glitch
        const microGlitchCount = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < microGlitchCount; i++) {
          setTimeout(() => {
            setGlitchIntensity(prev => Math.random() * 0.6 + 0.6); // Spike intensity during glitch
          }, Math.random() * 80 + i * 40);
        }
        
        setTimeout(() => setIsGlitchActive(false), Math.random() * 200 + 120);
      }
    }, Math.random() * 3000 + 1000); // More frequent glitches
    
    // Additional random flicker glitches
    const flickerInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        setIsGlitchActive(true);
        setTimeout(() => setIsGlitchActive(false), 50);
        setTimeout(() => {
          setIsGlitchActive(true);
          setTimeout(() => setIsGlitchActive(false), 30);
        }, 100);
      }
    }, 2000);
    
    return () => {
      clearInterval(glitchInterval);
      clearInterval(flickerInterval);
    };
  }, []);
  
  // Parallax effect on scroll and mouse move
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const offsetY = scrollY * 0.15; // Adjust speed as needed
      setParallaxOffset(prev => ({ ...prev, y: offsetY }));
    };
    
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const isHovering = 
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
        
      if (isHovering) {
        // Calculate mouse position relative to hero center
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate offset (larger divisor = smaller movement)
        const offsetX = (e.clientX - centerX) / 30;
        
        setParallaxOffset(prev => ({ ...prev, x: offsetX }));
        
        // Random glitch on movement
        if (Math.random() < 0.01) {
          setIsGlitchActive(true);
          setTimeout(() => setIsGlitchActive(false), 100);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const handleRocketClick = () => {
    setRocketMode(true);
    setIsGlitchActive(true);
    // Reset after animation completes
    setTimeout(() => {
      setRocketMode(false);
      setIsGlitchActive(false);
    }, 3500);
  };

  // Matrix-like Digital rain component
  const DigitalRain = () => {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-20 z-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={`rain-${i}`}
            className="absolute w-[2px] bg-gradient-to-b from-transparent via-[hsl(var(--rgb-cyan))] to-transparent"
            style={{
              height: `${Math.random() * 40 + 15}%`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
              animation: `fall ${Math.random() * 8 + 4}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              filter: isGlitchActive ? 'blur(1px)' : 'none'
            }}
          ></div>
        ))}
      </div>
    );
  };
  
  // Digital geometric glitch fragments
  const GlitchFragments = () => {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-10 z-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={`fragment-${i}`}
            className={`absolute ${i % 2 === 0 ? 'bg-[hsla(var(--rgb-cyan),0.3)]' : 'bg-[hsla(var(--rgb-magenta),0.3)]'}`}
            style={{
              width: `${Math.random() * 70 + 20}px`,
              height: `${Math.random() * 70 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
              transform: `rotate(${Math.random() * 360}deg) skew(${Math.random() * 20 - 10}deg)`,
              clipPath: i % 3 === 0 
                ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' 
                : i % 3 === 1 
                  ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' 
                  : 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
              animation: `float-random ${Math.random() * 8 + 10}s ease-in-out infinite`,
              filter: `blur(${Math.random() * 2 + 1}px)`,
              display: isGlitchActive ? 'block' : 'none'
            }}
          ></div>
        ))}
      </div>
    );
  };
  
  // Digital lines in the background
  const DigitalLines = () => {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 z-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={`h-line-${i}`} 
            className="absolute bg-[hsl(var(--rgb-cyan))]" 
            style={{
              height: '1px',
              width: Math.random() * 100 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.1,
              boxShadow: `0 0 ${isGlitchActive ? '12px' : '8px'} hsl(var(--rgb-cyan))`,
              transform: isGlitchActive ? `translateX(${Math.random() * 10 - 5}px)` : 'none',
              transition: 'transform 0.1s ease-out, box-shadow 0.1s ease-out'
            }}
          ></div>
        ))}
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={`v-line-${i}`} 
            className="absolute bg-[hsl(var(--rgb-magenta))]" 
            style={{
              width: '1px',
              height: Math.random() * 100 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.1,
              boxShadow: `0 0 ${isGlitchActive ? '12px' : '8px'} hsl(var(--rgb-magenta))`,
              transform: isGlitchActive ? `translateY(${Math.random() * 10 - 5}px)` : 'none',
              transition: 'transform 0.1s ease-out, box-shadow 0.1s ease-out'
            }}
          ></div>
        ))}
      </div>
    );
  };
  
  // Glitch overlay scan lines
  const GlitchScanLines = () => {
    return isGlitchActive ? (
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={`scan-${i}`}
            className="absolute w-full h-[3px] bg-[hsla(var(--rgb-cyan),0.15)]"
            style={{
              top: `${i * 10 + Math.random() * 5}%`,
              animation: `glitch-scan ${Math.random() * 2 + 0.5}s linear infinite`,
              opacity: Math.random() * 0.3 + 0.1
            }}
          ></div>
        ))}
      </div>
    ) : null;
  };

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="min-h-screen pt-24 pb-12 relative overflow-hidden bg-black scan-lines horizontal-glitch-lines"
    >
      {/* Digital noise background */}
      <div className="absolute inset-0 opacity-15 z-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 250 250%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
      
      {/* Matrix-like digital rain effect */}
      <DigitalRain />
      
      {/* Matrix-like background that moves on scroll */}
      <div className="absolute inset-0 bg-matrix-code opacity-10 z-0" style={{
        transform: `translateY(${parallaxOffset.y * -1.5}px)`
      }}></div>
      
      {/* Glitch geometric fragments that appear during glitch states */}
      <GlitchFragments />
      
      {/* Glitch scan lines that appear during glitch states */}
      <GlitchScanLines />
      
      {/* Parallax grid pattern */}
      <div className="absolute inset-0 z-0" style={{ transform: `translateY(${-parallaxOffset.y * 0.5}px)` }}>
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
          className="w-full h-full object-cover absolute top-0 left-0 opacity-30"
          style={{ mixBlendMode: 'overlay' }}
        >
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="hsla(var(--rgb-cyan), 0.3)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Glitch lines that move with parallax */}
          {isGlitchActive && Array.from({ length: 8 }).map((_, i) => (
            <line 
              key={`glitch-line-${i}`}
              x1="0" 
              y1={10 + (i * 10)} 
              x2="100" 
              y2={10 + (i * 10)} 
              stroke={i % 2 === 0 ? "hsla(var(--rgb-cyan), 0.7)" : "hsla(var(--rgb-magenta), 0.7)"} 
              strokeWidth={Math.random() * 0.5 + 0.2}
              strokeDasharray={`${Math.random() * 5 + 1},${Math.random() * 3 + 1}`}
            />
          ))}
          
          {/* Vertical glitch lines */}
          {isGlitchActive && Array.from({ length: 5 }).map((_, i) => (
            <line 
              key={`v-glitch-line-${i}`}
              y1="0" 
              x1={20 * (i+1)} 
              y2="100" 
              x2={20 * (i+1)} 
              stroke={i % 2 !== 0 ? "hsla(var(--rgb-cyan), 0.5)" : "hsla(var(--rgb-magenta), 0.5)"} 
              strokeWidth={Math.random() * 0.3 + 0.1}
              strokeDasharray={`${Math.random() * 3 + 1},${Math.random() * 5 + 1}`}
            />
          ))}
        </svg>
      </div>
      
      <DigitalLines />
      
      {/* Additional glitch overlay only shown during active glitch */}
      {isGlitchActive && (
        <>
          <div 
            className="absolute inset-0 mix-blend-overlay z-0 opacity-30"
            style={{
              backgroundImage: 'linear-gradient(0deg, transparent 0%, rgba(0, 255, 255, 0.2) 50%, transparent 100%)',
              backgroundSize: '100% 8px'
            }}
          ></div>
          
          {/* RGB split overlay */}
          <div 
            className="absolute inset-0 z-0 opacity-20 mix-blend-screen"
            style={{
              backgroundImage: 'linear-gradient(90deg, rgba(255,0,255,0.3) 0%, transparent 50%, rgba(0,255,255,0.3) 100%)',
              transform: `translateX(${Math.random() * 10 - 5}px)`
            }}
          ></div>
          
          {/* Random noise blocks */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div 
              key={`noise-block-${i}`}
              className="absolute z-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 250 250%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"
              style={{
                width: `${Math.random() * 30 + 10}%`,
                height: `${Math.random() * 20 + 5}%`,
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 80}%`,
                mixBlendMode: 'overlay'
              }}
            ></div>
          ))}
        </>
      )}
      
      <div className="container mx-auto px-4 py-10 relative z-10">
        {/* Hero Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-12">
          {/* Left side with content */}
          <div className="md:w-1/2 text-center md:text-left">
            <div 
              className={`inline-block mb-4 transform rotate-[-1deg] text-base ${isGlitchActive ? 'rgb-split-intense' : ''}`} 
              data-text="SYSTEM::FUTURE"
              style={{
                transform: `rotate(-1deg) translate(${parallaxOffset.x * 1.5}px, ${parallaxOffset.y * 1.5}px)`
              }}
            >
              <span className="bg-black py-2 px-4 text-[hsl(var(--neon-cyan))] font-mono font-bold border border-[hsl(var(--rgb-magenta))] shadow-lg shadow-[hsl(var(--rgb-cyan))] shadow-opacity-20">
                SYSTEM::FUTURE
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 font-mono leading-none">
              <div 
                className={`text-[hsl(var(--rgb-cyan))] tracking-wide text-5xl md:text-7xl font-bold mb-4 font-mono tracking-wider ${isGlitchActive ? 'rgb-split-intense' : 'rgb-split'}`} 
                data-text="GLITCH"
                style={{ 
                  textShadow: `0 0 ${8 + (isGlitchActive ? glitchIntensity * 10 : 0)}px hsla(var(--rgb-cyan), 0.7)`,
                  transform: `translate(${parallaxOffset.x * -0.8}px, ${parallaxOffset.y * -0.8}px)`
                }}
              >
                GLITCH
              </div>
              <div 
                className={`text-3xl md:text-5xl mt-4 ${isGlitchActive ? 'rgb-split text-[hsl(var(--rgb-cyan))]' : 'text-white'} font-mono tracking-wide`}
                style={{
                  transform: `translateX(${isGlitchActive ? Math.random() * 6 - 3 : 0}px)`,
                  textShadow: isGlitchActive ? `0 0 10px hsla(var(--rgb-cyan), 0.7)` : 'none',
                }}
              >
                <span className="font-extrabold">HOLD GLITCH. EARN HYPE.</span>
              </div>
              <div 
                className={`mt-4 flex justify-center md:justify-start text-2xl md:text-4xl font-mono tracking-wide ${isGlitchActive ? 'rgb-split-intense' : ''}`}
                style={{
                  transform: `translateX(${isGlitchActive ? Math.random() * 4 - 2 : 0}px)`,
                  textShadow: isGlitchActive ? `0 0 10px hsla(var(--rgb-magenta), 0.7)` : 'none',
                }}
              >
                <span className="text-[hsl(var(--rgb-magenta))]">EVERY</span>
                <span className="ml-3 font-extrabold text-[hsl(var(--rgb-magenta))]" data-text="HOUR">
                  HOUR
                </span>
              </div>
            </h1>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a 
                href="#" 
                className={`py-3 px-8 ${isGlitchActive ? 'bg-white text-black rgb-split' : 'bg-[hsl(var(--rgb-cyan))]'} text-black font-bold rounded hover:shadow-lg hover:shadow-[hsl(var(--rgb-cyan))] transition duration-300 transform hover:scale-105 relative overflow-hidden group font-mono`}
                onClick={handleRocketClick}
              >
                <span className={`inline-flex items-center relative z-10 ${rocketMode ? 'to-the-moon' : ''}`}>
                  <span className="mr-2">🚀</span> Buy $GLITCH
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out"></span>
              </a>
              <a 
                href="#calculator" 
                className="py-3 px-8 bg-black border border-[hsl(var(--rgb-magenta))] text-[hsl(var(--rgb-magenta))] font-bold rounded hover:bg-[hsla(var(--rgb-magenta),0.1)] transition duration-300 flex items-center font-mono"
              >
                <span className="mr-2">🧮</span> Calculate APY
              </a>
            </div>
          </div>
          
          {/* Right side with logo */}
          <div className="flex justify-center items-center">
            <div 
              className="relative w-72 h-72 md:w-96 md:h-96"
              style={{
                animation: 'float 3s ease-in-out infinite',
                transform: `translate(${parallaxOffset.x * 0.1}px, ${-parallaxOffset.y * 0.05}px)`
              }}
            >
              {/* Neon glow behind logo */}
              <div className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, hsla(var(--rgb-cyan), 0.3) 0%, rgba(0, 0, 0, 0) 70%)',
                  filter: 'blur(15px)',
                  opacity: isGlitchActive ? 0.8 : 0.4,
                  animation: isGlitchActive ? 'pulse-fast 0.5s infinite' : 'pulse 2s infinite'
                }}
              ></div>
              
              {/* Logo with glitch effect */}
              <div className="w-full h-full relative overflow-hidden flex justify-center items-center">
                <img 
                  src={glitchLogo} 
                  alt="GLITCH Logo" 
                  className={`w-3/4 h-3/4 object-contain relative rounded-full z-10 transition-all duration-500 ${rocketMode ? 'to-the-moon' : ''} ${isGlitchActive ? 'rgb-split-intense' : 'rgb-split'}`}
                  style={{
                    filter: `drop-shadow(0 0 ${15 + (isGlitchActive ? glitchIntensity * 15 : 0)}px hsla(var(--rgb-cyan), 0.8))`,
                    transform: `translate(${isGlitchActive ? (Math.random() * 6 - 3) : 0}px, ${isGlitchActive ? (Math.random() * 6 - 3) : 0}px)`
                  }}
                  data-text="GLITCH Logo"
                />
                
                {/* Static/noise overlay on logo */}
                {isGlitchActive && (
                  <div className="absolute inset-0 opacity-10 z-20 pointer-events-none">
                    <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 250 250%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
                  </div>
                )}
              </div>
              
              {/* Hourly rewards badge */}
              <div 
                className={`absolute -top-4 -right-4 bg-black border ${isGlitchActive ? 'border-white text-white' : 'border-[hsl(var(--rgb-cyan))] text-[hsl(var(--rgb-cyan))]'} rounded-lg px-4 py-2 font-bold text-sm shadow-lg font-mono`}
                style={{
                  transform: `rotate(${3 + (isGlitchActive ? Math.random() * 2 - 1 : 0)}deg)`,
                  animation: isGlitchActive ? 'none' : 'pulse 2s infinite'
                }}
              >
                <span className="flex items-center">
                  <span className="mr-1">⏱️</span> HOURLY REWARDS
                </span>
              </div>
              
              {/* Earn HYPE badge */}
              <div 
                className={`absolute -bottom-2 -left-2 bg-black border ${isGlitchActive ? 'border-white text-white' : 'border-[hsl(var(--rgb-magenta))] text-[hsl(var(--rgb-magenta))]'} rounded-lg px-4 py-2 font-bold text-sm shadow-lg font-mono`}
                style={{
                  transform: `rotate(${-3 + (isGlitchActive ? Math.random() * 2 - 1 : 0)}deg)`,
                  animation: isGlitchActive ? 'none' : 'pulse 2s infinite'
                }}
              >
                <span className="flex items-center">
                  <span className="mr-1">💰</span> EARN $HYPE
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* About section integrated into hero */}
        
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
