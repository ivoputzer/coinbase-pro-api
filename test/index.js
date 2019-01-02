const nock = require('nock')

test('coinbase-pro-api', () => {
  const { uuid } = require('m.uuid')
  const { strictEqual, deepStrictEqual } = require('assert')

  test('.getProducts', () => {
    const { getProducts } = require('..')

    test('is of type function', () => {
      strictEqual(typeof getProducts, 'function')
    })

    test('fetches products and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/products')
        .query({})
        .reply(200, [])

      getProducts()
        .then(res => deepStrictEqual(res, []))
        .then(done)
        .catch(done)
    })
  })

  test('.getProductOrderBook', () => {
    const { getProductOrderBook } = require('..')

    test('is of type function', () => {
      strictEqual(typeof getProductOrderBook, 'function')
    })

    test('fetches products order book and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/products/btc-eur/book')
        .query({})
        .reply(200, {})

      getProductOrderBook('btc-eur')
        .then(res => deepStrictEqual(res, {}))
        .then(done)
        .catch(done)
    })
  })

  test('.getProductTicker', () => {
    const { getProductTicker } = require('..')

    test('is of type function', () => {
      strictEqual(typeof getProductTicker, 'function')
    })

    test('fetches products ticker and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/products/btc-eur/ticker')
        .query({})
        .reply(200, {})

      getProductTicker('btc-eur')
        .then(res => deepStrictEqual(res, {}))
        .then(done)
        .catch(done)
    })
  })

  test('.getProductTrades', () => {
    const { getProductTrades } = require('..')

    test('is of type function', () => {
      strictEqual(typeof getProductTrades, 'function')
    })

    test('fetches products trades and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/products/btc-eur/trades')
        .query({})
        .reply(200, [])

      getProductTrades('btc-eur')
        .then(res => deepStrictEqual(res, []))
        .then(done)
        .catch(done)
    })

    test('handles automatic pagination', Function.prototype)

    test('handles rate limits for multiple requests', Function.prototype)
  })

  test('.getProductTradeStream', () => {
    const { getProductTradeStream } = require('..')

    test('is of type function', () => {
      strictEqual(typeof getProductTradeStream, 'function')
    })

    test('fetches product trades and parses parses json response(s) into readable stream', Function.prototype)
  })

  test('.getProductHistoricRates', () => {
    const { getProductHistoricRates } = require('..')

    test('is of type function', () => {
      strictEqual(typeof getProductHistoricRates, 'function')
    })

    test('fetches historic product rates and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/products/btc-eur/candles')
        .query({})
        .reply(200, [])

      getProductHistoricRates('btc-eur')
        .then(res => deepStrictEqual(res, []))
        .then(done)
        .catch(done)
    })
  })

  test('.getProduct24HrStats', () => {
    const { getProduct24HrStats } = require('..')

    test('is of type function', () => {
      strictEqual(typeof getProduct24HrStats, 'function')
    })

    test('fetches 24hr product stats and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/products/btc-eur/stats')
        .query({})
        .reply(200, {})

      getProduct24HrStats('btc-eur')
        .then(res => deepStrictEqual(res, {}))
        .then(done)
        .catch(done)
    })
  })

  test('.getCurrencies', () => {
    const { getCurrencies } = require('..')

    test('is of type function', () => {
      strictEqual(typeof getCurrencies, 'function')
    })

    test('fetches currencies and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/currencies')
        .query({})
        .reply(200, [])

      getCurrencies()
        .then(res => deepStrictEqual(res, []))
        .then(done)
        .catch(done)
    })
  })

  test('.getTime', () => {
    const { getTime } = require('..')

    test('is of type function', () => {
      strictEqual(typeof getTime, 'function')
    })

    test('fetches time and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/time')
        .query({})
        .reply(200, {})

      getTime()
        .then(res => deepStrictEqual(res, {}))
        .then(done)
        .catch(done)
    })
  })

  test('.getCoinbaseAccounts', () => {
    const { getCoinbaseAccounts } = require('..')

    test('is of type function', () => {
      strictEqual(typeof getCoinbaseAccounts, 'function')
    })

    test('fetches coinbase accounts and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', /.*/)
        .matchHeader('cb-access-passphrase', /.*/)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/coinbase-accounts')
        .query({})
        .reply(200, [])

      getCoinbaseAccounts()
        .then(res => deepStrictEqual(res, []))
        .then(done)
        .catch(done)
    })
  })

  test('.getPaymentMethods', () => {
    const { getPaymentMethods } = require('..')

    test('is of type function', () => {
      strictEqual(typeof getPaymentMethods, 'function')
    })

    test('fetches payment methods and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', /.*/)
        .matchHeader('cb-access-passphrase', /.*/)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/payment-methods')
        .query({})
        .reply(200, [])

      getPaymentMethods()
        .then(res => deepStrictEqual(res, []))
        .then(done)
        .catch(done)
    })
  })

  test('.getAccounts', () => {
    const { getAccounts } = require('..')

    test('is of type function', () => {
      strictEqual(typeof getAccounts, 'function')
    })

    test('fetches accounts and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', /.*/)
        .matchHeader('cb-access-passphrase', /.*/)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/accounts')
        .query({})
        .reply(200, [])

      getAccounts()
        .then(res => deepStrictEqual(res, []))
        .then(done)
        .catch(done)
    })
  })

  test('.getAccount', () => {
    const { getAccount } = require('..')

    test('is of type function', () => {
      strictEqual(typeof getAccount, 'function')
    })

    test('fetches account and parses json response', (done) => {
      const accountId = uuid()

      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', /.*/)
        .matchHeader('cb-access-passphrase', /.*/)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/accounts/' + accountId)
        .query({})
        .reply(200, {})

      getAccount(accountId)
        .then(res => deepStrictEqual(res, {}))
        .then(done)
        .catch(done)
    })
  })

  test('.getAccountHistory', () => {
    const { getAccountHistory } = require('..')

    test('is of type function', () => {
      strictEqual(typeof getAccountHistory, 'function')
    })

    test('fetches account history and parses json response', (done) => {
      const accountId = uuid()

      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', /.*/)
        .matchHeader('cb-access-passphrase', /.*/)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/accounts/' + accountId + '/ledger')
        .query({})
        .reply(200, [])

      getAccountHistory(accountId)
        .then(res => deepStrictEqual(res, []))
        .then(done)
        .catch(done)
    })
  })

  test('.getAccountTransfers', () => {
    const { getAccountTransfers } = require('..')

    test('is of type function', () => {
      strictEqual(typeof getAccountTransfers, 'function')
    })

    test('fetches account transfers and parses json response', (done) => {
      const accountId = uuid()

      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', /.*/)
        .matchHeader('cb-access-passphrase', /.*/)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/accounts/' + accountId + '/transfers')
        .query({})
        .reply(200, [])

      getAccountTransfers(accountId)
        .then(res => deepStrictEqual(res, []))
        .then(done)
        .catch(done)
    })
  })

  test('.getAccountHolds', () => {
    const { getAccountHolds } = require('..')

    test('is of type function', () => {
      strictEqual(typeof getAccountHolds, 'function')
    })

    test('fetches account holds and parses json response', (done) => {
      const accountId = uuid()

      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', /.*/)
        .matchHeader('cb-access-passphrase', /.*/)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/accounts/' + accountId + '/holds')
        .query({})
        .reply(200, [])

      getAccountHolds(accountId)
        .then(res => deepStrictEqual(res, []))
        .then(done)
        .catch(done)
    })
  })

  test('.placeOrder', () => {
    const { placeOrder } = require('..')

    test('is of type function', () => {
      strictEqual(typeof placeOrder, 'function')
    })

    test('places limit buy order and parses json response', (done) => {
      const order = { side: 'buy', size: 0.01, price: 0.100, product_id: 'BTC-EUR' }

      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', /.*/)
        .matchHeader('cb-access-passphrase', /.*/)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .post('/orders', order)
        .reply(200, {})

      placeOrder(order)
        .then(res => deepStrictEqual(res, {}))
        .then(done)
        .catch(done)
    })

    test('places limit sell order and parses json response', (done) => {
      const order = { side: 'sell', size: 0.01, price: 0.100, product_id: 'BTC-EUR' }

      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', /.*/)
        .matchHeader('cb-access-passphrase', /.*/)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .post('/orders', order)
        .reply(200, {})

      placeOrder(order)
        .then(res => deepStrictEqual(res, {}))
        .then(done)
        .catch(done)
    })
  })

  test('.cancelOrder', () => {
    const { cancelOrder } = require('..')

    test('is of type function', () => {
      strictEqual(typeof cancelOrder, 'function')
    })

    test('cancels order and parses json response', (done) => {
      const orderId = uuid()

      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', /.*/)
        .matchHeader('cb-access-passphrase', /.*/)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .delete('/orders/' + orderId)
        .reply(200, [])

      cancelOrder(orderId)
        .then(res => deepStrictEqual(res, []))
        .then(done)
        .catch(done)
    })
  })

  test('.cancelOrders', () => {
    const { cancelOrders } = require('..')

    test('is of type function', () => {
      strictEqual(typeof cancelOrders, 'function')
    })

    test('cancels open orders and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', /.*/)
        .matchHeader('cb-access-passphrase', /.*/)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .delete('/orders')
        .query({})
        .reply(200, [])

      cancelOrders()
        .then(res => deepStrictEqual(res, []))
        .then(done)
        .catch(done)
    })
  })

  test('.getOrders', () => {
    const { getOrders } = require('..')

    test('is of type function', () => {
      strictEqual(typeof getOrders, 'function')
    })

    test('fetches orders and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', /.*/)
        .matchHeader('cb-access-passphrase', /.*/)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/orders')
        .query({})
        .reply(200, [])

      getOrders()
        .then(res => deepStrictEqual(res, []))
        .then(done)
        .catch(done)
    })
  })

  test('.getOrder', () => {
    const { getOrder } = require('..')

    test('is of type function', () => {
      strictEqual(typeof getOrder, 'function')
    })

    test('fetches order and parses json response', (done) => {
      const orderId = uuid()

      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', /.*/)
        .matchHeader('cb-access-passphrase', /.*/)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/orders/' + orderId)
        .query({})
        .reply(200, {})

      getOrder(orderId)
        .then(res => deepStrictEqual(res, {}))
        .then(done)
        .catch(done)
    })
  })

  test('.getOrders', () => {
    const { getOrders } = require('..')

    test('is of type function', () => {
      strictEqual(typeof getOrders, 'function')
    })

    test('fetches orders and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', /.*/)
        .matchHeader('cb-access-passphrase', /.*/)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/orders')
        .query({})
        .reply(200, [])

      getOrders()
        .then(res => deepStrictEqual(res, []))
        .then(done)
        .catch(done)
    })
  })

  test('.getFills', () => {
    const { getFills } = require('..')

    test('is of type function', () => {
      strictEqual(typeof getFills, 'function')
    })

    test('fetches fills and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', /.*/)
        .matchHeader('cb-access-passphrase', /.*/)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/fills')
        .query({})
        .reply(200, [])

      getFills()
        .then(res => deepStrictEqual(res, []))
        .then(done)
        .catch(done)
    })
  })
})
