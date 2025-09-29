import { useState, useEffect } from "react";

export const useExchangeRate = (baseCurrency, targetCurrency) => {
    const [rate, setRate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRate = async () => {
        try {
            const res = await fetch(
              `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_EXCHANGE_RATE_API_KEY}/latest/${baseCurrency}`
            );
            const data = await res.json();
            if (data.result === "success" && data.conversion_rates[targetCurrency]) {
                setRate(data.conversion_rates[targetCurrency]);
            } else {
                setError(data["error-type"] || "Unknown error");
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

} 