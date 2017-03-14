const { readFileSync } = require('fs')

exports.strings = {
  flat: readFileSync('./fixtures/flat.js', 'utf8'),
  multipleFlat: readFileSync('./fixtures/multipleFlat.js', 'utf8'),
  enterprise: readFileSync('./fixtures/enterprise.js', 'utf8'),
  indexHtml: readFileSync('./fixtures/index.html', 'utf8')
}

exports.code = {
  flat: require('./fixtures/flat'),
  multipleFlat: require('./fixtures/multipleFlat'),
  enterprise: require('./fixtures/enterprise'),
}
