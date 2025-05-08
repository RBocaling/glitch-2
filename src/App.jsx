import { useState, useEffect, useRef } from 'react';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TokenomicsSection from "./components/TokenomicsSection";
import RewardsCalculator from "./components/RewardsCalculator";

export const App = () =>{
  const [isGlitchActive, setIsGlitchActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const parallaxLayersRef = useRef(null);

  // Periodic glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.15) {
        setIsGlitchActive(true);
        setTimeout(() => setIsGlitchActive(false), 150);
      }
    }, 4000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Random glitch on scroll
      if (Math.random() < 0.05) {
        setIsGlitchActive(true);
        setTimeout(() => setIsGlitchActive(false), 100);
      }
      
      // Apply parallax effect to various elements if the ref exists
      if (parallaxLayersRef.current) {
        const layers = parallaxLayersRef.current.querySelectorAll('.parallax-layer');
        layers.forEach((layer, index) => {
          const htmlLayer = layer;
          const speed = parseFloat(htmlLayer.getAttribute('data-speed') || '0.1');
          const yPos = -(scrollY * speed);
          htmlLayer.style.transform = `translateY(${yPos}px)`;
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Random glitch lines effect
  const [glitchLines, setGlitchLines] = useState([]);
  
  useEffect(() => {
    // Generate random glitch lines
    const lines = Array.from({length: 15}, () => ({
      top: Math.random() * 100,
      width: 50 + Math.random() * 50,
      opacity: 0.1 + Math.random() * 0.3,
      delay: Math.random() * 5
    }));
    setGlitchLines(lines);
  }, []);
  
  return (
    <div className={`font-mono text-white digital-noise horizontal-glitch-lines ${isGlitchActive ? 'rgb-split' : ''}`} ref={parallaxLayersRef}>
      <Navbar />
      
      {/* Dynamic glitch lines */}
      {glitchLines.map((line, index) => (
        <div
          key={index}
          className="fixed glitch-line"
          style={{
            top: `${line.top}vh`,
            left: 0,
            width: `${line.width}%`,
            height: '1px',
            background: `hsla(var(--rgb-${index % 2 ? 'cyan' : 'magenta'}), ${line.opacity})`,
            zIndex: 1,
            transform: `translateX(${Math.sin((scrollY / 1000) + line.delay) * 100}%)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      ))}
      
      <div className="scan-lines">
        <div className="parallax-layer" data-speed="0.2">
          <HeroSection />
        </div>

        <div className="parallax-layer" data-speed="0.12">
          <RewardsCalculator />
        </div>
        
        <div className="parallax-layer" data-speed="0.08">
          <TokenomicsSection />
        </div>
        
        <section id="howItWorks" className="py-20 relative overflow-hidden parallax-layer" data-speed="0.1">
          <div className="absolute inset-0 bg-matrix-code opacity-5"></div>
          <div className={`absolute inset-0 bg-glitch-texture opacity-10 ${isGlitchActive ? 'bg-glitch-active' : ''}`}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center text-[hsl(var(--rgb-cyan))] font-mono ${isGlitchActive ? 'rgb-split-intense' : 'rgb-split'}`} data-text="HOW IT WORKS">
              HOW IT WORKS
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-white font-mono bg-black bg-opacity-70 p-8 rounded-lg border border-[hsl(var(--rgb-cyan))] border-opacity-30 glitch-box">
              <div className="flex items-start">
                <span className="text-[hsl(var(--rgb-cyan))] mr-3 glitch-star">*</span>
                <p>5% tax is collected in every buy&sell transaction</p>
              </div>
              <div className="flex items-start">
                <span className="text-[hsl(var(--rgb-cyan))] mr-3 glitch-star">*</span>
                <p>Tax automatically converted into $HYPE</p>
              </div>
              <div className="flex items-start">
                <span className="text-[hsl(var(--rgb-cyan))] mr-3 glitch-star">*</span>
                <p>3% to $HYPE rewards</p>
              </div>
              <div className="flex items-start">
                <span className="text-[hsl(var(--rgb-cyan))] mr-3 glitch-star">*</span>
                <p>Smart contract distribute the $HYPE rewards to all holders</p>
              </div>
              <div className="flex items-start">
                <span className="text-[hsl(var(--rgb-cyan))] mr-3 glitch-star">*</span>
                <p>Rewards are proportional to your token holdings</p>
              </div>
              <div className="flex items-start">
                <span className="text-[hsl(var(--rgb-cyan))] mr-3 glitch-star">*</span>
                <p>1million $GLITCH or 0.001% to be included in the rewards pool</p>
              </div>
            </div>
          </div>

          

          
          <div className="mt-16 text-center">
          <div 
            className={`inline-block mb-4 transform rotate-[-1deg] text-base ${isGlitchActive ? 'rgb-split-intense' : ''}`} 
            data-text="SYSTEM::INFO"
            
          >
            <span className="bg-black py-2 px-4 text-[hsl(var(--neon-cyan))] font-mono font-bold border border-[hsl(var(--rgb-magenta))] shadow-lg shadow-[hsl(var(--rgb-cyan))] shadow-opacity-20">
              SYSTEM::INFO
            </span>
          </div>
          
          <h2 
            className={`text-5xl font-bold mb-4 font-mono tracking-wider ${isGlitchActive ? 'rgb-split-intense' : 'rgb-split'}`} 
            data-text="ABOUT"
           
          >
            ABOUT
          </h2>
          
          <div 
            className="max-w-3xl mx-auto relative"
            
          >
            {/* Glitched border effect */}
            <div className={`absolute inset-0 -m-[1px] rounded-xl ${isGlitchActive ? 'animate-pulse' : ''}`}
             >
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



        </section>
        
        
      </div>
    </div>
  );
}


export default App