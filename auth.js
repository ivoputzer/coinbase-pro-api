/* eslint-disable camelcase */

const crypto = require('crypto')

exports.configurationFor = ({ sandbox, hostname, key, passphrase, secret } = Object.prototype) => {
  return {
    npm_config_coinbase_pro_api_sandbox: String(sandbox),
    npm_config_coinbase_pro_api_hostname: hostname,
    npm_config_coinbase_pro_api_key: key,
    npm_config_coinbase_pro_api_passphrase: passphrase,
    npm_config_coinbase_pro_api_secret: secret
  }
}

exports.signatureFor = ({ timestamp, method, path = String.prototype, body = String.prototype }, { npm_config_coinbase_pro_api_secret = String.prototype } = process.env, { createHmac } = crypto) => {
  const buffer = Buffer.from(npm_config_coinbase_pro_api_secret, 'base64')
  return createHmac('sha256', buffer)
    .update(timestamp + method.toUpperCase() + path + body)
    .digest('base64')
}
