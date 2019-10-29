const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
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
