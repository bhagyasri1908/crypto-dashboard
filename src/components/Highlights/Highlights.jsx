import { useEffect, useState } from "react";
import { fetchCoins, fetchTrending } from "../services/cryptoApi";

export default function Highlights() {
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetchCoins(1, 50).then((data) => {
      const sorted = [...data];
      setGainers(sorted.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h).slice(0, 5));
      setLosers(sorted.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h).slice(0, 5));
    });

    fetchTrending().then((data) => setTrending(data.coins || []));
  }, []);

  return (
    <div className="highlights">
      <h2>Highlights</h2>
      <div className="highlight-section">
        <h3>Top Gainers</h3>
        <ul>
          {gainers.map((c) => (
            <li key={c.id}>
              {c.name}: {c.price_change_percentage_24h?.toFixed(2)}%
            </li>
          ))}
        </ul>
      </div>

      <div className="highlight-section">
        <h3>Top Losers</h3>
        <ul>
          {losers.map((c) => (
            <li key={c.id}>
              {c.name}: {c.price_change_percentage_24h?.toFixed(2)}%
            </li>
          ))}
        </ul>
      </div>

      <div className="highlight-section">
        <h3>Trending</h3>
        <ul>
          {trending.map((t) => (
            <li key={t.item.id}>{t.item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
