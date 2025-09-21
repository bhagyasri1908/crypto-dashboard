/**
 * Sorting strategies for coins
 */
export const sortStrategies = {
  rank: (a, b) => a.rank - b.rank,
  price: (a, b) => b.price - a.price,
  change24h: (a, b) => b.change24h - a.change24h,
  marketCap: (a, b) => b.marketCap - a.marketCap,
  volume: (a, b) => b.volume - a.volume,
};

/**
 * Sort coins based on selected field and order
 * @param {Array} coins - array of mapped coin objects
 * @param {string} field - field name to sort by ('price', 'change24h', 'marketCap', 'volume', 'rank')
 * @param {string} order - 'asc' or 'desc'
 * @returns {Array} - sorted array
 */
export function sortCoins(coins, field = "rank", order = "desc") {
  const strategy = sortStrategies[field];
  if (!strategy) return coins;

  const sorted = [...coins].sort(strategy);
  return order === "asc" ? sorted.reverse() : sorted;
}
