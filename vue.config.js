const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    port: 7001
  },
  chainWebpack:config => {
    //修改网址名
    config.plugin('html')
      .tap(args => {
        args[0].title = '三台农商银行信息系统';
        return args
      })
  }
})
