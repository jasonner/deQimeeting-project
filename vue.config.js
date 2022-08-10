// 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
  remUnit: 75
});
module.exports = {
  // 基本路径
  publicPath:"./",
  // 输出文件目录
  outputDir: 'web-demo',
  lintOnSave: false,
  devServer: {
    proxy:{
      "/api": {
          target: "https://api.lehuitech.com.cn/", //目标地址
          ws: true, 
          changeOrigin: true,
          pathRewrite: {
              "^/api": ''
          }
      },
    }
  },

  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 100
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= '新琪点 遇维来'
        return args
      })
  }
}