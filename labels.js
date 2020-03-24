// Flatten the labels defined in the config into a single array of objects, as
// expected by github-label-sync:
// 
// [
//   {
//     "name": "mylabel",
//     "color": "ff0000",
//     "description": "Description of the label",
//     "aliases": []
//   },
//   ...
// ]

module.exports = require ('./config.js').reduce((accumulator, group) => {
    return accumulator.concat(group.labels.map(entry => {
        if (typeof entry === 'string') {
            return {
                name: entry,
                color: group.color
            }
        } else {
            // Merge the object with the colour from the group, with the label
            // colour taking precedence.
            return Object.assign({
                color: group.color
            }, entry)
        }
    }))
}, [])
