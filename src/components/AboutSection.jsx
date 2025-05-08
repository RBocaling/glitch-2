import { useState, useEffect, useRef } from "react";
import GlitchText from "./GlitchText";

export default function AboutSection() {
  const [isGlitchActive, setIsGlitchActive] = useState(false);
  const [glitchIntensity, setGlitchIntensity] = useState(0.5);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const aboutRef = useRef(null);
  
  // Random glitch effect at intervals
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.2) {
        setIsGlitchActive(true);
        setGlitchIntensity(Math.random() * 0.5 + 0.3); // Random intensity between 0.3 and 0.8
        setTimeout(() => setIsGlitchActive(false), Math.random() * 150 + 100);
      }
    }, Math.random() * 3000 + 2000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!aboutRef.current) return;
      
      const rect = aboutRef.current.getBoundingClientRect();
      const isHovering = 
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
        
      if (isHovering) {
        // Calculate mouse position relative to section center
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate offset (larger divisor = smaller movement)
        const offsetX = (e.clientX - centerX) / 30;
        const offsetY = (e.clientY - centerY) / 30;
        
        setParallaxOffset({ x: offsetX, y: offsetY });
        
        // Random glitch on movement
        if (Math.random() < 0.01) {
          setIsGlitchActive(true);
          setTimeout(() => setIsGlitchActive(false), 100);
        }
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="about" 
      ref={aboutRef}
      className="py-20 relative overflow-hidden scan-lines horizontal-glitch-lines bg-black"
    >
      {/* Digital noise background */}
      <div className="absolute inset-0 opacity-15 z-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 250 250%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
      
      {/* Matrix-like background that moves on scroll */}
      <div className="absolute inset-0 bg-matrix-code opacity-10 z-0" style={{
        transform: `translateY(${parallaxOffset.y * -1.5}px)`
      }}></div>
      
      {/* Additional glitch overlay only shown during active glitch */}
      {isGlitchActive && (
        <div 
          className="absolute inset-0 mix-blend-overlay z-0 opacity-30"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 0%, rgba(0, 255, 255, 0.2) 50%, transparent 100%)',
            backgroundSize: '100% 8px'
          }}
        ></div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div 
            className={`mb-6 inline-block transform ${isGlitchActive ? 'rotate-[-2deg]' : 'rotate-[-1deg]'}`}
            style={{ transform: `rotate(-1deg) translate(${isGlitchActive ? Math.random() * 4 - 2 : 0}px, ${isGlitchActive ? Math.random() * 4 - 2 : 0}px)` }}
          >
            <span className={`inline-block py-2 px-4 font-mono font-bold text-[hsl(var(--neon-cyan))] border border-[hsl(var(--rgb-magenta))] shadow-[0_0_8px_hsla(var(--rgb-cyan),0.7)] ${isGlitchActive ? 'rgb-split-intense' : 'rgb-split'}`} data-text="SYSTEM::INFO">
              SYSTEM::INFO
            </span>
          </div>
          
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-8 font-mono tracking-wide ${isGlitchActive ? 'rgb-split-intense' : 'rgb-split'}`} 
            data-text="ABOUT"
            style={{ 
              textShadow: `0 0 ${8 + (isGlitchActive ? glitchIntensity * 10 : 0)}px hsla(var(--rgb-cyan), 0.7)`,
              transform: `translate(${parallaxOffset.x * -0.5}px, ${parallaxOffset.y * -0.5}px)`
            }}
          >
            ABOUT
          </h2>
          
          <div 
            className="max-w-3xl mx-auto relative"
            style={{
              transform: `translate(${parallaxOffset.x * 0.3}px, ${parallaxOffset.y * 0.3}px)`
            }}
          >
            {/* Glitched border effect */}
            <div className={`absolute inset-0 -m-[1px] rounded-xl ${isGlitchActive ? 'animate-pulse' : ''}`}
              style={{
                background: 'linear-gradient(90deg, #00c8ff, #ff00ff, #00c8ff)',
                opacity: isGlitchActive ? 0.8 : 0.5,
                filter: 'blur(4px)'
              }}>
            </div>
            
            <div className={`relative z-10 rounded-xl p-[1px] overflow-hidden ${isGlitchActive ? 'glitched-edge' : ''}`}
              style={{
                background: 'linear-gradient(90deg, #00c8ff, #ff00ff, #00c8ff)',
              }}>
              <div className="bg-black digital-noise p-6 rounded-xl">
                <p 
                  className={`text-gray-300 font-mono text-lg tracking-wide ${isGlitchActive ? 'rgb-split' : ''}`}
                  style={{
                    transform: `translateX(${isGlitchActive ? (Math.random() * 3 - 1.5) : 0}px)`,
                  }}
                >
                  Earn <span className="font-bold text-[hsl(var(--rgb-magenta))]">$HYPE</span> rewards automatically distributed to your wallet. 
                  <span className="block my-2">No staking required - just hold <span className="font-bold text-[hsl(var(--rgb-cyan))]">$GLITCH</span> and print <span className="font-bold text-[hsl(var(--rgb-magenta))]">$HYPE</span> every hour.</span>
                  <span className="block mt-4 text-sm">The future of passive income in the matrix.</span>
                </p>
                
                <div className="mt-6 pt-4 border-t border-[hsla(var(--rgb-cyan),0.3)]">
                  <div className="flex flex-col md:flex-row justify-around gap-4 text-center">
                    <div className={`${isGlitchActive ? 'rgb-split' : ''}`}>
                      <div className="text-[hsl(var(--rgb-cyan))] text-3xl font-bold font-mono mb-1">24/7</div>
                      <div className="text-gray-400 text-sm font-mono">Automatic Rewards</div>
                    </div>
                    <div className={`${isGlitchActive ? 'rgb-split' : ''}`}>
                      <div className="text-[hsl(var(--rgb-magenta))] text-3xl font-bold font-mono mb-1">1 HOUR</div>
                      <div className="text-gray-400 text-sm font-mono">Distribution Cycle</div>
                    </div>
                    <div className={`${isGlitchActive ? 'rgb-split' : ''}`}>
                      <div className="text-[hsl(var(--rgb-cyan))] text-3xl font-bold font-mono mb-1">3%</div>
                      <div className="text-gray-400 text-sm font-mono">To Reward Pool</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
