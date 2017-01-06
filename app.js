const htmlStandards = require('spike-html-standards')
const cssStandards = require('spike-css-standards')
const latest = require('babel-preset-latest')
const postcssFor = require('postcss-for')

module.exports = {
  devtool: 'source-map',
  ignore: ['**/layout.html', '**/_*', '**/.*'],
  reshape: (ctx) => {
    return htmlStandards({
      parser: false,
      webpack: ctx,
      locals: { foo: 'bar' }
    })
  },
  postcss: (ctx) => {
    const css = cssStandards({ parser: false, webpack: ctx })
    css.plugins.push(postcssFor())
    return css
  },
  babel: { presets: [latest] }
}
