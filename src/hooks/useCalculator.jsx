import { useState, useEffect } from 'react';


const DEFAULT_TOTAL_SUPPLY = 1000000000000; // 1 trillion total supply
const TOKEN_PRICE = 0.0000001; // Estimated price for $GLITCH
const HYPE_TOKEN_PRICE = 0.00001; // Estimated price for $HYPE

export default function useCalculator(initialVolume = 10000, initialHoldings = 10000000) {
  const [state, setState] = useState({
    volume: initialVolume,
    holdings: initialHoldings,
    hourlyPool: 0,
    hourlyEarnings: 0,
    hourlyEarningsToken: 0,
    dailyProjection: 0,
    dailyProjectionToken: 0,
    monthlyProjection: 0,
    monthlyProjectionToken: 0
  });

  // Function to recalculate rewards whenever volume or holdings change
  const calculateRewards = (volume, holdings) => {
    // Calculate rewards based on formula
    const taxCollected = volume * 0.05; // 5% tax on transactions
    const rewardsPool = taxCollected * 0.6; // 3% of 5% (60% of tax) to rewards
    
    // Check minimum holdings requirement
    if (holdings < 1000000) {
      setState({
        volume,
        holdings,
        hourlyPool: rewardsPool,
        hourlyEarnings: 0, // No rewards if below minimum
        hourlyEarningsToken: 0,
        dailyProjection: 0,
        dailyProjectionToken: 0,
        monthlyProjection: 0,
        monthlyProjectionToken: 0
      });
      return;
    }
    
    const holdingPercentage = holdings / DEFAULT_TOTAL_SUPPLY;
    const hourlyReward = rewardsPool * holdingPercentage;
    const dailyReward = hourlyReward * 24;
    const monthlyReward = hourlyReward * 24 * 30;
    
    // Convert USD value to HYPE tokens
    const hourlyTokenReward = hourlyReward / HYPE_TOKEN_PRICE;
    const dailyTokenReward = dailyReward / HYPE_TOKEN_PRICE;
    const monthlyTokenReward = monthlyReward / HYPE_TOKEN_PRICE;
    
    setState({
      volume,
      holdings,
      hourlyPool: rewardsPool,
      hourlyEarnings: hourlyReward,
      hourlyEarningsToken: hourlyTokenReward,
      dailyProjection: dailyReward,
      dailyProjectionToken: dailyTokenReward,
      monthlyProjection: monthlyReward,
      monthlyProjectionToken: monthlyTokenReward
    });
  };

  // Update volume handler
  const updateVolume = (newVolume) => {
    calculateRewards(newVolume, state.holdings);
  };

  // Update holdings handler
  const updateHoldings = (newHoldings) => {
    calculateRewards(state.volume, newHoldings);
  };

  // Format number with commas (1000 -> "1,000")
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Parse string with commas to number ("1,000" -> 1000)
  const parseFormattedNumber = (str) => {
    return parseInt(str.replace(/,/g, '')) || 0;
  };

  // Initial calculation
  useEffect(() => {
    calculateRewards(initialVolume, initialHoldings);
  }, [initialVolume, initialHoldings]);

  return {
    ...state,
    updateVolume,
    updateHoldings,
    formatNumber,
    parseFormattedNumber
  };
}
