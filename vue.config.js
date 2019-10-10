const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const resolve = dir => path.join(__dirname, dir)
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

module.exports = {
  lintOnSave: false,
  configureWebpack: config => {
    const plugins = []
    if (IS_PROD) {
      plugins.push(
        new PrerenderSpaPlugin({
          staticDir: resolve('dist'),
          routes: ['/', '/about'],
          postProcess (renderedRoute) {
            renderedRoute.route = renderedRoute.originalRoute
            if (renderedRoute.route.endsWith('.html')) {
              renderedRoute.outputPath = path.join(__dirname, 'dist', renderedRoute.route)
            }
            return renderedRoute
          },
          minify: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            decodeEntities: true,
            keepClosingSlash: true,
            sortAttributes: true
          },
          renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
            inject: {
              prerender: true
            },
            headless: false
            // 视图组件是在API请求获取所有必要数据后呈现的，因此我们在dom中存在“data view”属性后创建页面快照
            // renderAfterDocumentEvent: 'render-event'
          })
        })
      )
    }
    config.plugins = [...config.plugins, ...plugins]
  }
}
