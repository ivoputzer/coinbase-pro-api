test('coinbase-pro-api/auth', () => {
  const { deepStrictEqual } = require('assert')

  test('.signatureFor', () => {
    const { signatureFor } = require('../auth')

    test('is callable', () => {
      deepStrictEqual(typeof signatureFor, 'function')
    })

    test('creates base64 encoded sha256 hmac signature using crypto', (done) => {
      signatureFor({ timestamp: 1, method: 'get' }, undefined, {
        createHmac (algorithm) {
          deepStrictEqual(algorithm, 'sha256')
          return {
            update (digest) {
              deepStrictEqual(digest, '1GET')
              return {
                digest (encoding) {
                  deepStrictEqual(encoding, 'base64')
                  done()
                }
              }
            }
          }
        }
      })
    })

    test('takes an optional secret argument', (done) => {
      const secret = Buffer.from('secret').toString('base64')
      signatureFor({ timestamp: 1, method: 'get' }, { npm_config_coinbase_pro_api_secret: secret }, {
        createHmac (algorithm, key) {
          deepStrictEqual(key, Buffer.from(secret, 'base64'))
          return {
            update (digest) {
              return {
                digest (encoding) {
                  done()
                }
              }
            }
          }
        }
      })
    })

    test('optional secret argument defaults to empty string when configuration is missing', (done) => {
      signatureFor({ timestamp: 1, method: 'get' }, {}, {
        createHmac (algorithm, key) {
          deepStrictEqual(key, Buffer.from(String.prototype, 'base64'))
          return {
            update (digest) {
              return {
                digest (encoding) {
                  done()
                }
              }
            }
          }
        }
      })
    })
  })
})
