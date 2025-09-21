/**
 * Map a single coin from CoinGecko API to a simplified domain model
 * @param {Object} coin - raw CoinGecko coin object
 * @returns {Object} - mapped coin object
 */
export function mapCoin(coin) {
  return {
    id: coin.id,
    rank: coin.market_cap_rank,
    name: coin.name,
    symbol: coin.symbol.toUpperCase(),
    icon: coin.image,
    price: coin.current_price,
    change24h: coin.price_change_percentage_24h,
    marketCap: coin.market_cap,
    volume: coin.total_volume,
  };
}

/**
 * Map an array of coins
 * @param {Array} coins - array of CoinGecko coin objects
 * @returns {Array} - mapped coins
 */
export function mapCoins(coins) {
  return coins.map(mapCoin);
}
