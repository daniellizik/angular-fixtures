const base = require('./base')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: base.entry,
  resolve: base.resolve,
  output: base.output,
  module: base.module,
  plugins: [
    base.define()
  ],
  target: 'web'
}