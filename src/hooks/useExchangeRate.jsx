// in useExchangeRate.jsx
import { useState, useEffect } from "react";

export const useExchangeRate = (baseCurrency, targetCurrency) => {
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        // This is the new URL for your serverless function
        const res = await fetch(
          `/.netlify/functions/getRate?baseCurrency=${baseCurrency}&targetCurrency=${targetCurrency}`
        );
        const data = await res.json();
        
        if (data.rate) {
          setRate(data.rate);
        } else {
          setError(data.error || "Unknown error");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRate();
  }, [baseCurrency, targetCurrency]);

  return { rate, loading, error };
};