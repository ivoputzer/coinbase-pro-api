#!/usr/bin/env node

require('console.table')

const [cmd, ...args] = process.argv.slice(2)

dataFor(cmd)(args)
  .then(console.table)
  .catch(console.error)

function dataFor (command, api = require('..')) {
  const toCamelCase = s => s.replace(/(-\w)/g, m => m[1].toUpperCase())
  const method = toCamelCase(`get-${command}`)
  return api[method] || Promise.resolve.bind(Promise, `command: \`${command}\` not available.`)
}
