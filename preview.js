const chalk = require('chalk')
const color = require("tinycolor2")
const labels = require('./labels.js')

labels.forEach(label => {
  let labelStyle

  if (color(label.color).isDark()) {
    labelStyle = chalk.bgHex(label.color).white
  } else {
    labelStyle = chalk.bgHex(label.color).black
  }

  console.log(labelStyle(` ${label.name} `), label.description || '')
})

console.log("\n---\n")
console.log(`${labels.length} labels`)
