module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 8080, // 端口号
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
        proxy: {
            'api': {
                target: 'http://localhost:3000',
                changeOrigin:false,
                pathRewrite: {
                    '/api': '/'
                }
            }
        }
    }
}