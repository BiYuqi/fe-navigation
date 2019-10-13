const fs = require('fs')
const path = require('path')
const glob = require('glob')

const jsonPath = path.resolve(__dirname, './jsondata/data/*.json')
const generateData = {}
const files = glob.sync(jsonPath)

files.forEach(file => {
  const content = JSON.parse(fs.readFileSync(file, 'utf-8'))
  Object.assign(generateData, content)
})

fs.writeFileSync('./jsondata/basedata.json', JSON.stringify(generateData))
