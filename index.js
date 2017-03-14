const { readdirSync, lstatSync, readFileSync } = require('fs')
const path = require('path')
const dist = './dist'

const data = readdirSync(dist)
  .reduce((version, dir) => {
    version[dir] = readdirSync(`${dist}/${dir}`).reduce((files, f) => {
      const file = `${dist}/${dir}/${f}`
      files[f.split('.').shift()] = {
        code: () => require(file),
        string: readFileSync(file, 'utf8')
      }
      return files
    }, {})
    return version
  }, {})

module.exports = data