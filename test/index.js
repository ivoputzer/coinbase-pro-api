const nock = require('nock')

test('coinbase-pro', () => {
  const {ok, equal, deepEqual} = require('assert')
  const {spy, stub} = require('sinon')

  const reqheaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'User-Agent': process.env.npm_package_name + ' ' + process.env.npm_package_version
  }

  test('.request', () => {
    const {request} = require('..')

    test('is of type function', () => {
      equal(typeof request, 'function')
    })

    test('makes standard `https.request` promise compatibile', () => {
      const defaultOptions = {
        protocol: 'https:',
        slashes: true,
        hostname: 'api.pro.coinbase.com',
        path: '/time?option=true',
        headers: {
          'User-Agent': `${process.env.npm_package_name}  ${process.env.npm_package_version}`
        }
      }

      test('supports `head` requests', Function.prototype)

      test('supports `options` requests', Function.prototype)

      test('supports `post` requests', Function.prototype)

      test('supports `put` requests', Function.prototype)

      test('supports `delete` requests', Function.prototype)

      test('supports `get` requests', (done) => {
        const options = {...defaultOptions, method: 'get'}
        const https = {
          request: stub()
            .yields({statusCode: 200, headers: {}})
            .returns({on: Function.prototype})
        }

        nock('https://api.pro.coinbase.com')
          .get('/time')
          .query({option: true})
          .reply(200)

        request(options, {}, https)
          .then(res => {
            equal(res.statusCode, 200)
            ok(https.request.calledWith(options), '`https.request` should have been called')
          })
          .then(done)
          .catch(done)
      })
    })

    test('handles standard `https.request` errors', (done) => {
      const options = {protocol: 'https:', method: 'post', slashes: true, hostname: 'localhost', path: '/', headers: {}}
      const https = {request: stub().returns({on: stub().yields({error: true})})}

      request(options, {}, https)
        .then(done)
        .catch(err => {
          deepEqual(err, {error: true})
          done()
        })
    })
  })

  test('.getCurrencies', () => {
    const {request, getCurrencies} = require('..')

    test('is of type function', () => {
      equal(typeof getCurrencies, 'function')
    })

    test('performs https request towards `/currencies` with options', async (done) => {
      const options = {}
      const parseJson = spy()

      nock('https://api.pro.coinbase.com', {reqheaders})
        .get('/currencies')
        .query(options)
        .reply(200, [])

      try {
        await getCurrencies(options, {request, parseJson})
        ok(parseJson.calledOnce, 'parseJson should have been called with `http.IncomingMessage` response object')
        done(null)
      } catch (err) {
        done(err)
      }
    })
  })

  test('.getTime', () => {
    const {request, getTime} = require('..')

    test('is of type function', () => {
      equal(typeof getTime, 'function')
    })

    test('performs https request towards `/time` with options', async (done) => {
      const options = {}
      const parseJson = spy()

      nock('https://api.pro.coinbase.com', {reqheaders})
        .get('/time')
        .query(options)
        .reply(200, {})

      try {
        await getTime(options, {request, parseJson})
        ok(parseJson.calledOnce, 'parseJson should have been called with `http.IncomingMessage` response object')
        done(null)
      } catch (err) {
        done(err)
      }
    })
  })

  test('.getProducts', () => {
    const {request, getProducts} = require('..')

    test('is of type function', () => {
      equal(typeof getProducts, 'function')
    })

    test('performs https request towards `/products` with options', async (done) => {
      const options = {}
      const parseJson = spy()

      nock('https://api.pro.coinbase.com', {reqheaders})
        .get('/products')
        .query(options)
        .reply(200, {})

      try {
        await getProducts(options, {request, parseJson})
        ok(parseJson.calledOnce, 'parseJson should have been called with `http.IncomingMessage` response object')
        done(null)
      } catch (err) {
        done(err)
      }
    })
  })

  test('.getProductOrderBook', () => {
    const {request, getProductOrderBook} = require('..')

    test('is of type function', () => {
      equal(typeof getProductOrderBook, 'function')
    })

    test('performs https request towards `/products/{productId}/book` with options', async (done) => {
      // options.level 1 Only the best bid and ask
      // options.level 2 Aggregated top 50 bids and asks,
      // options.level 3 Not aggregated full order book
      const options = {level: 1}
      const productId = 'BTC-EUR'
      const parseJson = spy()

      nock('https://api.pro.coinbase.com', {reqheaders})
        .get(`/products/${productId}/book`)
        .query(options)
        .reply(200, {})

      try {
        await getProductOrderBook(productId, options, {request, parseJson})
        ok(parseJson.calledOnce, 'parseJson should have been called with `http.IncomingMessage` response object')
        done(null)
      } catch (err) {
        done(err)
      }
    })
  })

  test('.getProductTicker', () => {
    const {request, getProductTicker} = require('..')

    test('is of type function', () => {
      equal(typeof getProductTicker, 'function')
    })

    test('performs https request towards `/products/{productId}/ticker` with options', async (done) => {
      const options = {}
      const productId = 'BTC-EUR'
      const parseJson = spy()

      nock('https://api.pro.coinbase.com', {reqheaders})
        .get(`/products/${productId}/ticker`)
        .query(options)
        .reply(200, {})

      try {
        await getProductTicker(productId, options, {request, parseJson})
        ok(parseJson.calledOnce, 'parseJson should have been called with `http.IncomingMessage` response object')
        done(null)
      } catch (err) {
        done(err)
      }
    })
  })

  test('.getProductHistoricRates', () => {
    const {request, getProductHistoricRates} = require('..')

    test('is of type function', () => {
      equal(typeof getProductHistoricRates, 'function')
    })

    test('performs https request towards `/products/{productId}/candles` with options', async (done) => {
      // options.start - start time in ISO 8601
      // options.end - end time in ISO 8601
      // options.granularity - desired timeslice in seconds
      const options = {}
      const productId = 'BTC-EUR'
      const parseJson = spy()

      nock('https://api.pro.coinbase.com', {reqheaders})
        .get(`/products/${productId}/candles`)
        .query(options)
        .reply(200, {})

      try {
        await getProductHistoricRates(productId, options, {request, parseJson})
        ok(parseJson.calledOnce, 'parseJson should have been called with `http.IncomingMessage` response object')
        done(null)
      } catch (err) {
        done(err)
      }
    })
  })

  test('.getProduct24HrStats', () => {
    const {request, getProduct24HrStats} = require('..')

    test('is of type function', () => {
      equal(typeof getProduct24HrStats, 'function')
    })

    test('performs https request towards `/products/{productId}/stats` with options', async (done) => {
      const options = {}
      const productId = 'BTC-EUR'
      const parseJson = spy()

      nock('https://api.pro.coinbase.com', {reqheaders})
        .get(`/products/${productId}/stats`)
        .query(options)
        .reply(200, {})

      try {
        await getProduct24HrStats(productId, options, {request, parseJson})
        ok(parseJson.calledOnce, 'parseJson should have been called with `http.IncomingMessage` response object')
        done(null)
      } catch (err) {
        done(err)
      }
    })
  })

  test.skip('.getProductTradeStream', () => {
    const {getProductTradeStream} = require('..')

    test('is of type function', () => {
      equal(typeof getProductTradeStream, 'function')
    })

    test('performs https request towards `/products/{productId}/trades` with options', async (done) => {
      const options = {}
      const productId = 'BTC-EUR'
      // const parseJson = spy()

      nock('https://api.pro.coinbase.com', {reqheaders})
        .get(`/products/${productId}/trades`)
        .query(options)
        .reply(200, {})

      // nock('https://api.pro.coinbase.com', {reqheaders})
      //   .get(`/products/${productId}/trades`)
      //   .query(options)
      //   .reply(200, {})

      try {
        await getProductTradeStream(productId, 8408000, 8409000)
        // ok(parseJson.calledOnce, 'parseJson should have been called with `http.IncomingMessage` response object')
        done(null)
      } catch (err) {
        done(err)
      }
    })
  })

  test('.getProductTrades', () => {
    const {request, getProductTrades} = require('..')

    test('is of type function', () => {
      equal(typeof getProductTrades, 'function')
    })

    test('performs https request towards `/products/{productId}/trades` with options', async (done) => {
      const options = {}
      const productId = 'BTC-EUR'
      const parseJson = spy()

      nock('https://api.pro.coinbase.com', {reqheaders})
        .get(`/products/${productId}/trades`)
        .query(options)
        .reply(200, {})

      try {
        await getProductTrades(productId, options, {request, parseJson})
        ok(parseJson.calledOnce, 'parseJson should have been called with `http.IncomingMessage` response object')
        done(null)
      } catch (err) {
        done(err)
      }
    })
  })

  // SECURE API

  test('.getCoinbaseAccounts', () => {
    const {getCoinbaseAccounts} = require('..')

    test('is of type function', () => {
      equal(typeof getCoinbaseAccounts, 'function')
    })
  })

  test('.getPaymentMethods', () => {
    const {getPaymentMethods} = require('..')

    test('is of type function', () => {
      equal(typeof getPaymentMethods, 'function')
    })
  })

  test('.getAccounts', () => {
    const {getAccounts} = require('..')

    test('is of type function', () => {
      equal(typeof getAccounts, 'function')
    })
  })

  test('.getAccount', () => {
    const {getAccount} = require('..')

    test('is of type function', () => {
      equal(typeof getAccount, 'function')
    })
  })

  test('.getAccountHistory', () => {
    const {getAccountHistory} = require('..')

    test('is of type function', () => {
      equal(typeof getAccountHistory, 'function')
    })
  })

  test('.getAccountTransfers', () => {
    const {getAccountTransfers} = require('..')

    test('is of type function', () => {
      equal(typeof getAccountTransfers, 'function')
    })
  })

  test('.getAccountHolds', () => {
    const {getAccountHolds} = require('..')

    test('is of type function', () => {
      equal(typeof getAccountHolds, 'function')
    })
  })

  test('.getOrders', () => {
    const {getOrders} = require('..')

    test('is of type function', () => {
      equal(typeof getOrders, 'function')
    })
  })

  test('.getOrder', () => {
    const {getOrder} = require('..')

    test('is of type function', () => {
      equal(typeof getOrder, 'function')
    })
  })

  test('.getFills', () => {
    const {getFills} = require('..')

    test('is of type function', () => {
      equal(typeof getFills, 'function')
    })
  })

  test('.getFundings', () => {
    const {getFundings} = require('..')

    test('is of type function', () => {
      equal(typeof getFundings, 'function')
    })
  })
})
