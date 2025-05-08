import GlitchText from "./GlitchText";

export default function Footer() {
  return (
    <footer className="py-10 bg-[hsl(var(--dark-card))] border-t border-[hsl(var(--neon-green))] border-opacity-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="text-[hsl(var(--neon-green))] font-['VT323'] text-3xl mb-4">
              <GlitchText text="$GLITCH" />
            </div>
            <p className="text-gray-400 mb-4">Hold $GLITCH, earn $HYPE. Our dual-token system gives you hourly rewards without staking. Join the glitch revolution.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-green))] transition-colors">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 512 512" 
                  className="h-5 w-5" 
                  fill="currentColor"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-green))] transition-colors">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 496 512" 
                  className="h-5 w-5" 
                  fill="currentColor"
                >
                  <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-green))] transition-colors">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 640 512" 
                  className="h-5 w-5" 
                  fill="currentColor"
                >
                  <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-green))] transition-colors">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 512 512" 
                  className="h-5 w-5" 
                  fill="currentColor"
                >
                  <path d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-green))] transition-colors">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 448 512" 
                  className="h-5 w-5" 
                  fill="currentColor"
                >
                  <path d="M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-green))] transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[hsl(var(--neon-green))] transition-colors">About</a></li>
              <li><a href="#calculator" className="text-gray-400 hover:text-[hsl(var(--neon-green))] transition-colors">Calculator</a></li>
              <li><a href="#tokenomics" className="text-gray-400 hover:text-[hsl(var(--neon-green))] transition-colors">Tokenomics</a></li>
              <li><a href="#community" className="text-gray-400 hover:text-[hsl(var(--neon-green))] transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-green))] transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-green))] transition-colors">Audit Reports</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-green))] transition-colors">Roadmap</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-green))] transition-colors">Brand Assets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-green))] transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">$HYPE Rewards</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-green))] transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-green))] transition-colors">Claim Rewards</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-green))] transition-colors">See History</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-green))] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-green))] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} $GLITCH. All rights reserved. Not financial advice. DYOR.</p>
          <p className="mt-2 text-xs">$GLITCH Contract: 0x1234...ABCD | $HYPE Contract: 0x5678...EFGH</p>
        </div>
      </div>
    </footer>
  );
}
