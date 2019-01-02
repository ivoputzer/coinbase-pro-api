/* eslint-disable camelcase */

test('lib/client', () => {
  const { ok, deepStrictEqual } = require('assert')

  test('.signatureFor', () => {
    const { signatureFor } = require('../../lib/client')

    test('is callable', () => {
      deepStrictEqual(typeof signatureFor, 'function')
    })

    test('contains mandatory headers', () => {
      const signature = signatureFor(Object.prototype)

      ok(signature.hasOwnProperty('CB-ACCESS-KEY'))
      ok(signature.hasOwnProperty('CB-ACCESS-PASSPHRASE'))
      ok(signature.hasOwnProperty('CB-ACCESS-SIGN'))
      ok(signature.hasOwnProperty('CB-ACCESS-TIMESTAMP'))
    })

    test('takes optional key, passphrase and secret', () => {
      const npm_config_coinbase_pro_api_key = 'key'
      const npm_config_coinbase_pro_api_passphrase = 'passphrase'
      const npm_config_coinbase_pro_api_secret = Buffer.from('secret').toString('base64')

      const signature = signatureFor({}, { npm_config_coinbase_pro_api_key, npm_config_coinbase_pro_api_passphrase, npm_config_coinbase_pro_api_secret }, { createHmac })

      deepStrictEqual(signature['CB-ACCESS-KEY'], npm_config_coinbase_pro_api_key)
      deepStrictEqual(signature['CB-ACCESS-PASSPHRASE'], npm_config_coinbase_pro_api_passphrase)
      deepStrictEqual(signature['CB-ACCESS-SIGN'], Buffer.from('secret'))

      function createHmac (_, secret) {
        return {
          update () {
            return {
              digest () {
                return secret
              }
            }
          }
        }
      }
    })
  })

  test('.headersFor', () => {
    const { headersFor } = require('../../lib/client')

    test('is callable', () => {
      deepStrictEqual(typeof headersFor, 'function')
    })
  })

  test('.hostnameFor', () => {
    const { hostnameFor } = require('../../lib/client')

    test('is callable', () => {
      deepStrictEqual(typeof hostnameFor, 'function')
    })
  })

  test('.requestFor', () => {
    const { request: requestFor } = require('../../lib/client')

    test('is callable', () => {
      deepStrictEqual(typeof requestFor, 'function')
    })
  })

  test('.toString', () => {
    const { toString } = require('../../lib/client')
    test('is callable', () => {
      deepStrictEqual(typeof toString, 'function')
    })
  })
})
