var path = require('path')
var babel = require('babel-core')
var plugin = require('../../src/index')

var transformFixture = function(name) {
  return babel.transformFileSync(
    path.resolve(__dirname, '..', 'fixtures', name, 'source.js'),
    {
      plugins: [plugin],
    },
  ).code
}

module.exports = transformFixture
