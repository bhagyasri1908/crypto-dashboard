const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchCoins(page = 1, perPage = 20, query = "") {
  try {
    let url = `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&price_change_percentage=24h`;
    if (query) {
      url += `&ids=${query.toLowerCase()}`;
    }

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch coins");
    return await res.json();
  } catch (err) {
    console.error("❌ Error fetching coins:", err);
    return [];
  }
}

export async function fetchTrending() {
  try {
    const res = await fetch(`${BASE_URL}/search/trending`);
    if (!res.ok) throw new Error("Failed to fetch trending coins");
    return await res.json();
  } catch (err) {
    console.error("❌ Error fetching trending:", err);
    return { coins: [] };
  }
}
