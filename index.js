const {get} = require('./lib/client')

exports.getTime = (query = {}, {parse} = JSON) => {
  return get('time', query).then(parse)
}

// exports.getCurrencies = (options = {}, {parseJson} = exports, {stringify} = querystring) => {
//   return request({
//     method: 'get',
//     protocol: 'https:',
//     slashes: true,
//     hostname: 'api.pro.coinbase.com',
//     path: `/currencies?${stringify(options)}`,
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//       'User-Agent': `${name} ${version}`
//     }
//   }).then(parseJson)
// }

// exports.getProducts = (options = {}, {parseJson} = exports, {stringify} = querystring) => {
//   return request({
//     method: 'get',
//     protocol: 'https:',
//     slashes: true,
//     hostname: 'api.pro.coinbase.com',
//     path: `/products?${stringify(options)}`,
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//       'User-Agent': `${name} ${version}`
//     }
//   }).then(parseJson)
// }

// exports.getProductOrderBook = (productId, options, {parseJson} = exports, {stringify} = querystring) => {
//   return request({
//     method: 'get',
//     protocol: 'https:',
//     slashes: true,
//     hostname: 'api.pro.coinbase.com',
//     path: `/products/${productId}/book?${stringify(options)}`,
//     headers: {
//       'User-Agent': `${name} ${version}`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }).then(parseJson)
// }

// exports.getProductTicker = (productId, options, {parseJson} = exports, {stringify} = querystring) => {
//   return request({
//     method: 'get',
//     protocol: 'https:',
//     slashes: true,
//     hostname: 'api.pro.coinbase.com',
//     path: `/products/${productId}/ticker?${stringify(options)}`,
//     headers: {
//       'User-Agent': `${name} ${version}`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }).then(parseJson)
// }

// exports.getProductHistoricRates = (productId, options, {parseJson} = exports, {stringify} = querystring) => {
//   return request({
//     method: 'get',
//     protocol: 'https:',
//     slashes: true,
//     hostname: 'api.pro.coinbase.com',
//     path: `/products/${productId}/candles?${stringify(options)}`,
//     headers: {
//       'User-Agent': `${name} ${version}`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }).then(parseJson)
// }

// exports.getProduct24HrStats = (productId, options, {parseJson} = exports, {stringify} = querystring) => {
//   return request({
//     method: 'get',
//     protocol: 'https:',
//     slashes: true,
//     hostname: 'api.pro.coinbase.com',
//     path: `/products/${productId}/stats?${stringify(options)}`,
//     headers: {
//       'User-Agent': `${name} ${version}`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }).then(parseJson)
// }

// exports.getProductTrades = (productId, options, {parseJson} = exports, {stringify} = querystring) => {
//   return request({
//     method: 'get',
//     protocol: 'https:',
//     slashes: true,
//     hostname: 'api.pro.coinbase.com',
//     path: `/products/${productId}/trades?${stringify(options)}`,
//     headers: {
//       'User-Agent': `${name} ${version}`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }).then(parseJson)
// }

// exports.getProductTradeStream = Function.prototype // todo

// exports.getCoinbaseAccounts = ({parseJson} = exports) => {
//   return request({
//     method: 'get',
//     protocol: 'https:',
//     slashes: true,
//     hostname: 'api.pro.coinbase.com',
//     path: `/coinbase-accounts`,
//     headers: {
//       'User-Agent': `${name} ${version}`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }).then(parseJson)
// }

// exports.getPaymentMethods = ({parseJson} = exports) => {
//   return request({
//     method: 'get',
//     protocol: 'https:',
//     slashes: true,
//     hostname: 'api.pro.coinbase.com',
//     path: `/payment-methods`,
//     headers: {
//       'User-Agent': `${name} ${version}`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }).then(parseJson)
// }

// exports.getAccounts = ({parseJson} = exports) => {
//   return request({
//     method: 'get',
//     protocol: 'https:',
//     slashes: true,
//     hostname: 'api.pro.coinbase.com',
//     path: `/accounts`,
//     headers: {
//       'User-Agent': `${name} ${version}`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }).then(parseJson)
// }

// exports.getAccount = (accountId, {parseJson} = exports) => {
//   return request({
//     method: 'get',
//     protocol: 'https:',
//     slashes: true,
//     hostname: 'api.pro.coinbase.com',
//     path: `/accounts/${accountId}`,
//     headers: {
//       'User-Agent': `${name} ${version}`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }).then(parseJson)
// }

// exports.getAccountHistory = (accountId, options, {parseJson} = exports, {stringify} = querystring) => {
//   return request({
//     method: 'get',
//     protocol: 'https:',
//     slashes: true,
//     hostname: 'api.pro.coinbase.com',
//     path: `/accounts/${accountId}/ledger?${stringify(options)}`,
//     headers: {
//       'User-Agent': `${name} ${version}`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }).then(parseJson)
// }

// exports.getAccountTransfers = (accountId, options, {parseJson} = exports, {stringify} = querystring) => {
//   return request({
//     method: 'get',
//     protocol: 'https:',
//     slashes: true,
//     hostname: 'api.pro.coinbase.com',
//     path: `/accounts/${accountId}/transfers?${stringify(options)}`,
//     headers: {
//       'User-Agent': `${name} ${version}`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }).then(parseJson)
// }

// exports.getAccountHolds = (accountId, options, {parseJson} = exports, {stringify} = querystring) => {
//   return request({
//     method: 'get',
//     protocol: 'https:',
//     slashes: true,
//     hostname: 'api.pro.coinbase.com',
//     path: `/accounts/${accountId}/holds?${stringify(options)}`,
//     headers: {
//       'User-Agent': `${name} ${version}`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }).then(parseJson)
// }

// //   placeOrder(params, callback) {
// //     let requiredParams = ['side', 'product_id'];
// //     let needsSize = params.type !== 'market' && params.type !== 'stop';

// //     if (needsSize) {
// //       requiredParams.push('price', 'size');
// //     }

// //     this._requireParams(params, requiredParams);

// //     if (!needsSize && !params.size && !params.funds) {
// //       throw new Error('`opts` must include either `size` or `funds`');
// //     }

// //     if (params.side !== 'buy' && params.side !== 'sell') {
// //       throw new Error('`side` must be `buy` or `sell`');
// //     }

// //     return this.post(['orders'], { body: params }, callback);
// //   }

// //   buy(params, callback) {
// //     params.side = 'buy';
// //     return this.placeOrder(params, callback);
// //   }

// //   sell(params, callback) {
// //     params.side = 'sell';
// //     return this.placeOrder(params, callback);
// //   }

// //   getTrailingVolume(callback) {
// //     return this.get(['users', 'self', 'trailing-volume'], {}, callback);
// //   }

// //   cancelOrder(orderID, callback) {
// //     if (!orderID || typeof orderID === 'function') {
// //       let err = new Error('must provide an orderID or consider cancelOrders');
// //       if (typeof orderID === 'function') {
// //         orderID(err);
// //       }
// //       return Promise.reject(err);
// //     }

// //     return this.delete(['orders', orderID], callback);
// //   }

// //   cancelOrders(callback) {
// //     return this.delete(['orders'], callback);
// //   }

// //   cancelAllOrders(args = {}, callback) {
// //     if (!callback && typeof args === 'function') {
// //       callback = args;
// //       args = {};
// //     }

// //     const opts = { qs: args };
// //     const totalDeletedOrders = [];

// //     const p = function deleteNext() {
// //       return new Promise((resolve, reject) => {
// //         this.delete(['orders'], opts, (err, response, data) => {
// //           if (err) {
// //             reject(err);
// //           } else {
// //             resolve([response, data]);
// //           }
// //         });
// //       })
// //         .then(values => {
// //           let [response, data] = values;
// //           totalDeletedOrders.push(...data);
// //           if (data.length) {
// //             return deleteNext.call(this);
// //           } else {
// //             return response;
// //           }
// //         })
// //         .then(response => {
// //           if (callback) {
// //             callback(undefined, response, totalDeletedOrders);
// //           }
// //           return totalDeletedOrders;
// //         })
// //         .catch(err => {
// //           if (callback) {
// //             callback(err);
// //           }
// //           throw err;
// //         });
// //     }.call(this);

// //     if (callback) {
// //       p.catch(() => {});
// //       return undefined;
// //     } else {
// //       return p;
// //     }
// //   }

// exports.getOrders = (options, {parseJson} = exports, {stringify} = querystring) => {
//   return request({
//     method: 'get',
//     protocol: 'https:',
//     slashes: true,
//     hostname: 'api.pro.coinbase.com',
//     path: `/orders?${stringify(options)}`,
//     headers: {
//       'User-Agent': `${name} ${version}`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }).then(parseJson)
// }

// exports.getOrder = (orderId, {parseJson} = exports) => {
//   return request({
//     method: 'get',
//     protocol: 'https:',
//     slashes: true,
//     hostname: 'api.pro.coinbase.com',
//     path: `/orders/${orderId}`,
//     headers: {
//       'User-Agent': `${name} ${version}`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }).then(parseJson)
// }

// exports.getFills = (options, {parseJson} = exports, {stringify} = querystring) => {
//   return request({
//     method: 'get',
//     protocol: 'https:',
//     slashes: true,
//     hostname: 'api.pro.coinbase.com',
//     path: `/fills?${stringify(options)}`,
//     headers: {
//       'User-Agent': `${name} ${version}`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }).then(parseJson)
// }

// exports.getFundings = (options, {parseJson} = exports, {stringify} = querystring) => {
//   return request({
//     method: 'get',
//     protocol: 'https:',
//     slashes: true,
//     hostname: 'api.pro.coinbase.com',
//     path: `/funding?${stringify(options)}`,
//     headers: {
//       'User-Agent': `${name} ${version}`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }).then(parseJson)
// }

// //   repay(params, callback) {
// //     this._requireParams(params, ['amount', 'currency']);
// //     return this.post(['funding/repay'], { body: params }, callback);
// //   }

// //   marginTransfer(params, callback) {
// //     this._requireParams(params, [
// //       'margin_profile_id',
// //       'type',
// //       'currency',
// //       'amount',
// //     ]);
// //     return this.post(['profiles/margin-transfer'], { body: params }, callback);
// //   }

// //   closePosition(params, callback) {
// //     this._requireParams(params, ['repay_only']);
// //     return this.post(['position/close'], { body: params }, callback);
// //   }

// //   deposit(params, callback) {
// //     this._requireParams(params, ['amount', 'currency', 'coinbase_account_id']);
// //     return this.post(['deposits/coinbase-account'], { body: params }, callback);
// //   }

// //   depositPayment(params, callback) {
// //     this._requireParams(params, ['amount', 'currency', 'payment_method_id']);
// //     return this.post(['deposits/payment-method'], { body: params }, callback);
// //   }


// //   depositCrypto(params, callback) {
// //     this._requireParams(params, ['currency']);
// //     return this.getCoinbaseAccounts()
// //       .then(coinbaseAccounts => {
// //         let account = coinbaseAccounts.find(
// //           a => a.currency === params.currency
// //         );
// //         return this.post(
// //           ['coinbase-accounts', account.id, 'addresses'],
// //           callback
// //         );
// //       })
// //       .catch(callback);
// //   }

// //   withdraw(params, callback) {
// //     this._requireParams(params, ['amount', 'currency', 'coinbase_account_id']);
// //     return this.post(
// //       ['withdrawals/coinbase-account'],
// //       { body: params },
// //       callback
// //     );
// //   }

// //   withdrawPayment(params, callback) {
// //     this._requireParams(params, ['amount', 'currency', 'payment_method_id']);
// //     return this.post(['withdrawals/payment-method'], { body: params }, callback);
// //   }

// //   withdrawCrypto(body, callback) {
// //     this._requireParams(body, ['amount', 'currency', 'crypto_address']);
// //     return this.post(['withdrawals/crypto'], { body }, callback);
// //   }

// //   _requireParams(params, required) {
// //     for (let param of required) {
// //       if (params[param] === undefined) {
// //         throw new Error('`opts` must include param `' + param + '`');
// //       }
// //     }
// //     return true;
// //   }

// //   createReport(params, callback) {
// //     const required = ['type', 'start_date', 'end_date'];
// //     this._requireParams(params, required);

// //     if (params.type === 'fills') {
// //       required.push('product_id');
// //       this._requireParams(params, required);
// //     }

// //     if (params.type === 'account') {
// //       required.push('account_id');
// //       this._requireParams(params, required);
// //     }

// //     return this.post(['reports'], { body: params }, callback);
// //   }

// //   getReportStatus(reportId, callback) {
// //     return this.get(['reports', reportId], callback);
// //   }
// // }
