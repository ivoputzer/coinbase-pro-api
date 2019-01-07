/* eslint-disable camelcase */

const https = require('https')

const info = require('./package')
const auth = require('./auth')

exports.request = (options, env = process.env, { request } = https, { hostnameFor, headersFor, toString } = exports) => {
  return new Promise((resolve, reject) => {
    options.hostname = hostnameFor(env)
    options.headers = headersFor(options, env)

    request(options, resolve)
      .on('error', reject)
      .end(options.body)
  })
}

exports.toString = (stream, chunks = [], encoding = 'utf8', { concat } = Buffer) => {
  return new Promise((resolve, reject) => {
    stream.on('data', (data) => chunks.push(data))
    stream.on('error', reject)
    stream.on('end', (_) => resolve(concat(chunks).toString(encoding)))
  })
}

exports.hostnameFor = ({ npm_config_coinbase_pro_api_hostname, npm_config_coinbase_pro_api_sandbox } = process.env, { coinbase_pro_api_sandbox_hostname, coinbase_pro_api_hostname } = info.config) => {
  return npm_config_coinbase_pro_api_hostname || (['true', '1'].includes(npm_config_coinbase_pro_api_sandbox) ? coinbase_pro_api_sandbox_hostname : coinbase_pro_api_hostname)
}

exports.headersFor = (options, { npm_config_coinbase_pro_api_key = String.prototype, npm_config_coinbase_pro_api_passphrase = String.prototype, npm_config_coinbase_pro_api_secret = String.prototype } = process.env, { signatureFor } = auth, { name, version } = info) => {
  const timestamp = 1e-3 * Date.now() // fixme: not sure if timestamp should be created here
  return {
    'User-Agent': name + '/' + version,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'CB-ACCESS-KEY': npm_config_coinbase_pro_api_key,
    'CB-ACCESS-PASSPHRASE': npm_config_coinbase_pro_api_passphrase,
    'CB-ACCESS-SIGN': signatureFor(Object.assign(options, { timestamp }), { npm_config_coinbase_pro_api_secret }),
    'CB-ACCESS-TIMESTAMP': timestamp
  }
}
