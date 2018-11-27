const nock = require('nock')

test('coinbase-pro', () => {
  const {equal, fail, deepEqual} = require('assert')

  test('.getProducts', () => {
    const {getProducts} = require('..')

    test('is of type function', () => {
      equal(typeof getProducts, 'function')
    })

    test('fetches products and parses json response', async () => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .get('/products')
        .query({})
        .reply(200, [])

      try {
        const response = await getProducts()
        deepEqual(response, [])
      } catch (err) {
        fail(err)
      }
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
        .query({})
        .reply(200, {})

      const response = await getProductOrderBook('btc-eur')
      deepEqual(response, {})
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
        .query({})
        .reply(200, {})

      const response = await getProductTicker('btc-eur')
      deepEqual(response, {})
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
        .query({})
        .reply(200, {})

      const response = await getProductTrades('btc-eur')
      deepEqual(response, {})
    })
  })

  test.skip('.getProductTradeStream', () => {
    const {getProductTradeStream} = require('..')

    test('is of type function', () => {
      equal(typeof getProductTradeStream, 'function')
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
        .query({})
        .reply(200, {})

      const response = await getProductHistoricRates('btc-eur')
      deepEqual(response, {})
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
        .query({})
        .reply(200, {})

      const response = await getProduct24HrStats('btc-eur')
      deepEqual(response, {})
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
        .query({})
        .reply(200, {})

      const response = await getCurrencies()
      deepEqual(response, {})
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
        .query({})
        .reply(200, {})

      const response = await getTime()
      deepEqual(response, {})
    })
  })

  test('.getCoinbaseAccounts', () => {
    const {getCoinbaseAccounts} = require('..')

    test('is of type function', () => {
      equal(typeof getCoinbaseAccounts, 'function')
    })

    test('fetches time and parses json response', async () => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_package_config_coinbase_pro_key)
        .matchHeader('cb-access-passphrase', process.env.npm_package_config_coinbase_pro_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/coinbase-accounts')
        .query({})
        .reply(200, {})

      const response = await getCoinbaseAccounts()
      deepEqual(response, {})
    })
  })

  test('.getPaymentMethods', () => {
    const {getPaymentMethods} = require('..')

    test('is of type function', () => {
      equal(typeof getPaymentMethods, 'function')
    })

    test('fetches time and parses json response', async () => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_package_config_coinbase_pro_key)
        .matchHeader('cb-access-passphrase', process.env.npm_package_config_coinbase_pro_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/payment-methods')
        .query({})
        .reply(200, [])

      const response = await getPaymentMethods()
      deepEqual(response, [])
    })
  })

  test('.getAccounts', () => {
    const {getAccounts} = require('..')

    test('is of type function', () => {
      equal(typeof getAccounts, 'function')
    })

    test('fetches time and parses json response', async () => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_package_config_coinbase_pro_key)
        .matchHeader('cb-access-passphrase', process.env.npm_package_config_coinbase_pro_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/accounts')
        .query({})
        .reply(200, [])

      const response = await getAccounts()
      deepEqual(response, [])
    })
  })

  test('.getAccount', () => {
    const {getAccount} = require('..')

    test('is of type function', () => {
      equal(typeof getAccount, 'function')
    })

    test('fetches time and parses json response', async () => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_package_config_coinbase_pro_key)
        .matchHeader('cb-access-passphrase', process.env.npm_package_config_coinbase_pro_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/accounts/1')
        .query({})
        .reply(200, {})

      const response = await getAccount(1)
      deepEqual(response, {})
    })
  })

  test('.getAccountHistory', () => {
    const {getAccountHistory} = require('..')

    test('is of type function', () => {
      equal(typeof getAccountHistory, 'function')
    })

    test('fetches time and parses json response', async () => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_package_config_coinbase_pro_key)
        .matchHeader('cb-access-passphrase', process.env.npm_package_config_coinbase_pro_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/accounts/1/ledger')
        .query({})
        .reply(200, [])

      const response = await getAccountHistory(1)
      deepEqual(response, [])
    })
  })

  test('.getAccountTransfers', () => {
    const {getAccountTransfers} = require('..')

    test('is of type function', () => {
      equal(typeof getAccountTransfers, 'function')
    })

    test('fetches time and parses json response', async () => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_package_config_coinbase_pro_key)
        .matchHeader('cb-access-passphrase', process.env.npm_package_config_coinbase_pro_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/accounts/1/transfers')
        .query({})
        .reply(200, [])

      const response = await getAccountTransfers(1)
      deepEqual(response, [])
    })
  })

  test('.getAccountHolds', () => {
    const {getAccountHolds} = require('..')

    test('is of type function', () => {
      equal(typeof getAccountHolds, 'function')
    })

    test('fetches time and parses json response', async () => {
      nock('https://api.pro.coinbase.com')
        .matchHeader('user-agent', /.*/)
        .matchHeader('cb-access-key', process.env.npm_package_config_coinbase_pro_key)
        .matchHeader('cb-access-passphrase', process.env.npm_package_config_coinbase_pro_passphrase)
        .matchHeader('cb-access-sign', /.{44}/)
        .matchHeader('cb-access-timestamp', /\d{10}\..*/)
        .get('/accounts/1/holds')
        .query({})
        .reply(200, [])

      const response = await getAccountHolds(1)
      deepEqual(response, [])
    })
  })

})
