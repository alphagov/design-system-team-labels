import labels from './labels.mjs'

const errors = []

labels.forEach(label => {
  if (label.description && label.description.length > 100) {
    errors.push(`- Description for "${label.name}" exceeds 100 characters`)
  }
})

if (errors.length) {
  console.log('Validation failed:')
  console.log(errors.join('\n'))
  process.exit(1)
}
