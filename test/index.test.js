var transformFixture = require('./helpers/transformFixture')
var expectedFixture = require('./helpers/expectedResult')

test('require()', function() {
  var source = transformFixture('require')
  var expectedResult = expectedFixture('require')

  expect(source).toBe(expectedResult)
})

test('require() with multiple parms', function() {
  var source = transformFixture('require-multiple-params')
  var expectedResult = expectedFixture('require-multiple-params')

  expect(source).toBe(expectedResult)
})

test('require() with no parms', function() {
  var source = transformFixture('require-no-params')
  var expectedResult = expectedFixture('require-no-params')

  expect(source).toBe(expectedResult)
})

test('require() with multiple', function() {
  var source = transformFixture('require-multiple')
  var expectedResult = expectedFixture('require-multiple')

  expect(source).toBe(expectedResult)
})

test('import', function() {
  var source = transformFixture('import')
  var expectedResult = expectedFixture('import')

  expect(source).toBe(expectedResult)
})

test('mixed require() and import', function() {
  var source = transformFixture('require-import-mixed')
  var expectedResult = expectedFixture('require-import-mixed')

  expect(source).toBe(expectedResult)
})
