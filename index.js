const querystring = require('querystring')
const client = require('./lib/client')

exports.getProducts = (query = {}, {parse} = JSON, {stringify} = querystring, {request} = client) => request({
  method: 'get',
  path: '/products?' + stringify(query)
}).then(parse)

exports.getProductOrderBook = (productId, query = {}, {parse} = JSON, {stringify} = querystring, {request} = client) => request({
  method: 'get',
  path: '/products/' + productId + '/book?' + stringify(query)
}).then(parse)

exports.getProductTicker = (productId, query = {}, {parse} = JSON, {stringify} = querystring, {request} = client) => request({
  method: 'get',
  path: '/products/' + productId + '/ticker?' + stringify(query)
}).then(parse)

exports.getProductTrades = (productId, query = {}, {parse} = JSON, {stringify} = querystring, {request} = client) => request({
  method: 'get',
  path: '/products/' + productId + '/trades?' + stringify(query)
}).then(parse)

exports.getProductTradeStream = Function.prototype // todo: this could either a stream or a recursive promise

exports.getProductHistoricRates = (productId, query = {}, {parse} = JSON, {stringify} = querystring, {request} = client) => request({
  method: 'get',
  path: '/products/' + productId + '/candles?' + stringify(query)
}).then(parse)

exports.getProduct24HrStats = (productId, query = {}, {parse} = JSON, {stringify} = querystring, {request} = client) => request({
  method: 'get',
  path: '/products/' + productId + '/stats?' + stringify(query)
}).then(parse)

exports.getCurrencies = (query = {}, {parse} = JSON, {stringify} = querystring, {request} = client) => request({
  method: 'get',
  path: '/currencies?' + stringify(query)
}).then(parse)

exports.getTime = (query = {}, {parse} = JSON, {stringify} = querystring, {request} = client) => request({
  method: 'get',
  path: '/time?' + stringify(query)
}).then(parse)

exports.getCoinbaseAccounts = (query = {}, {parse} = JSON, {stringify} = querystring, {request} = client) => request({
  method: 'get',
  path: '/coinbase-accounts?' + stringify(query)
}).then(parse)

exports.getPaymentMethods = (query = {}, {parse} = JSON, {stringify} = querystring, {request} = client) => request({
  method: 'get',
  path: '/payment-methods?' + stringify(query)
}).then(parse)

exports.getAccounts = (query = {}, {parse} = JSON, {stringify} = querystring, {request} = client) => request({
  method: 'get',
  path: '/accounts?' + stringify(query)
}).then(parse)

exports.getAccount = (accountId, query = {}, {parse} = JSON, {stringify} = querystring, {request} = client) => request({
  method: 'get',
  path: '/accounts/' + accountId + '?' + stringify(query)
}).this(parse)

exports.getAccountHistory = (accountId, query = {}, {parse} = JSON, {stringify} = querystring, {request} = client) => request({
  method: 'get',
  path: '/accounts/' + accountId + '/ledger?' + stringify(query)
}).then(parse)

exports.getAccountTransfers = (accountId, query = {}, {parse} = JSON, {stringify} = querystring, {request} = client) => request({
  method: 'get',
  path: '/accounts/' + accountId + '/transfers?' + stringify(query)
}).then(parse)

exports.getAccountHolds = (accountId, query = {}, {parse} = JSON, {stringify} = querystring, {request} = client) => request({
  method: 'get',
  path: '/accounts/' + accountId + '/holds?' + stringify(query)
}).then(parse)

// - [ ] getOrders
// - [ ] getOrder
// - [ ] getFills
// - [ ] getFundings
// - [ ] getTrailingVolume
