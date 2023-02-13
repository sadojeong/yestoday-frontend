const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://54.92.33.225:8080',
            changeOrigin: true,
        })
    );
};