coinbase-pro-api
===
Lightweight [Coinbase Pro API](https://docs.pro.coinbase.com) implementation.

[![travis](https://img.shields.io/travis/ivoputzer/coinbase-pro-api.svg?style=for-the-badge)](https://travis-ci.org/ivoputzer/coinbase-pro-api)
[![dependencies](https://img.shields.io/badge/dependencies-none-blue.svg?style=for-the-badge&colorB=44CC11)](package.json)
[![coverage status](https://img.shields.io/coveralls/ivoputzer/coinbase-pro-api.svg?style=for-the-badge)](https://coveralls.io/github/ivoputzer/coinbase-pro-api?branch=master)
[![linter](https://img.shields.io/badge/coding%20style-standard-brightgreen.svg?style=for-the-badge)](http://standardjs.com/)

[![node](https://img.shields.io/badge/node-6%2B-blue.svg?style=for-the-badge)](https://nodejs.org/docs/v6.0.0/api)
[![version](https://img.shields.io/npm/v/coinbase-pro-api.svg?style=for-the-badge&colorB=007EC6)](https://www.npmjs.com/package/coinbase-pro-api)
[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge&colorB=007EC6)](https://spdx.org/licenses/MIT)
[![minzip](https://img.shields.io/bundlephobia/minzip/coinbase-pro-api.svg?style=for-the-badge)](https://bundlephobia.com/scan-results?packages=coinbase-pro-api)
[![downloads](https://img.shields.io/npm/dt/coinbase-pro-api.svg?style=for-the-badge&colorB=007EC6)](https://www.npmjs.com/package/coinbase-pro-api)

## Installation
```sh
npm install coinbase-pro-api
```

## Usage
This library allows you to use both public and private endpoints as well as the [sandbox environment](https://docs.pro.coinbase.com/#sandbox) for testing connectivity and web trading; You can learn about query parameters and responses of each rest endpoint in the [official documentation](https://docs.pro.coinbase.com).

Configurations such as credentials and environments are read following the [npm configuration guideline](https://docs.npmjs.com/files/npmrc.html) and can be set either using an `.npmrc` file or by exporting correct environment vartiables.

## Public Endpoints
Public endpoints do not require authentication and can be used right away without further configuration.

#### .getProducts([query[, parser=JSON[, stringifier=QS]]])
```js
const {getProducts} = require('coinbase-pro-api')
getProducts()
```
[» query params and responses](https://docs.pro.coinbase.com/#get-products)

#### .getProductOrderBook(productId[, query[, parser=JSON[, stringifier=QS]]])
```js
const {getProductOrderBook} = require('coinbase-pro-api')
getProductOrderBook('BTC-EUR', { level: 3 })
```
[» query params and responses](https://docs.pro.coinbase.com/#get-product-order-book)

#### .getProductTicker(productId[, query[, parser=JSON[, stringifier=QS]]])
```js
const {getProductTicker} = require('coinbase-pro-api')
getProductTicker('BTC-EUR')
```
[» query params and responses](https://docs.pro.coinbase.com/#get-product-ticker)

#### .getProductTrades(productId[, query[, parser=JSON[, stringifier=QS]]])
```js
const {getProductTrades} = require('coinbase-pro-api')
getProductTrades('BTC-EUR', { after: 1000 })
```
[» query params and responses](https://docs.pro.coinbase.com/#get-trades)

#### .getProductHistoricRates(productId[, query[, parser=JSON[, stringifier=QS]]])
```js
const {getProductHistoricRates} = require('coinbase-pro-api')
getProductHistoricRates('BTC-EUR', { granularity: 3600 })
```
[» query params and responses](https://docs.pro.coinbase.com/#get-historic-rates)

#### .getProduct24HrStats(productId[, query[, parser=JSON[, stringifier=QS]]])
```js
const {getProduct24HrStats} = require('coinbase-pro-api')
getProduct24HrStats('BTC-EUR')
```
[» query params and responses](https://docs.pro.coinbase.com/#get-24hr-stats)

#### .getCurrencies([query[, parser=JSON[, stringifier=QS]]])
```js
const {getCurrencies} = require('coinbase-pro-api')
getCurrencies()
```
[» query params and responses](https://docs.pro.coinbase.com/#get-currencies)

#### .getTime([query[, parser=JSON[, stringifier=QS]]])
```js
const {getTime} = require('coinbase-pro-api')
getTime()
```
[» query params and responses](https://docs.pro.coinbase.com/#time)

## Private Endpoints
The private endpoints require authentication. You will need to configure your `coinbase-pro-api` installation by providing a valid `.npmrc` configuration as follows:

```ini
coinbase-pro-api:hostname="api.pro.coinbase.com"
coinbase-pro-api:key="replace with api key"
coinbase-pro-api:passphrase="replace with api passphrase"
coinbase-pro-api:secret="replace with api secret"
```

The same result can be obtained by setting the following environment variables:
- `npm_config_coinbase_pro_api_hostname`
- `npm_config_coinbase_pro_api_key`
- `npm_config_coinbase_pro_api_passphrase`
- `npm_config_coinbase_pro_api_secret`

#### .getCoinbaseAccounts([query[, parser=JSON[, stringifier=QS]]])
```js
const {getCoinbaseAccounts} = require('coinbase-pro-api')
getCoinbaseAccounts()
```
[» query params and responses](https://docs.pro.coinbase.com/#coinbase-accounts)

#### .getPaymentMethods([query[, parser=JSON[, stringifier=QS]]])
```js
const {getPaymentMethods} = require('coinbase-pro-api')
getPaymentMethods()
```
[» query params and responses](https://docs.pro.coinbase.com/#payment-methods)

#### .getAccounts([query[, parser=JSON[, stringifier=QS]]])
```js
const {getAccounts} = require('coinbase-pro-api')
getAccounts()
```
[» query params and responses](https://docs.pro.coinbase.com/#list-accounts)

#### .getAccount(accountId[, query[, parser=JSON[, stringifier=QS]]])
```js
const {getAccount} = require('coinbase-pro-api')
getAccount('7d0f7d8e-dd34-4d9c-a846-06f431c381ba')
```
[» query params and responses](https://docs.pro.coinbase.com/#get-an-account)

#### .getAccountHistory(accountId[, query[, parser=JSON[, stringifier=QS]]])
```js
const {getAccountHistory} = require('coinbase-pro-api')
getAccountHistory('7d0f7d8e-dd34-4d9c-a846-06f431c381ba', { before: 3000 })
```
[» query params and responses](https://docs.pro.coinbase.com/#get-account-history)

#### .getAccountTransfers(accountId[, query[, parser=JSON[, stringifier=QS]]])
```js
const {getAccountTransfers} = require('coinbase-pro-api')
getAccountTransfers('7d0f7d8e-dd34-4d9c-a846-06f431c381ba', { before: 3000 })
```
[» query params and responses](https://docs.pro.coinbase.com/#get-account-transfers)

#### .getAccountHolds(accountId[, query[, parser=JSON[, stringifier=QS]]])
```js
const {getAccountHolds} = require('coinbase-pro-api')
getAccountHolds('7d0f7d8e-dd34-4d9c-a846-06f431c381ba', { before: 3000 })
```
[» query params and responses](https://docs.pro.coinbase.com/#get-holds)

#### .placeOrder(data[, parser=JSON[, stringifier=JSON]])
```js
const {placeOrder} = require('coinbase-pro-api')

// Buy 1 LTC @ 20 EUR
placeOrder({ side: 'buy', size: '1', price: '20.00', product_id: 'LTC-EUR' })

// Sell 1 LTC @ 20 EUR
placeOrder({ side: 'sell', size: '1', price: '20.00', product_id: 'LTC-EUR' })
```
[» query params and responses](https://docs.pro.coinbase.com/#place-a-new-order)

#### .cancelOrder(orderId[, query[, parser=JSON[, stringifier=QS]]])
```js
const {cancelOrder} = require('coinbase-pro-api')
cancelOrder('d50ec984-77a8-460a-b958-66f114b0de9b')
```
[» query params and responses](https://docs.pro.coinbase.com/#cancel-an-order)

#### .cancelOrders([query[, parser=JSON[, stringifier=QS]]])
```js
const {cancelOrders} = require('coinbase-pro-api')
cancelOrders()
```
[» query params and responses](https://docs.pro.coinbase.com/#cancel-all)

#### .getOrders([query[, parser=JSON[, stringifier=QS]]])
```js
const {getOrders} = require('coinbase-pro-api')
getOrders({ after: 3000, status: 'open' })
```
[» query params and responses](https://docs.pro.coinbase.com/#list-open-orders)

#### .getOrder(orderId[, query[, parser=JSON[, stringifier=QS]]])
```js
const {getOrder} = require('coinbase-pro-api')
getOrder('d50ec984-77a8-460a-b958-66f114b0de9b')
```
[» query params and responses](https://docs.pro.coinbase.com/#get-an-order)

#### .getFills([query[, parser=JSON[, stringifier=QS]]])
```js
const {getFills} = require('coinbase-pro-api')
getFills({ product_id: 'LTC-EUR', before: 3000 })
```
[» query params and responses](https://docs.pro.coinbase.com/#list-fills)

#### .convert([query[, parser=JSON[, stringifier=QS]]])
```js
const {convert} = require('coinbase-pro-api')
convert({from: 'USD', to: 'USDC', amount: '100' })
```
[» query params and responses](https://docs.pro.coinbase.com/#create-conversion)

## Donations
If you find value in what I do then feel free to make a donation, it will be really appreciated! Maintaining projects isn't effortless nor free and if you'd like to kick in and help me cover those expenses, that would be awesome. If you don't, no problem; You can use my software completely free of charge and without limitation for any purpose you want ;)

- **BTC** `3BNL7UnYmByrdEguoEnA7S95WzdDYLmKuS`
- **LTC** `MEgxjro7E6z8Mfy4Uy8xaJPrskdwmrCers`
- **BCH** `qrtl83z594m7g4nv390xdg5mg7tywuwq5vzlsa82dp`
- **ETH** `0xeED2C60dd83e77F5650962E653b2a6F26A5c2f26`
- **ETC** `0x5B4224b376C0a32B70B0e25F6aEeCfc2d0131703`
- **ZRX** `0x345df25C52B81E045Bfb3C21b15343c4D114e43e`
- **BAT** `0xB23Bb1933bDF676502426AdcA2D7B3E0Ed18AfDF`
- **ZEC** `t1h78dUWEY9hA2UZVyNazbgAfZNmicEK6qA`
- **USDC** `0x7fb93FfBcFa9A537ddFaC9678b1C27DF776eE626`
