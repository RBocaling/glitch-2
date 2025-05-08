import { useState, useEffect } from "react";
import GlitchText from "./GlitchText";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGlitchActive, setIsGlitchActive] = useState(false);

  // Random glitch effect at intervals
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        setIsGlitchActive(true);
        setTimeout(() => setIsGlitchActive(false), 150);
      }
    }, 5000);
    
    return () => clearInterval(glitchInterval);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black bg-opacity-80 border-b border-[hsl(var(--rgb-cyan))] border-opacity-30 horizontal-glitch-lines">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className={`text-[hsl(var(--rgb-cyan))] font-mono text-3xl font-bold relative ${isGlitchActive ? 'rgb-split-intense' : ''}`}>
              <GlitchText text="$GLITCH" intensity="high" />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-mono text-white hover:text-[hsl(var(--rgb-cyan))] transition-colors relative group">
              <span className="relative z-10">Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[hsl(var(--rgb-cyan))] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="font-mono text-white hover:text-[hsl(var(--rgb-cyan))] transition-colors relative group">
              <span className="relative z-10">About</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[hsl(var(--rgb-cyan))] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#calculator" className="font-mono text-white hover:text-[hsl(var(--rgb-cyan))] transition-colors relative group">
              <span className="relative z-10">Calculator</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[hsl(var(--rgb-cyan))] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#tokenomics" className="font-mono text-white hover:text-[hsl(var(--rgb-cyan))] transition-colors relative group">
              <span className="relative z-10">Tokenomics</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[hsl(var(--rgb-cyan))] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#community" className="font-mono text-white hover:text-[hsl(var(--rgb-cyan))] transition-colors relative group">
              <span className="relative z-10">Community</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[hsl(var(--rgb-cyan))] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          <div>
            <button className={`py-2 px-6 ${isGlitchActive ? 'bg-white text-black rgb-split' : 'bg-[hsl(var(--rgb-cyan))]'} text-black font-bold rounded hover:shadow-lg hover:shadow-[hsl(var(--rgb-cyan))] transition duration-300 transform hover:scale-105 relative overflow-hidden group`}>
              <span className="relative z-10 font-mono">Buy Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out"></span>
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-[hsl(var(--rgb-cyan))]">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden mt-4 pb-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-3 backdrop-blur-md bg-black bg-opacity-90 p-4 rounded-lg border border-[hsl(var(--rgb-magenta))] border-opacity-20">
            <a href="#home" className="font-mono text-white hover:text-[hsl(var(--rgb-cyan))] transition-colors">Home</a>
            <a href="#about" className="font-mono text-white hover:text-[hsl(var(--rgb-cyan))] transition-colors">About</a>
            <a href="#calculator" className="font-mono text-white hover:text-[hsl(var(--rgb-cyan))] transition-colors">Calculator</a>
            <a href="#tokenomics" className="font-mono text-white hover:text-[hsl(var(--rgb-cyan))] transition-colors">Tokenomics</a>
            <a href="#community" className="font-mono text-white hover:text-[hsl(var(--rgb-cyan))] transition-colors">Community</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
