# [vuenotes](http://loadingmore.com/vuenotes)
## 前言

> 前端导航云集高质量前端网站的内容，云集大量前端网站。优秀的前端资讯网站

## 贡献
- fork当前库
- clone到本地
- 创建分支

重点: 
- 添加数据（`required`）
  /jsondata/data 该目录是数据存放地,最后会生成`basedata.json`.
  每个名字都是对应一个路由分类, eg: 最外层`javascript` 即是约定的路由名称，代码里会读取改名字进行渲染, 内部是数组，每个数组都有name, 作为分类依据分为`javascrip`和`jquery`两大类，字需要配置好该处，组件会自动渲染该数据
  ```js
  {
    "javascript": {
      "javascript": [
        { name: "", link: ""}
      ],
      "jquery": []
    }
  }
  ```
- 添加名称映射(`/config/headMapping.js`)
  `/config/headMapping.js`,此处存放所有子目录的名称映射，需要添加
  eg:
  'wechat-doc': '小程序文档'
- 路由(`/config/routerConfig.js`)
如果只是更新原有内容, 那就不必在乎路由这一环节，如果是想新增一级路由(新建了json文件)，则需要添加对应路由名称到`/config/routerConfig.js` 添加对应路由，以及侧边栏显示名字,此处用二维数组 `['javascript', 'Javascript']`

- 本地测试
至此，启动`npm run serve` 来验证是否正确渲染
## 本地使用

``` bash
# download
git clone https://github.com/BiYuqi/vuenotes.git
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build
```
