/*
  Removes query param from imports.
  ```js
    require('path/to/file?queryParam&param2')
    import 'path/to/file?resourceQuery'
  ```

  transforms to

  ```js
    require('path/to/file')
    import 'path/to/file'
  ```
*/

module.exports = function(babel) {
  var t = babel.types
  var needleRegExp = /\?/
  var replaceRegExp = /\?.*/

  return {
    visitor: {
      // Import
      ImportDeclaration: function(path, state) {
        var value = path.node.source.value

        if (needleRegExp.test(value)) {
          const pathWithoutQuery = value.replace(replaceRegExp, '')
          path.node.source = t.stringLiteral(pathWithoutQuery)
        }
      },
      // require
      CallExpression: function(path, state) {
        var calleeName = path.node.callee.name
        var args = path.node.arguments
        var filePath

        // Exit if it's not a require statement
        if (
          calleeName !== 'require' ||
          !args.length ||
          !t.isStringLiteral(args[0])
        ) {
          return
        }

        filePath = args[0].value

        if (needleRegExp.test(filePath)) {
          const pathWithoutQuery = filePath.replace(replaceRegExp, '')
          path.node.arguments = [t.stringLiteral(pathWithoutQuery)]
        }
      },
    },
  }
}
