coinbase-pro-api
===
Lightweight implementation of coinbase-pro api.

### Install
```sh
npm install coinbase-pro
```

### Usage
This library allows you to use both public and private endpoints.
Credentials can be set via env variables or by adding them to your `.npmrc`.

All methods return a Promise and are compatible with `async` and `await`.

#### .getProducts([query[, parser[, stringifier]])
```js
const {getProducts} = require('coinbase-pro')
getProducts()
```
