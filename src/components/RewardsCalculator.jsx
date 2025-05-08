import { useRef, useState, useEffect } from 'react';
import GlitchText from './GlitchText';
import useCalculator from '../hooks/useCalculator';

export default function RewardsCalculator() {
  const volumeRef = useRef(null);
  const holdingsRef = useRef(null);
  const calculatorRef = useRef(null);
  const [isResultsCelebrating, setIsResultsCelebrating] = useState(false);
  const [isGlitchActive, setIsGlitchActive] = useState(false);
  const [glitchIntensity, setGlitchIntensity] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  // Random glitch effect at intervals
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitchActive(true);
      setGlitchIntensity(Math.random() * 0.5 + 0.5); // Random intensity between 0.5 and 1
      setTimeout(() => setIsGlitchActive(false), 150);
    }, Math.random() * 5000 + 3000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!calculatorRef.current) return;
      
      const rect = calculatorRef.current.getBoundingClientRect();
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
        const offsetX = (e.clientX - centerX) / 25;
        const offsetY = (e.clientY - centerY) / 25;
        
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
  
  const {
    volume,
    holdings,
    hourlyPool,
    hourlyEarnings,
    hourlyEarningsToken,
    dailyProjection,
    dailyProjectionToken,
    monthlyProjection,
    monthlyProjectionToken,
    updateVolume,
    updateHoldings,
    formatNumber,
    parseFormattedNumber
  } = useCalculator();

  const handleVolumeInput = (e) => {
    const value = parseFormattedNumber(e.target.value);
    updateVolume(value);
  };

  const handleHoldingsInput = (e) => {
    const value = parseFormattedNumber(e.target.value);
    updateHoldings(value);
  };

  const handleVolumeSlider = (e) => {
    const value = parseInt(e.target.value);
    updateVolume(value);
    if (volumeRef.current) {
      volumeRef.current.value = formatNumber(value);
    }
  };

  const handleHoldingsSlider = (e) => {
    const value = parseInt(e.target.value);
    updateHoldings(value);
    if (holdingsRef.current) {
      holdingsRef.current.value = formatNumber(value);
    }
  };

  const handleInputBlur = (e) => {
    const value = parseFormattedNumber(e.target.value);
    e.target.value = formatNumber(value);
  };
  
  const celebrateResults = () => {
    setIsResultsCelebrating(true);
    setIsGlitchActive(true);
    setTimeout(() => {
      setIsResultsCelebrating(false);
      setIsGlitchActive(false);
    }, 1500);
  };

  // Digital lines in the background
  const DigitalLines = () => {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 z-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={`h-line-${i}`} 
            className="absolute bg-[hsl(var(--neon-cyan))]" 
            style={{
              height: '1px',
              width: Math.random() * 100 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.1,
              boxShadow: '0 0 8px hsl(var(--neon-cyan))'
            }}
          ></div>
        ))}
        {Array.from({ length: 50 }).map((_, i) => (
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
    <section id="calculator" className="py-20 relative overflow-hidden scan-lines horizontal-glitch-lines bg-black">
      {/* Digital noise and scan lines */}
      <div className="absolute inset-0 opacity-15 z-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 250 250%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
      
      {/* Matrix-like background that moves on scroll */}
      <div className="absolute inset-0 bg-matrix-code opacity-10 z-0" style={{
        transform: `translateY(${parallaxOffset.y * -1.5}px)`
      }}></div>
      
      {/* Enhanced digital lines effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DigitalLines />
        
        {/* Additional glitch effects */}
        {isGlitchActive && (
          <div className="absolute inset-0 bg-[hsla(var(--rgb-cyan),0.1)] mix-blend-overlay opacity-30 z-10"></div>
        )}
        
        {/* Scanlines with parallax effect */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 40 }).map((_, i) => (
            <div 
              key={`scanline-${i}`}
              className="absolute left-0 right-0 h-[2px] bg-[hsla(var(--rgb-cyan),0.05)]"
              style={{
                top: `${(i * 10) + (parallaxOffset.y * (i % 3 ? 1 : -1) * 0.5)}px`,
                opacity: isGlitchActive && i % 5 === 0 ? 0.2 : 0.05,
                transform: `translateX(${isGlitchActive && i % 7 === 0 ? (Math.random() > 0.5 ? -5 : 5) : 0}px)`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div 
            className={`inline-block mb-4 transform rotate-[-1deg] text-base ${isGlitchActive ? 'rgb-split-intense' : ''}`} 
            data-text="CALCULATE YOUR FUTURE"
            style={{
              transform: `rotate(-1deg) translate(${parallaxOffset.x * 1.5}px, ${parallaxOffset.y * 1.5}px)`
            }}
          >
            <span className="bg-black py-2 px-4 text-[hsl(var(--neon-cyan))] font-mono font-bold border border-[hsl(var(--rgb-magenta))] shadow-lg shadow-[hsl(var(--rgb-cyan))] shadow-opacity-20">
              CALCULATE YOUR FUTURE
            </span>
          </div>
          
          <h2 
            className={`text-5xl font-bold mb-4 font-mono tracking-wider ${isGlitchActive ? 'rgb-split-intense' : 'rgb-split'}`} 
            data-text="REWARDS CALCULATOR"
            style={{
              transform: `translate(${parallaxOffset.x * -0.8}px, ${parallaxOffset.y * -0.8}px)`
            }}
          >
            REWARDS CALCULATOR
          </h2>
          
          <p 
            className="text-gray-300 max-w-2xl mx-auto font-mono"
            style={{
              transform: `translate(${parallaxOffset.x * 0.5}px, ${parallaxOffset.y * 0.5}px)`
            }}
          >
            See how many <span className="font-bold text-[hsl(var(--neon-cyan))]">$HYPE tokens</span> you'll earn 
            by <span className="font-bold text-[hsl(var(--rgb-magenta))]">holding $GLITCH</span>. No staking, no locking.
          </p>
        </div>
        
        {/* Rewards Calculator Component */}
        <div ref={calculatorRef} className="max-w-3xl mx-auto relative" style={{
          transform: `translate(${parallaxOffset.x * 0.3}px, ${parallaxOffset.y * 0.3}px)`
        }}>
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
            <div className="bg-black digital-noise p-6 md:p-8 rounded-xl">
              {/* RGB Header split effect */}
              <div className="flex items-center justify-between mb-6">
                <h3 className={`font-bold text-xl font-mono tracking-wider ${isGlitchActive ? 'rgb-split' : 'text-white'}`}>
                  CALCULATOR v1.0
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium font-mono tracking-widest text-[hsl(var(--rgb-cyan))]">
                    SYSTEM <span className="text-[hsl(var(--rgb-magenta))]">ONLINE</span>
                  </span>
                </div>
              </div>
              
              <div className="mb-8 relative">
                <label className="flex items-center gap-2 text-[hsl(var(--rgb-cyan))] font-mono tracking-wide font-bold mb-2">
                  24h TRADING VOLUME (USD)
                </label>
                <div className="relative mb-1">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[hsl(var(--rgb-cyan))]">$</span>
                  <input 
                    ref={volumeRef}
                    type="text" 
                    defaultValue={formatNumber(volume)}
                    onChange={handleVolumeInput}
                    onBlur={handleInputBlur}
                    className="w-full bg-black border border-[hsl(var(--rgb-cyan))] font-mono rounded-md py-3 px-10 text-white appearance-none focus:outline-none focus:border-[hsl(var(--rgb-magenta))] transition-all duration-200"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[hsl(var(--rgb-cyan))]">USD</span>
                </div>
                
                <div className="flex justify-between text-sm text-gray-500 mt-1 px-1 font-mono">
                  <span>MIN: $0</span>
                  <span>MAX: $1M</span>
                </div>
                
                <input 
                  type="range" 
                  min="0" 
                  max="1000000" 
                  value={volume} 
                  step="1000"
                  onChange={handleVolumeSlider}
                  className="w-full h-1 bg-[rgba(0,255,255,0.1)] rounded-lg appearance-none cursor-pointer mt-2 accent-[hsl(var(--rgb-cyan))]"
                />
              </div>
              
              <div className="mb-8 relative">
                <label className="flex items-center gap-2 text-[hsl(var(--rgb-magenta))] font-mono tracking-wide font-bold mb-2">
                  YOUR $GLITCH HOLDINGS
                </label>
                <div className="relative mb-1">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[hsl(var(--rgb-magenta))]">$GLITCH</span>
                  <input 
                    ref={holdingsRef}
                    type="text" 
                    defaultValue={formatNumber(holdings)}
                    onChange={handleHoldingsInput}
                    onBlur={handleInputBlur}
                    className="w-full bg-black border border-[hsl(var(--rgb-magenta))] font-mono rounded-md py-3 pl-24 pr-10 text-white appearance-none focus:outline-none focus:border-[hsl(var(--rgb-cyan))] transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={celebrateResults}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[hsl(var(--rgb-magenta))] hover:text-white"
                    title="Calculate"
                  >
                    <span className="font-mono font-bold">CALC</span>
                  </button>
                </div>
                
                <div className="flex justify-between text-sm text-gray-500 mt-1 px-1 font-mono">
                  <span>MIN: 0</span>
                  <span>MAX: 1T</span>
                </div>
                
                <input 
                  type="range" 
                  min="0" 
                  max="1000000000000" 
                  value={holdings} 
                  step="10000000"
                  onChange={handleHoldingsSlider}
                  className="w-full h-1 bg-[rgba(255,0,255,0.1)] rounded-lg appearance-none cursor-pointer mt-2 accent-[hsl(var(--rgb-magenta))]"
                />
                {holdings < 1000000 && (
                  <div className="mt-2 flex items-center gap-2 text-red-400 text-sm font-mono">
                    <span>[ERROR]</span>
                    <span>MINIMUM 1,000,000 $GLITCH REQUIRED</span>
                  </div>
                )}
              </div>
              
              <div className={`p-6 bg-black rounded-lg border ${isGlitchActive ? 'border-white' : 'border-[hsl(var(--rgb-cyan))]'} transition-all duration-300 ${isResultsCelebrating ? 'scale-[1.02] shadow-lg shadow-[hsl(var(--rgb-cyan))]' : ''}`}>
                <div className="text-center mb-4 pb-2 border-b border-gray-800">
                  <h4 className={`text-lg font-bold font-mono tracking-wider ${isGlitchActive ? 'rgb-split' : 'text-white'}`}>
                    PROJECTED EARNINGS
                  </h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Hourly section */}
                  <div className="calculator-element bg-[rgba(0,200,255,0.05)] p-4 rounded border border-[hsl(var(--rgb-cyan))] border-opacity-40">
                    <div className="mb-3 flex justify-between items-center pb-2 border-b border-[rgba(0,200,255,0.2)]">
                      <span className="text-white font-mono font-bold tracking-wider">
                        HOURLY
                      </span>
                      <span className={`text-lg font-mono ${isGlitchActive ? 'rgb-split' : 'text-[hsl(var(--rgb-cyan))]'}`}>
                        ${hourlyEarnings.toFixed(4)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-mono text-sm">$HYPE:</span>
                      <span className="font-mono text-white">{hourlyEarningsToken.toFixed(4)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-400 font-mono text-sm">POOL:</span>
                      <span className="font-mono text-white">${hourlyPool.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  {/* Daily section */}
                  <div className="bg-[rgba(255,0,255,0.05)] p-4 rounded border border-[hsl(var(--rgb-magenta))] border-opacity-40">
                    <div className="mb-3 flex justify-between items-center pb-2 border-b border-[rgba(255,0,255,0.2)]">
                      <span className="text-white font-mono font-bold tracking-wider">
                        DAILY
                      </span>
                      <span className={`text-lg font-mono ${isGlitchActive ? 'rgb-split' : 'text-[hsl(var(--rgb-magenta))]'}`}>
                        ${dailyProjection.toFixed(2)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-mono text-sm">$HYPE:</span>
                      <span className="font-mono text-white">{dailyProjectionToken.toFixed(4)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-400 font-mono text-sm">RATE:</span>
                      <span className="font-mono text-white">x24</span>
                    </div>
                  </div>
                  
                  {/* Monthly section - spanning full width */}
                  <div className="md:col-span-2 bg-[rgba(255,255,255,0.02)] p-4 rounded border border-white border-opacity-20">
                    <div className="mb-3 flex justify-between items-center pb-2 border-b border-gray-800">
                      <span className="text-white font-mono font-bold tracking-wider flex items-center gap-2">
                        MONTHLY
                      </span>
                      <span className={`text-xl font-mono font-bold ${isGlitchActive ? 'rgb-split' : 'text-white'}`}>
                        ${monthlyProjection.toFixed(2)}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div className="flex flex-col">
                        <span className="text-gray-400 font-mono text-sm">$HYPE:</span>
                        <span className="font-mono text-white">{monthlyProjectionToken.toFixed(4)}</span>
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="text-gray-400 font-mono text-sm">RATE:</span>
                        <span className="font-mono text-white">x30 DAYS</span>
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="text-gray-400 font-mono text-sm">APY:</span>
                        <span className={`font-mono ${isGlitchActive ? 'rgb-split' : 'text-white'}`}>
                          {holdings > 0 
                            ? ((monthlyProjection * 12) / (holdings * 0.000001)).toFixed(2)
                            : '0.00'}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-5 flex items-start gap-2">
                  <p className="text-gray-400 text-xs font-mono">
                    <span className="text-[hsl(var(--rgb-cyan))]">[INFO]</span> Calculations based on 5% tax (3% to $HYPE rewards) 
                    distributed proportionally to all holders with 1M+ $GLITCH.
                    Results are estimates and will vary with trading volume.
                  </p>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                {(holdings >= 1000000 && volume > 10000) ? (
                  <p className={`font-mono font-bold tracking-widest ${isGlitchActive ? 'rgb-split' : 'text-white'}`}>
                    {holdings >= 100000000 
                      ? "WHALE STATUS DETECTED" 
                      : "REWARD ELIGIBILITY CONFIRMED"}
                  </p>
                ) : (
                  <p className="text-gray-500 text-sm font-mono">
                    [WARNING] Increase holdings for reward eligibility
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="mb-3">
            <span className={`inline-block py-2 px-4 bg-black border border-[hsl(var(--rgb-magenta))] font-mono tracking-wider font-bold text-lg ${isGlitchActive ? 'rgb-split-intense' : 'rgb-split'}`} data-text="FUTURE EARNINGS SYSTEM">
              FUTURE EARNINGS SYSTEM
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-6 text-white font-mono tracking-wider">Ready to join the future?</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="#" 
              className={`py-3 px-8 bg-[hsl(var(--rgb-cyan))] text-black font-bold font-mono rounded relative overflow-hidden group hover:shadow-lg hover:shadow-[hsl(var(--rgb-cyan))] transition duration-300 transform hover:scale-105 flex items-center ${isGlitchActive ? 'rgb-split bg-white text-black' : ''}`}
            >
              <span className="relative z-10">BUY $GLITCH</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out"></span>
            </a>
            <a 
              href="#" 
              className="py-3 px-8 bg-black border border-[hsl(var(--rgb-magenta))] text-[hsl(var(--rgb-magenta))] font-bold font-mono rounded hover:bg-[rgba(255,0,255,0.1)] transition duration-300 flex items-center relative overflow-hidden group"
            >
              <span className="relative z-10">JOIN COMMUNITY</span>
              <span className="absolute inset-0 bg-[hsl(var(--rgb-magenta))] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
