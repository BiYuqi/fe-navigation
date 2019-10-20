const path = require('path')

const resolve = dir => path.join(__dirname, dir)
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

module.exports = {
  publicPath: IS_PROD ? 'vuenotes' : '/',
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
    config.plugins.delete('pwa')
    config.plugins.delete('workbox')
  }
}
