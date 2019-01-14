test('coinbase-pro-api/auth', () => {
  const { ok, strictEqual, deepStrictEqual } = require('assert')

  test('.configurationFor', () => {
    const { configurationFor } = require('../auth')

    test('is callable', () => {
      deepStrictEqual(typeof configurationFor, 'function')
    })

    test('returns empty configuration object by default', () => {
      const configuration = configurationFor(undefined)
      ok(configuration.hasOwnProperty('npm_config_coinbase_pro_api_sandbox'))
      ok(configuration.hasOwnProperty('npm_config_coinbase_pro_api_hostname'))
      ok(configuration.hasOwnProperty('npm_config_coinbase_pro_api_key'))
      ok(configuration.hasOwnProperty('npm_config_coinbase_pro_api_passphrase'))
      ok(configuration.hasOwnProperty('npm_config_coinbase_pro_api_secret'))
    })

    test('returns object env compatible object', () => {
      const configuration = configurationFor({
        sandbox: false,
        hostname: 'hostname',
        key: 'key',
        passphrase: 'passphrase',
        secret: 'secret'
      })

      deepStrictEqual(configuration, {
        npm_config_coinbase_pro_api_sandbox: 'false',
        npm_config_coinbase_pro_api_hostname: 'hostname',
        npm_config_coinbase_pro_api_key: 'key',
        npm_config_coinbase_pro_api_passphrase: 'passphrase',
        npm_config_coinbase_pro_api_secret: 'secret'
      })
    })
  })

  test('.signatureFor', () => {
    const { signatureFor } = require('../auth')

    test('is callable', () => {
      deepStrictEqual(typeof signatureFor, 'function')
    })

    test('creates base64 encoded sha256 hmac signature', (done) => {
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

    test('defaults to crypto library', () => {
      const signature = signatureFor({ timestamp: 1, method: 'get' })
      strictEqual(Buffer.from(signature, 'base64').toString('base64'), signature)
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
