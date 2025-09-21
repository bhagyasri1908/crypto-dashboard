import { useState, useEffect } from "react";
import { fetchCoins } from "../services/cryptoApi";
import { mapCoins } from "../services/adapters";
import { sortCoins } from "../utils/sorting";

/**
 * Custom hook to fetch and manage coins data with pagination, search, and sorting
 *
 * @param {number} initialPage - starting page
 * @param {number} perPage - coins per page
 */
export default function useCoins(initialPage = 1, perPage = 20) {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(initialPage);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("rank");
  const [sortOrder, setSortOrder] = useState("desc"); // 'asc' or 'desc'

  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    setError(null);

    fetchCoins(page, perPage, search)
      .then((data) => {
        if (!isCancelled) {
          const mapped = mapCoins(data);
          const sorted = sortCoins(mapped, sortField, sortOrder);
          setCoins(sorted);
        }
      })
      .catch((err) => {
        if (!isCancelled) setError(err.message || "Failed to fetch coins");
      })
      .finally(() => {
        if (!isCancelled) setLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [page, perPage, search, sortField, sortOrder]);

  return {
    coins,
    loading,
    error,
    page,
    setPage,
    search,
    setSearch,
    sortField,
    setSortField,
    sortOrder,
    setSortOrder,
  };
}
