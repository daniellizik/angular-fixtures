const base = require('./base')

module.exports = {
  entry: base.entry,
  output: base.output,
  resolve: base.resolve,
  module: base.module,
  plugins: [
    base.ugly(),
    base.define()
  ]
}