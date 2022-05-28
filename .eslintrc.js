const { configure, presets } = require('eslint-kit')

module.exports = configure({
  presets: [
    presets.typescript(),
    presets.prettier(),
    presets.node(),
    presets.alias(),
  ],
})
