const nock = require('nock')

test('coinbase-pro-api', () => {
  const {uuid} = require('m.uuid')
  const {equal, deepEqual} = require('assert')

  test('.getProducts', () => {
    const {getProducts} = require('..')

    test('is of type function', () => {
      equal(typeof getProducts, 'function')
    })

    test('fetches products and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/products')
        .query(Object.prototype)
        .reply(200, Array.prototype)

      getProducts()
        .then(res => deepEqual(res, Array.prototype))
        .then(done)
    })
  })

  test('.getProductOrderBook', () => {
    const {getProductOrderBook} = require('..')

    test('is of type function', () => {
      equal(typeof getProductOrderBook, 'function')
    })

    test('fetches products order book and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/products/btc-eur/book')
        .query(Object.prototype)
        .reply(200, Object.prototype)

      getProductOrderBook('btc-eur')
        .then(res => deepEqual(res, Object.prototype))
        .then(done)
    })
  })

  test('.getProductTicker', () => {
    const {getProductTicker} = require('..')

    test('is of type function', () => {
      equal(typeof getProductTicker, 'function')
    })

    test('fetches products ticker and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/products/btc-eur/ticker')
        .query(Object.prototype)
        .reply(200, Object.prototype)

      getProductTicker('btc-eur')
        .then(res => deepEqual(res, Object.prototype))
        .then(done)
    })
  })

  test('.getProductTrades', () => {
    const {getProductTrades} = require('..')

    test('is of type function', () => {
      equal(typeof getProductTrades, 'function')
    })

    test('fetches products trades and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/products/btc-eur/trades')
        .query(Object.prototype)
        .reply(200, Array.prototype)

      getProductTrades('btc-eur')
        .then(res => deepEqual(res, Array.prototype))
        .then(done)
    })

    test('handles automatic pagination', Function.prototype)

    test('handles rate limits for multiple requests', Function.prototype)
  })

  test('.getProductTradeStream', () => {
    const {getProductTradeStream} = require('..')

    test('is of type function', () => {
      equal(typeof getProductTradeStream, 'function')
    })

    test('fetches product trades and parses parses json response(s) into readable stream', Function.prototype)
  })

  test('.getProductHistoricRates', () => {
    const {getProductHistoricRates} = require('..')

    test('is of type function', () => {
      equal(typeof getProductHistoricRates, 'function')
    })

    test('fetches historic product rates and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/products/btc-eur/candles')
        .query(Object.prototype)
        .reply(200, Array.prototype)

      getProductHistoricRates('btc-eur')
        .then(res => deepEqual(res, Array.prototype))
        .then(done)
    })
  })

  test('.getProduct24HrStats', () => {
    const {getProduct24HrStats} = require('..')

    test('is of type function', () => {
      equal(typeof getProduct24HrStats, 'function')
    })

    test('fetches 24hr product stats and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/products/btc-eur/stats')
        .query(Object.prototype)
        .reply(200, Object.prototype)

      getProduct24HrStats('btc-eur')
        .then(res => deepEqual(res, Object.prototype))
        .then(done)
    })
  })

  test('.getCurrencies', () => {
    const {getCurrencies} = require('..')

    test('is of type function', () => {
      equal(typeof getCurrencies, 'function')
    })

    test('fetches currencies and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/currencies')
        .query(Object.prototype)
        .reply(200, Array.prototype)

      getCurrencies()
        .then(res => deepEqual(res, Array.prototype))
        .then(done)
    })
  })

  test('.getTime', () => {
    const {getTime} = require('..')

    test('is of type function', () => {
      equal(typeof getTime, 'function')
    })

    test('fetches time and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/time')
        .query(Object.prototype)
        .reply(200, Object.prototype)

      getTime()
        .then(res => deepEqual(res, Object.prototype))
        .then(done)
    })
  })

  test('.getCoinbaseAccounts', () => {
    const {getCoinbaseAccounts} = require('..')

    test('is of type function', () => {
      equal(typeof getCoinbaseAccounts, 'function')
    })

    test('fetches coinbase accounts and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/coinbase-accounts')
        .query(Object.prototype)
        .reply(200, Array.prototype)

      getCoinbaseAccounts()
        .then(res => deepEqual(res, Array.prototype))
        .then(done)
    })
  })

  test('.getPaymentMethods', () => {
    const {getPaymentMethods} = require('..')

    test('is of type function', () => {
      equal(typeof getPaymentMethods, 'function')
    })

    test('fetches payment methods and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/payment-methods')
        .query(Object.prototype)
        .reply(200, Array.prototype)

      getPaymentMethods()
        .then(res => deepEqual(res, Array.prototype))
        .then(done)
    })
  })

  test('.getAccounts', () => {
    const {getAccounts} = require('..')

    test('is of type function', () => {
      equal(typeof getAccounts, 'function')
    })

    test('fetches accounts and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/accounts')
        .query(Object.prototype)
        .reply(200, Array.prototype)

      getAccounts()
        .then(res => deepEqual(res, Array.prototype))
        .then(done)
    })
  })

  test('.getAccount', () => {
    const {getAccount} = require('..')

    test('is of type function', () => {
      equal(typeof getAccount, 'function')
    })

    test('fetches account and parses json response', (done) => {
      const accountId = uuid()

      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/accounts/' + accountId)
        .query(Object.prototype)
        .reply(200, Object.prototype)

      getAccount(accountId)
        .then(res => deepEqual(res, Object.prototype))
        .then(done)
    })
  })

  test('.getAccountHistory', () => {
    const {getAccountHistory} = require('..')

    test('is of type function', () => {
      equal(typeof getAccountHistory, 'function')
    })

    test('fetches account history and parses json response', (done) => {
      const accountId = uuid()

      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/accounts/' + accountId + '/ledger')
        .query(Object.prototype)
        .reply(200, Array.prototype)

      getAccountHistory(accountId)
        .then(res => deepEqual(res, Array.prototype))
        .then(done)
    })
  })

  test('.getAccountTransfers', () => {
    const {getAccountTransfers} = require('..')

    test('is of type function', () => {
      equal(typeof getAccountTransfers, 'function')
    })

    test('fetches account transfers and parses json response', (done) => {
      const accountId = uuid()

      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/accounts/' + accountId + '/transfers')
        .query(Object.prototype)
        .reply(200, Array.prototype)

      getAccountTransfers(accountId)
        .then(res => deepEqual(res, Array.prototype))
        .then(done)
    })
  })

  test('.getAccountHolds', () => {
    const {getAccountHolds} = require('..')

    test('is of type function', () => {
      equal(typeof getAccountHolds, 'function')
    })

    test('fetches account holds and parses json response', (done) => {
      const accountId = uuid()

      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/accounts/' + accountId + '/holds')
        .query(Object.prototype)
        .reply(200, Array.prototype)

      getAccountHolds(accountId)
        .then(res => deepEqual(res, Array.prototype))
        .then(done)
    })
  })

  test('.placeOrder', () => {
    const {placeOrder} = require('..')

    test('is of type function', () => {
      equal(typeof placeOrder, 'function')
    })

    test('places limit buy order and parses json response', (done) => {
      const order = {side: 'buy', size: 0.01, price: 0.100, product_id: 'BTC-EUR'}

      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .post('/orders', order)
        .reply(200, Object.prototype)

      placeOrder(order)
        .then(res => deepEqual(res, Object.prototype))
        .then(done)
    })

    test('places limit sell order and parses json response', (done) => {
      const order = {side: 'sell', size: 0.01, price: 0.100, product_id: 'BTC-EUR'}

      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .post('/orders', order)
        .reply(200, Object.prototype)

      placeOrder(order)
        .then(res => deepEqual(res, Object.prototype))
        .then(done)
    })
  })

  test('.cancelOrder', () => {
    const {cancelOrder} = require('..')

    test('is of type function', () => {
      equal(typeof cancelOrder, 'function')
    })

    test('cancels order and parses json response', (done) => {
      const orderId = uuid()

      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .delete('/orders/' + orderId)
        .reply(200, Array.prototype)

      cancelOrder(orderId)
        .then(res => deepEqual(res, Array.prototype))
        .then(done)
    })
  })

  test('.cancelOrders', () => {
    const {cancelOrders} = require('..')

    test('is of type function', () => {
      equal(typeof cancelOrders, 'function')
    })

    test('cancels open orders and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .delete('/orders')
        .query({})
        .reply(200, Array.prototype)

      cancelOrders()
        .then(res => deepEqual(res, Array.prototype))
        .then(done)
    })
  })

  test('.getOrders', () => {
    const {getOrders} = require('..')

    test('is of type function', () => {
      equal(typeof getOrders, 'function')
    })

    test('fetches orders and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/orders')
        .query(Object.prototype)
        .reply(200, Array.prototype)

      getOrders()
        .then(res => deepEqual(res, Array.prototype))
        .then(done)
    })
  })

  test('.getOrder', () => {
    const {getOrder} = require('..')

    test('is of type function', () => {
      equal(typeof getOrder, 'function')
    })

    test('fetches order and parses json response', (done) => {
      const orderId = uuid()

      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/orders/' + orderId)
        .query(Object.prototype)
        .reply(200, Object.prototype)

      getOrder(orderId)
        .then(res => deepEqual(res, Object.prototype))
        .then(done)
    })
  })

  test('.getOrders', () => {
    const {getOrders} = require('..')

    test('is of type function', () => {
      equal(typeof getOrders, 'function')
    })

    test('fetches orders and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/orders')
        .query(Object.prototype)
        .reply(200, Array.prototype)

      getOrders()
        .then(res => deepEqual(res, Array.prototype))
        .then(done)
    })
  })

  test('.getFills', () => {
    const {getFills} = require('..')

    test('is of type function', () => {
      equal(typeof getFills, 'function')
    })

    test('fetches fills and parses json response', (done) => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/fills')
        .query(Object.prototype)
        .reply(200, Array.prototype)

      getFills()
        .then(res => deepEqual(res, Array.prototype))
        .then(done)
    })
  })
})
