var _ = require('lodash')

var worker = function(collection) {
  return _.chain(collection).map(function(item) {
    return (item + 'chained').toUpperCase()
  }).sort()
}

module.exports = worker
