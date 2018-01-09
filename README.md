# babel-plugin-import-remove-resource-query
Remove the resourceQuery param when importing modules via babel. Useful with [Jest](https://facebook.github.io/jest/) and [babel-jest](https://github.com/babel/babel-jest), that [doesn't support resourceQueries](https://github.com/facebook/jest/issues/4181)

## Example
```js
import 'path/to/file?resourceQuery'
import foo from 'path/to/file?query'
import bar, { baz } from 'path/to/file?query'
require('path/to/file?resourceQuery')
```

becomes:
```js
import 'path/to/file'
import foo from 'path/to/file'
import bar, { baz } from 'path/to/file'
require('path/to/file')
```

## Installation
With [npm](https://www.npmjs.com/) do:
```bash
npm install babel-plugin-import-remove-resource-query --save-dev
```
With [yarn](https://yarnpkg.com) do:
```bash
yarn add --dev babel-plugin-import-remove-resource-query
```

## With `babel-jest`
In tour babelTransform.js file add the plugin like so:
```js
module.exports = babelJest.createTransformer({
  plugins: [
    'babel-plugin-import-remove-resource-query'
  ]
})
```
