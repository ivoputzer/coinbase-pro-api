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

    // test('returns signature headers', () => {
    //   const headers =

    //   const method = 'get'
    //   const path = '/'

    //   signatureFor({method: get})
    // })
  })

  // test('.headersFor', () => {
  //   const {headersFor} = require('../../lib/client')

  //   test('is callable', () => {
  //     deepStrictEqual(typeof headersFor, 'function')
  //   })
  // })

  // test('.headersFor', () => {
  //   const {headersFor} = require('../../lib/client')

  //   test('is callable', () => {
  //     deepStrictEqual(typeof headersFor, 'function')
  //   })
  // })

  // test('.hostnameFor', () => {
  //   const {hostnameFor} = require('../../lib/client')

  //   test('is callable', () => {
  //     deepStrictEqual(typeof hostnameFor, 'function')
  //   })
  // })

  // test('.requestFor', () => {
  //   const {request: requestFor} = require('../../lib/client')

  //   test('is callable', () => {
  //     deepStrictEqual(typeof requestFor, 'function')
  //   })
  // })

  // test('.toString', () => {
  //   const {toString} = require('../../lib/client')
  //   test('is callable', () => {
  //     deepStrictEqual(typeof toString, 'function')
  //   })
  // })
})

// const reqheaders = {
//   'Content-Type': 'application/json',
//   'Accept': 'application/json',
//   'User-Agent': process.env.npm_package_name + ' ' + process.env.npm_package_version
// }

// test('.request', () => {
//   const {request} = require('..')

//   test('is of type function', () => {
//     equal(typeof request, 'function')
//   })

//   test('makes standard `https.request` promise compatibile', () => {
//     const defaultOptions = {
//       protocol: 'https:',
//       slashes: true,
//       hostname: 'api.pro.coinbase.com',
//       path: '/time?option=true',
//       headers: {
//         'User-Agent': `${process.env.npm_package_name}  ${process.env.npm_package_version}`
//       }
//     }

//     test('supports `head` requests', Function.prototype)

//     test('supports `options` requests', Function.prototype)

//     test('supports `post` requests', Function.prototype)

//     test('supports `put` requests', Function.prototype)

//     test('supports `delete` requests', Function.prototype)

//     test('supports `get` requests', (done) => {
//       const options = {...defaultOptions, method: 'get'}
//       const https = {
//         request: stub()
//           .yields({statusCode: 200, headers: {}})
//           .returns({on: Function.prototype})
//       }

//       nock('https://api.pro.coinbase.com')
//         .get('/time')
//         .query({option: true})
//         .reply(200)

//       request(options, {}, https)
//         .then(res => {
//           equal(res.statusCode, 200)
//           ok(https.request.calledWith(options), '`https.request` should have been called')
//         })
//         .then(done)
//         .catch(done)
//     })
//   })

//   test('handles standard `https.request` errors', (done) => {
//     const options = {protocol: 'https:', method: 'post', slashes: true, hostname: 'localhost', path: '/', headers: {}}
//     const https = {request: stub().returns({on: stub().yields({error: true})})}

//     request(options, {}, https)
//       .then(done)
//       .catch(err => {
//         deepStrictEqual(err, {error: true})
//         done()
//       })
//   })
// })
