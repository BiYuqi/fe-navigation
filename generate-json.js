const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const glob = require('glob')

const jsonPath = path.resolve(__dirname, './jsondata/data/*.json')
const generateData = {}
const files = glob.sync(jsonPath)

files.forEach(file => {
  try {
    const content = JSON.parse(fs.readFileSync(file, 'utf-8'))
    Object.assign(generateData, content)
  } catch (error) {
    console.log(`
    ${chalk.green('Parse json file got error')}:
    ${chalk.red(error.message)}
    `)
  }
})

fs.writeFile('./jsondata/basedata.json', JSON.stringify(generateData), error => {
  if (error) {
    console.log(`
    ${chalk.green('write ./jsondata/basedata.json got error')}:
    ${chalk.red(error.message)}
    `)
  }
  console.log(chalk.cyanBright(`write json file success: ./jsondata/basedata.json`))
})
