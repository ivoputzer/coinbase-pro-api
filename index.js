const querystring = require('querystring')
const client = require('./lib/client')

exports.getProducts = (query = {}, { parse } = JSON, { stringify } = querystring, { request } = client) => request({
  method: 'get',
  path: '/products?' + stringify(query)
}).then(parse)

exports.getProductOrderBook = (productId, query = {}, { parse } = JSON, { stringify } = querystring, { request } = client) => request({
  method: 'get',
  path: '/products/' + productId + '/book?' + stringify(query)
}).then(parse)

exports.getProductTicker = (productId, query = {}, { parse } = JSON, { stringify } = querystring, { request } = client) => request({
  method: 'get',
  path: '/products/' + productId + '/ticker?' + stringify(query)
}).then(parse)

exports.getProductTrades = (productId, query = {}, { parse } = JSON, { stringify } = querystring, { request } = client) => request({
  method: 'get',
  path: '/products/' + productId + '/trades?' + stringify(query)
}).then(parse)

// todo
// the following method could be replaced with a recursive promise implementation
// on exports.getProductTrades that takes care of pagination and rate limits.
exports.getProductTradeStream = Function.prototype

exports.getProductHistoricRates = (productId, query = {}, { parse } = JSON, { stringify } = querystring, { request } = client) => request({
  method: 'get',
  path: '/products/' + productId + '/candles?' + stringify(query)
}).then(parse)

exports.getProduct24HrStats = (productId, query = {}, { parse } = JSON, { stringify } = querystring, { request } = client) => request({
  method: 'get',
  path: '/products/' + productId + '/stats?' + stringify(query)
}).then(parse)

exports.getCurrencies = (query = {}, { parse } = JSON, { stringify } = querystring, { request } = client) => request({
  method: 'get',
  path: '/currencies?' + stringify(query)
}).then(parse)

exports.getTime = (query = {}, { parse } = JSON, { stringify } = querystring, { request } = client) => request({
  method: 'get',
  path: '/time?' + stringify(query)
}).then(parse)

exports.getCoinbaseAccounts = (query = {}, { parse } = JSON, { stringify } = querystring, { request } = client) => request({
  method: 'get',
  path: '/coinbase-accounts?' + stringify(query)
}).then(parse)

exports.getPaymentMethods = (query = {}, { parse } = JSON, { stringify } = querystring, { request } = client) => request({
  method: 'get',
  path: '/payment-methods?' + stringify(query)
}).then(parse)

exports.getAccounts = (query = {}, { parse } = JSON, { stringify } = querystring, { request } = client) => request({
  method: 'get',
  path: '/accounts?' + stringify(query)
}).then(parse)

exports.getAccount = (accountId, query = {}, { parse } = JSON, { stringify } = querystring, { request } = client) => request({
  method: 'get',
  path: '/accounts/' + accountId + '?' + stringify(query)
}).then(parse)

exports.getAccountHistory = (accountId, query = {}, { parse } = JSON, { stringify } = querystring, { request } = client) => request({
  method: 'get',
  path: '/accounts/' + accountId + '/ledger?' + stringify(query)
}).then(parse)

exports.getAccountTransfers = (accountId, query = {}, { parse } = JSON, { stringify } = querystring, { request } = client) => request({
  method: 'get',
  path: '/accounts/' + accountId + '/transfers?' + stringify(query)
}).then(parse)

exports.getAccountHolds = (accountId, query = {}, { parse } = JSON, { stringify } = querystring, { request } = client) => request({
  method: 'get',
  path: '/accounts/' + accountId + '/holds?' + stringify(query)
}).then(parse)

// todo
// the following methods can be replaced by exports.placeOrder for now
exports.buy = Function.prototype
exports.sell = Function.prototype

exports.placeOrder = (data, { parse } = JSON, { stringify } = JSON, { request } = client) => request({
  method: 'post',
  path: '/orders',
  body: stringify(data)
}).then(parse)

exports.cancelOrder = (orderId, { parse } = JSON, { stringify } = JSON, { request } = client) => request({
  method: 'delete',
  path: '/orders/' + orderId
}).then(parse)

exports.cancelOrders = (query = {}, { parse } = JSON, { stringify } = querystring, { request } = client) => request({
  method: 'delete',
  path: '/orders?' + stringify(query)
}).then(parse)

exports.cancelAllOrders = Function.prototype

exports.getOrders = (query = {}, { parse } = JSON, { stringify } = querystring, { request } = client) => request({
  method: 'get',
  path: '/orders?' + stringify(query)
}).then(parse)

exports.getOrder = (orderId, query = {}, { parse } = JSON, { stringify } = querystring, { request } = client) => request({
  method: 'get',
  path: '/orders/' + orderId + '?' + stringify(query)
}).then(parse)

exports.getOrders = (query = {}, { parse } = JSON, { stringify } = querystring, { request } = client) => request({
  method: 'get',
  path: '/orders?' + stringify(query)
}).then(parse)

exports.getFills = (query = {}, { parse } = JSON, { stringify } = querystring, { request } = client) => request({
  method: 'get',
  path: '/fills?' + stringify(query)
}).then(parse)

// exports.repay = Function.prototype
// exports.marginTransfer = Function.prototype
// exports.closePosition = Function.prototype
// exports.convert = Function.prototype

// - [ ] getOrders
// - [ ] getOrder
// - [ ] getFills
// - [ ] getFundings
// - [ ] getTrailingVolume
