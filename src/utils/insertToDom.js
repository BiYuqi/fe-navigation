export const insertJs = (html) => {
  const script = document.createElement('script')
  script.sync = true
  script.innerHTML = html
  let first = document.getElementsByTagName('script')[0]
  first.parentNode.insertBefore(script, first)
}
