'use strict'

const assert = require('assert')
const { execSync } = require('child_process')

const orig = process.env.TRAVIS_PULL_REQUEST
const commitlint = './node_modules/.bin/commitlint --config test/commitlint.config.js'

assert.doesNotThrow(test(10))

assert.doesNotThrow(test(72))
assert.doesNotThrow(test(72, 'false'))
assert.throws(test(73))
assert.throws(test(73, 'false'))
assert.throws(test(72, '1'))

assert.throws(test(68, '1'))
assert.throws(test(67, '12'))
assert.throws(test(66, '123'))
assert.throws(test(65, '1234'))

assert.doesNotThrow(test(67, '1'))
assert.doesNotThrow(test(66, '12'))
assert.doesNotThrow(test(65, '123'))
assert.doesNotThrow(test(64, '1234'))

reset()

function test (len, pr) {
  if (pr) process.env.TRAVIS_PULL_REQUEST = pr
  else reset()

  return function () {
    console.log('-- commit message length: %d, TRAVIS_PULL_REQUEST: %s', len, process.env.TRAVIS_PULL_REQUEST)
    execSync(`echo '${genStr(len)}' | ${commitlint}`)
  }
}

function genStr (len) {
  return Array(len + 1).join('x')
}

function reset () {
  if (orig) process.env.TRAVIS_PULL_REQUEST = orig
  else delete process.env.TRAVIS_PULL_REQUEST
}
