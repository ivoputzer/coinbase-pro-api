/* eslint-disable camelcase */

const crypto = require('crypto')
const https = require('https')

exports.signatureFor = ({method, path, body = String.prototype}, {npm_config_coinbase_pro_api_key = String.prototype, npm_config_coinbase_pro_api_passphrase = String.prototype, npm_config_coinbase_pro_api_secret = String.prototype} = process.env, {createHmac} = crypto) => {
  const timestamp = 1e-3 * Date.now()
  const digest = timestamp + method.toUpperCase() + path + body
  return {
    'CB-ACCESS-KEY': npm_config_coinbase_pro_api_key,
    'CB-ACCESS-PASSPHRASE': npm_config_coinbase_pro_api_passphrase,
    'CB-ACCESS-SIGN': createHmac('sha256', Buffer.from(npm_config_coinbase_pro_api_secret, 'base64')).update(digest).digest('base64'),
    'CB-ACCESS-TIMESTAMP': timestamp
  }
}

exports.headersFor = (options, {assign} = Object, {name, version} = require('../package'), {signatureFor} = exports) => {
  const signature = signatureFor(options)
  return assign({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': name + ' ' + version
  }, signature)
}

exports.hostnameFor = (options, {npm_config_coinbase_pro_api_hostname = 'api.pro.coinbase.com'} = process.env) => {
  return npm_config_coinbase_pro_api_hostname
}

exports.request = (options, {assign} = Object, {request} = https, {hostnameFor, headersFor, toString} = exports) => {
  const hostname = hostnameFor(options)
  const headers = headersFor(options)
  return new Promise((resolve, reject) => {
    request(Object.assign({hostname, headers}, options), resolve)
      .on('error', reject)
      .end(options.body)
  }).then(toString)
}

exports.toString = (stream, chunks = [], encoding = 'utf8', {concat} = Buffer) => {
  return new Promise((resolve, reject) => {
    stream.on('data', (data) => chunks.push(data))
    stream.on('error', reject)
    stream.on('end', (_) => resolve(concat(chunks).toString(encoding)))
  })
}
