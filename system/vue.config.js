module.exports={
    devServer: {
        proxy: {
          '/api': {
            target: 'http://192.168.31.110:3000',
            changeOrigin: true,
            pathRewrite:{
                '^/api':''
            }
          },
        }
    }
}
