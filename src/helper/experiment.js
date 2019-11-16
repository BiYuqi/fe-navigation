export const experimentMenu = [
  {
    title: '实验室控制台',
    desc: '在这里设置实验功能的开启和关闭。',
    value: 'console'
  },
  {
    title: '贡献与意见',
    desc: '您可以反馈使用问题、建议, 也可以发送PR添加新的链接给我们.',
    value: 'contribution'
  }
]

export const CONSOLE_FEATURES = [
  {
    name: 'theme',
    desc: '开启随机样式模式',
    disabled: true
  },
  {
    name: 'search',
    desc: '开启搜索功能',
    disabled: false
  },
  {
    name: 'iframe',
    desc: '开启Iframe中打开链接',
    disabled: true
  }
]

export const getExperimentMenuName = (value) => {
  const target = experimentMenu.filter(item => item.value === value)
  return target.length && target[0]
}
