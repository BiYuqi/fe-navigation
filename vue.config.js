const path = require('path')

const resolve = dir => path.join(__dirname, dir)
const COS_PATH = 'https://fe-navigation-1254319003.cos.ap-chengdu.myqcloud.com/fe'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? COS_PATH : '/',
  productionSourceMap: false,
  lintOnSave: true,
  devServer: {
    open: true
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@json', resolve('jsondata'))
      .set('@', resolve('src'))
      .set('@config', resolve('config'))
      .set('@helper', resolve('helper'))
    config.plugins.delete('pwa')
    config.plugins.delete('workbox')
  }
}
