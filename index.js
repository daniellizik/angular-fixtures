const { readdirSync, readFileSync } = require('fs')
const path = require('path')
const bundles = path.resolve(__dirname, 'build', 'bundles')
const htmlpages = path.resolve(__dirname, 'build', 'html')

const html = readdirSync(htmlpages).reduce((acc, file) => {
  acc[file.split('.').shift()] = readFileSync(`${htmlpages}/${file}`, 'utf8')
  return acc
}, {})

const data = readdirSync(bundles).reduce((version, dir) => {
  version[dir] = readdirSync(`${bundles}/${dir}`).reduce((files, f) => {
    const file = `${bundles}/${dir}/${f}`
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