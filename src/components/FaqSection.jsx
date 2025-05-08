import { useState } from 'react';
import GlitchText from './GlitchText';


export default function FaqSection() {
  // FAQ data
  const faqItems = [
    {
      id: 'faq1',
      question: 'How do the daily rewards work?',
      answer: '3% of the daily trading volume is distributed to all holders proportionally based on their holdings. The more $MEME you hold, the larger your share of the rewards pool. Rewards are automatically calculated and distributed daily - no staking or claiming required.'
    },
    {
      id: 'faq2',
      question: 'Where can I buy $MEME?',
      answer: '$MEME is available on major exchanges including Uniswap, PancakeSwap, and Binance. We recommend using Uniswap on Ethereum for the best liquidity. Always ensure you\'re buying the official $MEME token with contract address 0x1234...ABCD.'
    },
    {
      id: 'faq3',
      question: 'Is the contract audited?',
      answer: 'Yes, the $MEME contract has been thoroughly audited by CertiK and Solidity Finance. Both audit reports are available on our website under the "Security" section. We\'ve implemented all recommended security measures to ensure the safety of your funds.'
    },
    {
      id: 'faq4',
      question: 'What makes $MEME different from other meme coins?',
      answer: 'Unlike most meme coins that rely solely on hype, $MEME combines viral appeal with actual utility through our daily rewards system. We have a committed development team, long-term roadmap, and strong community focus. We\'re building a sustainable ecosystem around the $MEME token.'
    },
    {
      id: 'faq5',
      question: 'What are the future plans for $MEME?',
      answer: 'Our roadmap includes expanding to additional blockchains, launching a dedicated $MEME NFT marketplace, introducing governance features allowing holders to vote on proposals, and developing partnerships with major brands and platforms in the crypto space.'
    }
  ];

  // State to track which FAQ item is open
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  // Toggle FAQ item
  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <GlitchText text="FREQUENTLY ASKED QUESTIONS" />
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about $MEME and our reward system.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((faq) => (
            <div 
              key={faq.id}
              className="bg-[hsl(var(--dark-card))] rounded-xl border border-[hsl(var(--neon-green))] border-opacity-20 overflow-hidden"
            >
              <button 
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-4 flex justify-between items-center"
              >
                <h3 className="text-lg font-mono text-left">{faq.question}</h3>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  className={`h-5 w-5 text-[hsl(var(--neon-green))] transition-transform duration-300 ${openFaqId === faq.id ? 'rotate-45' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 4v16m8-8H4" 
                  />
                </svg>
              </button>
              <div 
                className={`px-6 pb-6 transition-all duration-300 ease-in-out ${openFaqId === faq.id ? 'block' : 'hidden'}`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
