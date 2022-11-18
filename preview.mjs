import chalk from 'chalk'
import color from 'tinycolor2'
import labels from './labels.mjs'

labels.forEach(label => {
  let labelStyle

  if (color(label.color).isDark()) {
    labelStyle = chalk.bgHex(label.color).white
  } else {
    labelStyle = chalk.bgHex(label.color).black
  }

  console.log(labelStyle(` ${label.name} `), label.description || '')
})

console.log('\n---\n')
console.log(`${labels.length} labels`)
