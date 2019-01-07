/* eslint-disable camelcase */

const crypto = require('crypto')

exports.signatureFor = ({ timestamp, method, path = String.prototype, body = String.prototype }, { npm_config_coinbase_pro_api_secret = String.prototype } = process.env, { createHmac } = crypto) => {
  const buffer = Buffer.from(npm_config_coinbase_pro_api_secret, 'base64')
  return createHmac('sha256', buffer)
    .update(timestamp + method.toUpperCase() + path + body)
    .digest('base64')
}
