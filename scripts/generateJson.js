const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const glob = require('glob')

const resolve = dir => path.resolve(__dirname, dir)
const jsonPath = resolve('../jsondata/data/*.json')
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

fs.writeFile(resolve('../jsondata/basedata.json'), JSON.stringify(generateData), error => {
  if (error) {
    console.log(`
    ${chalk.green('Generate /jsondata/basedata.json got error')}:
    ${chalk.red(error.message)}
    `)
  }
  console.log(chalk.cyanBright(`Generate json file success: /jsondata/basedata.json`))
})
