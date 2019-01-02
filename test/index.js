const nock = require('nock')

test('coinbase-pro-api', () => {
  const {uuid} = require('m.uuid')
  const {equal, deepEqual} = require('assert')

  test('.getProducts', () => {
    const {getProducts} = require('..')

    test('is of type function', () => {
      equal(typeof getProducts, 'function')
    })

    test('fetches products and parses json response', async () => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/products')
        .query(Object.prototype)
        .reply(200, Array.prototype)

      const response = await getProducts()
      deepEqual(response, Array.prototype)
    })
  })

  test('.getProductOrderBook', () => {
    const {getProductOrderBook} = require('..')

    test('is of type function', () => {
      equal(typeof getProductOrderBook, 'function')
    })

    test('fetches products order book and parses json response', async () => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/products/btc-eur/book')
        .query(Object.prototype)
        .reply(200, Object.prototype)

      const response = await getProductOrderBook('btc-eur')
      deepEqual(response, Object.prototype)
    })
  })

  test('.getProductTicker', () => {
    const {getProductTicker} = require('..')

    test('is of type function', () => {
      equal(typeof getProductTicker, 'function')
    })

    test('fetches products ticker and parses json response', async () => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/products/btc-eur/ticker')
        .query(Object.prototype)
        .reply(200, Object.prototype)

      const response = await getProductTicker('btc-eur')
      deepEqual(response, Object.prototype)
    })
  })

  test('.getProductTrades', () => {
    const {getProductTrades} = require('..')

    test('is of type function', () => {
      equal(typeof getProductTrades, 'function')
    })

    test('fetches products trades and parses json response', async () => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/products/btc-eur/trades')
        .query(Object.prototype)
        .reply(200, Array.prototype)

      const response = await getProductTrades('btc-eur')
      deepEqual(response, Array.prototype)
    })

    // todo: deal with pagination and rate limits when necessary
  })

  test('.getProductTradeStream', () => {
    const {getProductTradeStream} = require('..')

    test('is of type function', () => {
      equal(typeof getProductTradeStream, 'function')
    })

    test.skip('fetches product trades and parses parses json response(s) into readable stream', () => {
      // todo
    })
  })

  test('.getProductHistoricRates', () => {
    const {getProductHistoricRates} = require('..')

    test('is of type function', () => {
      equal(typeof getProductHistoricRates, 'function')
    })

    test('fetches historic product rates and parses json response', async () => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/products/btc-eur/candles')
        .query(Object.prototype)
        .reply(200, Array.prototype)

      const response = await getProductHistoricRates('btc-eur')
      deepEqual(response, Array.prototype)
    })
  })

  test('.getProduct24HrStats', () => {
    const {getProduct24HrStats} = require('..')

    test('is of type function', () => {
      equal(typeof getProduct24HrStats, 'function')
    })

    test('fetches 24hr product stats and parses json response', async () => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/products/btc-eur/stats')
        .query(Object.prototype)
        .reply(200, Object.prototype)

      const response = await getProduct24HrStats('btc-eur')
      deepEqual(response, Object.prototype)
    })
  })

  test('.getCurrencies', () => {
    const {getCurrencies} = require('..')

    test('is of type function', () => {
      equal(typeof getCurrencies, 'function')
    })

    test('fetches currencies and parses json response', async () => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/currencies')
        .query(Object.prototype)
        .reply(200, Array.prototype)

      const response = await getCurrencies()
      deepEqual(response, Array.prototype)
    })
  })

  test('.getTime', () => {
    const {getTime} = require('..')

    test('is of type function', () => {
      equal(typeof getTime, 'function')
    })

    test('fetches time and parses json response', async () => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/time')
        .query(Object.prototype)
        .reply(200, Object.prototype)

      const response = await getTime()
      deepEqual(response, Object.prototype)
    })
  })

  test('.getCoinbaseAccounts', () => {
    const {getCoinbaseAccounts} = require('..')

    test('is of type function', () => {
      equal(typeof getCoinbaseAccounts, 'function')
    })

    test('fetches coinbase accounts and parses json response', async () => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/coinbase-accounts')
        .query(Object.prototype)
        .reply(200, Array.prototype)

      const response = await getCoinbaseAccounts()
      deepEqual(response, Array.prototype)
    })
  })

  test('.getPaymentMethods', () => {
    const {getPaymentMethods} = require('..')

    test('is of type function', () => {
      equal(typeof getPaymentMethods, 'function')
    })

    test('fetches payment methods and parses json response', async () => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/payment-methods')
        .query(Object.prototype)
        .reply(200, Array.prototype)

      const response = await getPaymentMethods()
      deepEqual(response, Array.prototype)
    })
  })

  test('.getAccounts', () => {
    const {getAccounts} = require('..')

    test('is of type function', () => {
      equal(typeof getAccounts, 'function')
    })

    test('fetches accounts and parses json response', async () => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/accounts')
        .query(Object.prototype)
        .reply(200, Array.prototype)

      const response = await getAccounts()
      deepEqual(response, Array.prototype)
    })
  })

  test('.getAccount', () => {
    const {getAccount} = require('..')

    test('is of type function', () => {
      equal(typeof getAccount, 'function')
    })

    test('fetches account and parses json response', async () => {
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

      const response = await getAccount(accountId)
      deepEqual(response, Object.prototype)
    })
  })

  test('.getAccountHistory', () => {
    const {getAccountHistory} = require('..')

    test('is of type function', () => {
      equal(typeof getAccountHistory, 'function')
    })

    test('fetches account history and parses json response', async () => {
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

      const response = await getAccountHistory(accountId)
      deepEqual(response, Array.prototype)
    })
  })

  test('.getAccountTransfers', () => {
    const {getAccountTransfers} = require('..')

    test('is of type function', () => {
      equal(typeof getAccountTransfers, 'function')
    })

    test('fetches account transfers and parses json response', async () => {
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

      const response = await getAccountTransfers(accountId)
      deepEqual(response, Array.prototype)
    })
  })

  test('.getAccountHolds', () => {
    const {getAccountHolds} = require('..')

    test('is of type function', () => {
      equal(typeof getAccountHolds, 'function')
    })

    test('fetches account holds and parses json response', async () => {
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

      const response = await getAccountHolds(accountId)
      deepEqual(response, Array.prototype)
    })
  })

  test('.placeOrder', () => {
    const {placeOrder} = require('..')

    test('is of type function', () => {
      equal(typeof placeOrder, 'function')
    })

    test('places limit buy order and parses json response', async () => {
      const order = {side: 'buy', size: 0.01, price: 0.100, product_id: 'BTC-EUR'}

      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .post('/orders', order)
        .reply(200, Object.prototype)

      const response = await placeOrder(order)
      deepEqual(response, Object.prototype)
    })

    test('places limit sell order and parses json response', async () => {
      const order = {side: 'sell', size: 0.01, price: 0.100, product_id: 'BTC-EUR'}

      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .post('/orders', order)
        .reply(200, Object.prototype)

      const response = await placeOrder(order)
      deepEqual(response, Object.prototype)
    })
  })

  test('.cancelOrder', () => {
    const {cancelOrder} = require('..')

    test('is of type function', () => {
      equal(typeof cancelOrder, 'function')
    })

    test('cancels order and parses json response', async () => {
      const orderId = uuid()

      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .delete('/orders/' + orderId)
        .reply(200, Array.prototype)

      const response = await cancelOrder(orderId)
      deepEqual(response, Array.prototype)
    })
  })

  test('.cancelOrders', () => {
    const {cancelOrders} = require('..')

    test('is of type function', () => {
      equal(typeof cancelOrders, 'function')
    })

    test('cancels open orders and parses json response', async () => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .delete('/orders')
        .query({})
        .reply(200, Array.prototype)

      const response = await cancelOrders()
      deepEqual(response, Array.prototype)
    })
  })

  test('.getOrders', () => {
    const {getOrders} = require('..')

    test('is of type function', () => {
      equal(typeof getOrders, 'function')
    })

    test('fetches orders and parses json response', async () => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/orders')
        .query(Object.prototype)
        .reply(200, Array.prototype)

      const response = await getOrders()
      deepEqual(response, Array.prototype)
    })
  })

  test('.getOrder', () => {
    const {getOrder} = require('..')

    test('is of type function', () => {
      equal(typeof getOrder, 'function')
    })

    test('fetches order and parses json response', async () => {
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

      const response = await getOrder(orderId)
      deepEqual(response, Object.prototype)
    })
  })




  test('.getOrders', () => {
    const {getOrders} = require('..')

    test('is of type function', () => {
      equal(typeof getOrders, 'function')
    })

    test('fetches orders and parses json response', async () => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/orders')
        .query(Object.prototype)
        .reply(200, Array.prototype)

      const response = await getOrders()
      deepEqual(response, Array.prototype)
    })
  })

  test('.getFills', () => {
    const {getFills} = require('..')

    test('is of type function', () => {
      equal(typeof getFills, 'function')
    })

    test('fetches fills and parses json response', async () => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_config_coinbase_pro_api_key)
        .matchHeader('cb-access-passphrase', process.env.npm_config_coinbase_pro_api_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/fills')
        .query(Object.prototype)
        .reply(200, Array.prototype)

      const response = await getFills()
      deepEqual(response, Array.prototype)
    })
  })
})
