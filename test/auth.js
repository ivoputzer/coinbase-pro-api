test('coinbase-pro-api/auth', () => {
  const { deepStrictEqual } = require('assert')

  test('.signatureFor', () => {
    const { signatureFor } = require('../auth')
    const { createHmac } = require('crypto')

    test('is callable', () => {
      deepStrictEqual(typeof signatureFor, 'function')
    })

    test('creates sha256 hmac signature using crypto', () => {
      const signature = signatureFor({ timestamp: 1, method: 'get' })
      deepStrictEqual(signature, createHmac('sha256', Buffer.from(String.prototype, 'base64'))
        .update(`1GET`)
        .digest('base64'))
    })

    test('takes an optional secret argument', () => {
      const signature = signatureFor({ timestamp: 1, method: 'get' }, { npm_config_coinbase_pro_api_secret: String.prototype })
      deepStrictEqual(signature, createHmac('sha256', Buffer.from(String.prototype, 'base64'))
        .update(`1GET`)
        .digest('base64'))
    })
  })
})
