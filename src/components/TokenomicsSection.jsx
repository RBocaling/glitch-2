import { useState, useEffect, useRef } from "react";

export default function TokenomicsSection() {
  const [isGlitchActive, setIsGlitchActive] = useState(false);
  const [glitchIntensity, setGlitchIntensity] = useState(0.5);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const tokenomicsRef = useRef(null);
  
  // Random glitch effect at intervals with variable intensity
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.2) {
        setIsGlitchActive(true);
        setGlitchIntensity(Math.random() * 0.5 + 0.3); // Random intensity between 0.3 and 0.8
        setTimeout(() => setIsGlitchActive(false), Math.random() * 150 + 100);
      }
    }, Math.random() * 4000 + 3000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!tokenomicsRef.current) return;
      
      const rect = tokenomicsRef.current.getBoundingClientRect();
      const isHovering = 
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
        
      if (isHovering) {
        // Calculate mouse position relative to calculator center
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
  
  // Digital lines in the background
  const DigitalLines = () => {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 z-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={`h-line-${i}`} 
            className="absolute bg-[hsl(var(--rgb-cyan))]" 
            style={{
              height: '1px',
              width: Math.random() * 100 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.1,
              boxShadow: '0 0 8px hsl(var(--rgb-cyan))'
            }}
          ></div>
        ))}
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={`v-line-${i}`} 
            className="absolute bg-[hsl(var(--rgb-magenta))]" 
            style={{
              width: '1px',
              height: Math.random() * 100 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.1,
              boxShadow: '0 0 8px hsl(var(--rgb-magenta))'
            }}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <section 
      id="tokenomics" 
      ref={tokenomicsRef}
      className="py-20 relative overflow-hidden scan-lines horizontal-glitch-lines bg-black"
    >
      {/* Digital noise background */}
      <div className="absolute inset-0 opacity-15 z-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 250 250%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
      
      {/* Matrix-like digital rain effect */}
      <div className="absolute inset-0 bg-matrix-code opacity-10 z-0" style={{
        transform: `translateY(${parallaxOffset.y * -1.5}px)`
      }}></div>
      
      <DigitalLines />
      
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
            <span className={`inline-block py-2 px-4 font-mono font-bold text-[hsl(var(--neon-cyan))] border border-[hsl(var(--rgb-magenta))] shadow-[0_0_8px_hsla(var(--rgb-cyan),0.7)] ${isGlitchActive ? 'rgb-split-intense' : 'rgb-split'}`} data-text="SYSTEM::DATA">
              SYSTEM::DATA
            </span>
          </div>
          
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-8 font-mono tracking-wide ${isGlitchActive ? 'rgb-split-intense' : 'rgb-split'}`} 
            data-text="GLITCHNOMICS"
            style={{ 
              textShadow: `0 0 ${8 + (isGlitchActive ? glitchIntensity * 10 : 0)}px hsla(var(--rgb-cyan), 0.7)`,
              transform: `translate(${parallaxOffset.x * -0.5}px, ${parallaxOffset.y * -0.5}px)`
            }}
          >
            GLITCHNOMICS
          </h2>
          
          <div 
            className="max-w-xl mx-auto relative"
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
              <div className="bg-black digital-noise p-6 rounded-xl space-y-5">
                {/* Token Name */}
                <div 
                  className={`flex justify-between items-center border-b ${isGlitchActive ? 'border-white' : 'border-[hsl(var(--rgb-cyan))]'} border-opacity-30 pb-3`}
                  style={{
                    transform: `translateX(${isGlitchActive ? (Math.random() * 3 - 1.5) : 0}px)`,
                  }}
                >
                  <span className="text-white font-mono text-lg font-bold">Name:</span>
                  <span className={`font-mono text-lg ${isGlitchActive ? 'text-white rgb-split' : 'text-[hsl(var(--rgb-cyan))]'}`}>
                    Glitch
                  </span>
                </div>
                
                {/* Token Ticker */}
                <div 
                  className={`flex justify-between items-center border-b ${isGlitchActive ? 'border-white' : 'border-[hsl(var(--rgb-cyan))]'} border-opacity-30 pb-3`}
                  style={{
                    transform: `translateX(${isGlitchActive ? (Math.random() * 3 - 1.5) : 0}px)`,
                  }}
                >
                  <span className="text-white font-mono text-lg font-bold">Ticker:</span>
                  <span className={`font-mono text-lg ${isGlitchActive ? 'text-white rgb-split' : 'text-[hsl(var(--rgb-cyan))]'}`}>
                    $GLITCH
                  </span>
                </div>
                
                {/* Token Supply */}
                <div 
                  className={`flex justify-between items-center border-b ${isGlitchActive ? 'border-white' : 'border-[hsl(var(--rgb-cyan))]'} border-opacity-30 pb-3`}
                  style={{
                    transform: `translateX(${isGlitchActive ? (Math.random() * 3 - 1.5) : 0}px)`,
                  }}
                >
                  <span className="text-white font-mono text-lg font-bold">Supply:</span>
                  <span className={`font-mono text-lg ${isGlitchActive ? 'text-white rgb-split' : 'text-[hsl(var(--rgb-cyan))]'}`}>
                    1,000,000,000,000
                  </span>
                </div>
                
                {/* Token Tax */}
                <div 
                  className={`flex justify-between items-center`}
                  style={{
                    transform: `translateX(${isGlitchActive ? (Math.random() * 3 - 1.5) : 0}px)`,
                  }}
                >
                  <span className="text-white font-mono text-lg font-bold">Tax:</span>
                  <span className={`font-mono text-lg ${isGlitchActive ? 'text-white rgb-split' : 'text-[hsl(var(--rgb-magenta))]'} font-bold`}>
                    5%
                  </span>
                </div>
                
                {/* Tax Distribution */}
                <div 
                  className={`flex justify-between items-center ${isGlitchActive ? 'border-white' : 'border-[hsl(var(--rgb-cyan))]'} border-opacity-30 pt-4`}
                  style={{
                    transform: `translateX(${isGlitchActive ? (Math.random() * 3 - 1.5) : 0}px)`,
                  }}
                >
                  <span className="text-white font-mono text-sm">3% to rewards</span>
                  <span className="text-white font-mono text-sm">2% to liquidity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
