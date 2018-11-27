  // const {ok, equal, deepEqual} = require('assert')
  // const {spy, stub} = require('sinon')

  // const reqheaders = {
  //   'Content-Type': 'application/json',
  //   'Accept': 'application/json',
  //   'User-Agent': process.env.npm_package_name + ' ' + process.env.npm_package_version
  // }

  // test('.request', () => {
  //   const {request} = require('..')

  //   test('is of type function', () => {
  //     equal(typeof request, 'function')
  //   })

  //   test('makes standard `https.request` promise compatibile', () => {
  //     const defaultOptions = {
  //       protocol: 'https:',
  //       slashes: true,
  //       hostname: 'api.pro.coinbase.com',
  //       path: '/time?option=true',
  //       headers: {
  //         'User-Agent': `${process.env.npm_package_name}  ${process.env.npm_package_version}`
  //       }
  //     }

  //     test('supports `head` requests', Function.prototype)

  //     test('supports `options` requests', Function.prototype)

  //     test('supports `post` requests', Function.prototype)

  //     test('supports `put` requests', Function.prototype)

  //     test('supports `delete` requests', Function.prototype)

  //     test('supports `get` requests', (done) => {
  //       const options = {...defaultOptions, method: 'get'}
  //       const https = {
  //         request: stub()
  //           .yields({statusCode: 200, headers: {}})
  //           .returns({on: Function.prototype})
  //       }

  //       nock('https://api.pro.coinbase.com')
  //         .get('/time')
  //         .query({option: true})
  //         .reply(200)

  //       request(options, {}, https)
  //         .then(res => {
  //           equal(res.statusCode, 200)
  //           ok(https.request.calledWith(options), '`https.request` should have been called')
  //         })
  //         .then(done)
  //         .catch(done)
  //     })
  //   })

  //   test('handles standard `https.request` errors', (done) => {
  //     const options = {protocol: 'https:', method: 'post', slashes: true, hostname: 'localhost', path: '/', headers: {}}
  //     const https = {request: stub().returns({on: stub().yields({error: true})})}

  //     request(options, {}, https)
  //       .then(done)
  //       .catch(err => {
  //         deepEqual(err, {error: true})
  //         done()
  //       })
  //   })
  // })
