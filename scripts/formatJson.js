const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const glob = require('glob')
const jsonFormat = require('json-format')

const resolve = dir => path.resolve(__dirname, dir)
const jsonPath = resolve('../jsondata/data/*.json')
const files = glob.sync(jsonPath)

const config = {
  type: 'space',
  size: 2
}

files.forEach(file => {
  try {
    const content = JSON.parse(fs.readFileSync(file, 'utf-8'))
    const fileName = file.match(/([^/]+)\.json$/)[1]
    fs.writeFile(resolve(`../jsondata/data/${fileName}.json`), jsonFormat(content, config), error => {
      if (error) {
        console.log(`
        ${chalk.green('Formatted json file got error')}:
        ${chalk.red(error.message)}
        `)
      }
      console.log(chalk.cyanBright(`Formatted json file success: /jsondata/data/${fileName}.json`))
    })
  } catch (error) {
    console.log(`
    ${chalk.green('Parse json file got error')}:
    ${chalk.red(error.message)}
    `)
  }
})
