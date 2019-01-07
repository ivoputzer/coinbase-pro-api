const querystring = require('querystring')
const client = require('./client')

exports.getProducts = (query = {}, { parse } = JSON, { stringify } = querystring, { env } = process, { toString, request } = client) => request({
  method: 'get',
  path: '/products?' + stringify(query)
}, env).then(toString).then(parse)

exports.getProductOrderBook = (productId, query = {}, { parse } = JSON, { stringify } = querystring, { env } = process, { toString, request } = client) => request({
  method: 'get',
  path: '/products/' + productId + '/book?' + stringify(query)
}, env).then(toString).then(parse)

exports.getProductTicker = (productId, query = {}, { parse } = JSON, { stringify } = querystring, { env } = process, { toString, request } = client) => request({
  method: 'get',
  path: '/products/' + productId + '/ticker?' + stringify(query)
}, env).then(toString).then(parse)

exports.getProductTrades = (productId, query = {}, { parse } = JSON, { stringify } = querystring, { env } = process, { toString, request } = client) => request({
  method: 'get',
  path: '/products/' + productId + '/trades?' + stringify(query)
}, env).then(toString).then(parse)

exports.getProductHistoricRates = (productId, query = {}, { parse } = JSON, { stringify } = querystring, { env } = process, { toString, request } = client) => request({
  method: 'get',
  path: '/products/' + productId + '/candles?' + stringify(query)
}, env).then(toString).then(parse)

exports.getProduct24HrStats = (productId, query = {}, { parse } = JSON, { stringify } = querystring, { env } = process, { toString, request } = client) => request({
  method: 'get',
  path: '/products/' + productId + '/stats?' + stringify(query)
}, env).then(toString).then(parse)

exports.getCurrencies = (query = {}, { parse } = JSON, { stringify } = querystring, { env } = process, { toString, request } = client) => request({
  method: 'get',
  path: '/currencies?' + stringify(query)
}, env).then(toString).then(parse)

exports.getTime = (query = {}, { parse } = JSON, { stringify } = querystring, { env } = process, { toString, request } = client) => request({
  method: 'get',
  path: '/time?' + stringify(query)
}, env).then(toString).then(parse)

exports.getCoinbaseAccounts = (query = {}, { parse } = JSON, { stringify } = querystring, { env } = process, { toString, request } = client) => request({
  method: 'get',
  path: '/coinbase-accounts?' + stringify(query)
}, env).then(toString).then(parse)

exports.getPaymentMethods = (query = {}, { parse } = JSON, { stringify } = querystring, { env } = process, { toString, request } = client) => request({
  method: 'get',
  path: '/payment-methods?' + stringify(query)
}, env).then(toString).then(parse)

exports.getAccounts = (query = {}, { parse } = JSON, { stringify } = querystring, { env } = process, { toString, request } = client) => request({
  method: 'get',
  path: '/accounts?' + stringify(query)
}, env).then(toString).then(parse)

exports.getAccount = (accountId, query = {}, { parse } = JSON, { stringify } = querystring, { env } = process, { toString, request } = client) => request({
  method: 'get',
  path: '/accounts/' + accountId + '?' + stringify(query)
}, env).then(toString).then(parse)

exports.getAccountHistory = (accountId, query = {}, { parse } = JSON, { stringify } = querystring, { env } = process, { toString, request } = client) => request({
  method: 'get',
  path: '/accounts/' + accountId + '/ledger?' + stringify(query)
}, env).then(toString).then(parse)

exports.getAccountTransfers = (accountId, query = {}, { parse } = JSON, { stringify } = querystring, { env } = process, { toString, request } = client) => request({
  method: 'get',
  path: '/accounts/' + accountId + '/transfers?' + stringify(query)
}, env).then(toString).then(parse)

exports.getAccountHolds = (accountId, query = {}, { parse } = JSON, { stringify } = querystring, { env } = process, { toString, request } = client) => request({
  method: 'get',
  path: '/accounts/' + accountId + '/holds?' + stringify(query)
}, env).then(toString).then(parse)

exports.placeOrder = (data, { parse } = JSON, { stringify } = JSON, { env } = process, { toString, request } = client) => request({
  method: 'post',
  path: '/orders',
  body: stringify(data)
}, env).then(toString).then(parse)

exports.cancelOrder = (orderId, query = {}, { parse } = JSON, { stringify } = querystring, { env } = process, { toString, request } = client) => request({
  method: 'delete',
  path: '/orders/' + orderId + '?' + stringify(query)
}, env).then(toString).then(parse)

exports.cancelOrders = (query = {}, { parse } = JSON, { stringify } = querystring, { env } = process, { toString, request } = client) => request({
  method: 'delete',
  path: '/orders?' + stringify(query)
}, env).then(toString).then(parse)

exports.getOrders = (query = {}, { parse } = JSON, { stringify } = querystring, { env } = process, { toString, request } = client) => request({
  method: 'get',
  path: '/orders?' + stringify(query)
}, env).then(toString).then(parse)

exports.getOrder = (orderId, query = {}, { parse } = JSON, { stringify } = querystring, { env } = process, { toString, request } = client) => request({
  method: 'get',
  path: '/orders/' + orderId + '?' + stringify(query)
}, env).then(toString).then(parse)

exports.getFills = (query = {}, { parse } = JSON, { stringify } = querystring, { env } = process, { toString, request } = client) => request({
  method: 'get',
  path: '/fills?' + stringify(query)
}, env).then(toString).then(parse)

exports.convert = (data, { parse } = JSON, { stringify } = JSON, { env } = process, { toString, request } = client) => request({
  method: 'post',
  path: '/conversions',
  body: stringify(data)
}, env).then(toString).then(parse)
