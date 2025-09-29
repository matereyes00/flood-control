// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/.netlify/functions/",
    createProxyMiddleware({
      target: "http://localhost:8888", // Netlify dev runs here
      changeOrigin: true,
    })
  );
};
