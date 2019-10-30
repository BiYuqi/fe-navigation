const flatten = (arr, max = 1) =>
  arr.reduce(
    (initial, curr, index) =>
      Array.isArray(curr) ? initial.concat(flatten(curr)) : initial.concat(curr),
    []
  )

const parseQuery = query => {
  // need to double check this regular
  const regexp = /(\w+)=([^&]+)/g
  const result = {}
  let match

  while ((match = regexp.exec(query))) {
    let key = match[1]
    let value = match[2].replace(/\n/g, '')
    result[key] ? (result[key] = flatten([result[key], value])) : (result[key] = value)
  }

  return result
}

const toogles = ['experiment']

export const featuresToggle = toggleName => {
  let isToggleOn

  const parseQueryValue = parseQuery(window.location.href)

  if (!toogles.includes(toggleName)) {
    isToggleOn = false
  }

  isToggleOn = parseQueryValue[toggleName] && parseQueryValue[toggleName] === 'true' ? true : false || false

  return isToggleOn
}
