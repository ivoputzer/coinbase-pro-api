const {name, version} = require('../package')
const {toString} = require('./stream')

exports.get = (path, query = {}, options) => {
  return request({
    method: 'get',
    hostname: hostnameFor(options),
    path
  })
}

function hostnameFor ({sandbox}) {
  return sandbox
    ? 'api-public.sandbox.pro.coinbase.com'
    : 'api.pro.coinbase.com'
}

function request (options, {request} = require('https')) {
  return new Promise((resolve, reject) => {
    request(options, resolve)
      .on('error', reject)
      .end(options.body)
  }).then(toString)
}

// // const {signatureFor} = require('./lib/signature')

// // function signatureFor (options, {
// //   npm_package_config_coinbase_pro_api_key: key,
// //   npm_package_config_coinbase_pro_api_secret: secret,
// //   npm_package_config_coinbase_pro_api_passphrase: passphrase
// // } = process.env) {
// // const crypto = require('crypto')
// //   const timestamp = Date.now() / 1000
// //   const digest = timestamp + options.method.toUpperCase() + options.path + (options.body || String.prototype)
// //   const hmac = crypto.createHmac('sha256', Buffer.from((secret || String.prototype), 'base64'))

// //   options.headers['CB-ACCESS-KEY'] = (key || String.prototype)
// //   options.headers['CB-ACCESS-PASSPHRASE'] = (passphrase || String.prototype)
// //   options.headers['CB-ACCESS-SIGN'] = hmac.update(digest).digest('base64')
// //   options.headers['CB-ACCESS-TIMESTAMP'] = timestamp
// // }



// function headersFor (signature, {name, version} = require('./package.json')) {
//   return {
//     'User-Agent': [name, version].join('-'),
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   }
// }
//   request({
//     method: 'get',
//     path: '/time?' + stringify(query),
//     hostname: hostnameFor(query),
//     headers: headersFor(signature)
//   }).then(parse)




