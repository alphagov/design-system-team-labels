const { writeFile } = require('fs/promises')
const { join } = require('path')
const labels = require('./labels.js')

const configPath = join(__dirname, 'labels.json')
const configJSON = JSON.stringify(labels, null, 2) + '\n'

writeFile(configPath, configJSON)
