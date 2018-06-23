const {deepStrictEqual} = require('assert')

const pro = require('..')
const gdax = require('gdax')

test('exports alias of gdax module', () => {
  deepStrictEqual(pro, gdax)
})
