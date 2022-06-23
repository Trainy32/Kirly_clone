const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      baseURL: 'http://13.125.50.85',
      changeOrigin: true,
    })
  );
};