export const experimentMenu = [
  {
    name: '实验室控制台',
    value: 'console'
  },
  {
    name: '贡献与意见',
    value: 'contribution'
  }
]

export const getExperimentMenuName = (value) => {
  const target = experimentMenu.filter(item => item.value === value)
  return target.length && target[0].name
}
