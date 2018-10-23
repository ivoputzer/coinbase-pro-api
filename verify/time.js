const {getTime} = require('..').sandbox

getTime()
  .then(time => console.log('.getTime()', time))
  .catch(console.error)

console.log('.getTime({sandbox: true})')
getTime({sandbox: true}, {parse: str => str})
  .then(time => console.log('.getTime()', time))
  .catch(console.error)
