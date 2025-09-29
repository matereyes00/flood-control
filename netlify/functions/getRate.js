// File: netlify/functions/getRate.js

exports.handler = async function (event, context) {
  // Get the secret API key from the secure environment variables
  const API_KEY = process.env.REACT_APP_EXCHANGE_RATE_API_KEY;
  const { baseCurrency, targetCurrency } = event.queryStringParameters;

  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${baseCurrency}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.result === "success" && data.conversion_rates[targetCurrency]) {
      return {
        statusCode: 200,
        body: JSON.stringify({ rate: data.conversion_rates[targetCurrency] }),
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Rate not found" }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch exchange rate" }),
    };
  }
};