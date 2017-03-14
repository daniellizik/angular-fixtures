const { readdirSync, readFileSync } = require('fs')
const path = require('path')
const dist = './dist'
const www = './www'

const html = readdirSync(www)
  .reduce((files, f) => {
    files[f.split('.').shift()] = readFileSync(`${www}/${f}`, 'utf8')
    return files
  }, {})

const data = readdirSync(dist)
  .reduce((version, dir) => {
    version[dir] = readdirSync(`${dist}/${dir}`).reduce((files, f) => {
      const file = `${dist}/${dir}/${f}`
      const filename = f.split('.').shift()
      files[filename] = {
        require: () => require(file),
        string: readFileSync(file, 'utf8'),
        html: html[filename]
      }
      return files
    }, {})
    return version
  }, {})

module.exports = data