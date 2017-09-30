const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.cjs')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()

suite.add('Rambda.head', () => {
  R.head(holder)
})
  .add('Ramda', () => {
    Ramda.head(holder)
  })
  .add('Lodash', () => {
    _.head(holder)
  })
module.exports = suite
