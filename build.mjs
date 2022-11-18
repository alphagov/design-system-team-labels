import { writeFile } from 'fs/promises'
import labels from './labels.mjs'

const configPath = new URL('labels.json', import.meta.url)
const configJSON = JSON.stringify(labels, null, 2) + '\n'

await writeFile(configPath, configJSON)
