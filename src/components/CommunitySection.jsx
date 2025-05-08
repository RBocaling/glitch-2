import GlitchText from "./GlitchText";

export default function CommunitySection() {
  return (
    <section id="community" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <GlitchText text="JOIN THE MOVEMENT" />
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Become part of the fastest-growing meme coin community in crypto. 
            Share memes, earn rewards, and help shape the future of $MEME.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <a href="#" className="bg-[hsl(var(--dark-card))] p-8 rounded-2xl border border-[hsl(var(--neon-green))] border-opacity-20 hover:border-opacity-50 transition-all duration-300 group">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-[hsl(var(--neon-green))] bg-opacity-10 flex items-center justify-center mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 496 512" 
                  className="h-8 w-8 text-[hsl(var(--neon-green))] group-hover:scale-125 transition-transform duration-300"
                  fill="currentColor"
                >
                  <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Telegram</h3>
            <p className="text-gray-400 text-center">Join 250K+ members sharing the latest $MEME news and memes.</p>
            <div className="mt-6 text-[hsl(var(--neon-green))] font-mono text-center">Join Telegram →</div>
          </a>
          
          <a href="#" className="bg-[hsl(var(--dark-card))] p-8 rounded-2xl border border-[hsl(var(--neon-green))] border-opacity-20 hover:border-opacity-50 transition-all duration-300 group">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-[hsl(var(--neon-green))] bg-opacity-10 flex items-center justify-center mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 512 512" 
                  className="h-8 w-8 text-[hsl(var(--neon-green))] group-hover:scale-125 transition-transform duration-300"
                  fill="currentColor"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Twitter</h3>
            <p className="text-gray-400 text-center">Follow us for the latest updates, promotions and community events.</p>
            <div className="mt-6 text-[hsl(var(--neon-green))] font-mono text-center">Follow @MEMEtoken →</div>
          </a>
          
          <a href="#" className="bg-[hsl(var(--dark-card))] p-8 rounded-2xl border border-[hsl(var(--neon-green))] border-opacity-20 hover:border-opacity-50 transition-all duration-300 group">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-[hsl(var(--neon-green))] bg-opacity-10 flex items-center justify-center mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 640 512" 
                  className="h-8 w-8 text-[hsl(var(--neon-green))] group-hover:scale-125 transition-transform duration-300"
                  fill="currentColor"
                >
                  <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Discord</h3>
            <p className="text-gray-400 text-center">Connect with developers and community members in our active Discord.</p>
            <div className="mt-6 text-[hsl(var(--neon-green))] font-mono text-center">Join Discord →</div>
          </a>
        </div>
        
        <div className="bg-[hsl(var(--dark-card))] p-8 md:p-12 rounded-2xl border border-[hsl(var(--neon-green))] border-opacity-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive updates, airdrops, and reward opportunities.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-[hsl(var(--dark-bg))] border border-[hsl(var(--neon-green))] border-opacity-30 focus:border-[hsl(var(--neon-green))] rounded-lg py-3 px-4 text-white appearance-none focus:outline-none transition-all duration-200"
              />
              
              <button className="py-3 px-8 bg-[hsl(var(--neon-green))] text-[hsl(var(--dark-bg))] font-bold rounded-lg hover:shadow-lg hover:shadow-[hsl(var(--neon-green))] hover:shadow-opacity-30 transition duration-300 transform hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-3">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
