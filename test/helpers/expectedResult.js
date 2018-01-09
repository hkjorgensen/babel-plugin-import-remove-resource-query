var path = require('path')
var fs = require('fs')

module.exports = function(name) {
  return fs
    .readFileSync(
      path.resolve(__dirname, '..', 'fixtures', name, 'expected.js'),
      'utf8',
    )
    .trim()
}
