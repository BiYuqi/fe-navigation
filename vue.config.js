const path = require('path')
// const PrerenderSpaPlugin = require('prerender-spa-plugin')
// const prerenderRoutes = require('./prerender-routes')

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
    config.plugins.delete('pwa')
    config.plugins.delete('workbox')
  }
  // configureWebpack: config => {
  //   const plugins = []
  //   if (IS_PROD) {
  //     plugins.push(
  //       new PrerenderSpaPlugin({
  //         staticDir: resolve('dist'),
  //         routes: prerenderRoutes,
  //         postProcess (renderedRoute) {
  //           renderedRoute.route = renderedRoute.originalRoute
  //           if (renderedRoute.route.endsWith('.html')) {
  //             renderedRoute.outputPath = path.join(__dirname, 'dist', renderedRoute.route)
  //           }
  //           return renderedRoute
  //         },
  //         renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
  //           inject: {
  //             prerender: true
  //           },
  //           headless: false
  //         })
  //       })
  //     )
  //   }
  //   config.plugins = [...config.plugins, ...plugins]
  // }
}
