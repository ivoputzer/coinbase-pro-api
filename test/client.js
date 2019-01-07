/* eslint-disable camelcase */

test('coinbase-pro-api/client', () => {
  const { ok, deepStrictEqual } = require('assert')

  test('.request', () => {
    const { request } = require('../client')

    test('is callable', () => {
      deepStrictEqual(typeof request, 'function')
    })

    test('wraps https.request with a promise', () => {
      const promise = request({ method: 'get' }, undefined, {
        request (_, resolve) {
          return {
            on (_, reject) {
              return this
            },
            end () {
              return this
            }
          }
        }
      })
      deepStrictEqual(promise.constructor.name, 'Promise')
    })
  })

  test('.hostnameFor', () => {
    const { hostnameFor } = require('../client')

    test('is callable', () => {
      deepStrictEqual(typeof hostnameFor, 'function')
    })

    test('points to production environment when no configuration is provided', () => {
      const hostname = hostnameFor(undefined)
      deepStrictEqual(hostname, 'api.pro.coinbase.com')
    })

    test('enviroment can be overidden via npm configuration', () => {
      const hostname = hostnameFor({ npm_config_coinbase_pro_api_hostname: 'my.proxy' })
      deepStrictEqual(hostname, 'my.proxy')
    })

    test('sandbox enviroment can be enabled via boolean npm configuration', () => {
      const booleanSandbox = hostnameFor({ npm_config_coinbase_pro_api_sandbox: 'true' })
      deepStrictEqual(booleanSandbox, 'api-public.sandbox.pro.coinbase.com')
    })

    test('sandbox enviroment can be enabled via numeric npm configuration', () => {
      const numericSandbox = hostnameFor({ npm_config_coinbase_pro_api_sandbox: '1' })
      deepStrictEqual(numericSandbox, 'api-public.sandbox.pro.coinbase.com')
    })
  })

  test('.headersFor', () => {
    const { headersFor } = require('../client')

    test('is callable', () => {
      deepStrictEqual(typeof headersFor, 'function')
    })

    test('adds mandatory headers', () => {
      const headers = headersFor({ method: 'get' })

      ok(headers.hasOwnProperty('User-Agent'))
      ok(headers.hasOwnProperty('Accept'))
      ok(headers.hasOwnProperty('Content-Type'))
      ok(headers.hasOwnProperty('CB-ACCESS-KEY'))
      ok(headers.hasOwnProperty('CB-ACCESS-PASSPHRASE'))
      ok(headers.hasOwnProperty('CB-ACCESS-SIGN'))
      ok(headers.hasOwnProperty('CB-ACCESS-TIMESTAMP'))
    })
  })

  test('.toString', () => {
    const { Readable } = require('stream')
    const { toString } = require('../client')

    test('is callable', () => {
      deepStrictEqual(typeof toString, 'function')
    })

    test('returns promise', () => {
      const promise = toString({
        on: Function.prototype
      })
      deepStrictEqual(promise.constructor.name, 'Promise')
    })

    test('resolves readable stream into string', (done) => {
      const stream = new Readable({
        read () {
          this.push('foo')
          this.push(null)
        }
      })

      toString(stream)
        .then(string => deepStrictEqual(string, 'foo'))
        .then(done)
        .catch(done)
    })
  })
})
