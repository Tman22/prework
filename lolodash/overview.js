var _ = require('lodash')

var worker = function(collection) {
  var overview = []
  var group = _.groupBy(collection, "article")

   _.forEach(group, function(val, key) {

    var total = _.reduce(val, function(sum, amount) {
       return sum + amount.quantity
     }, 0)
     overview.push({ 'article': parseInt(key), 'total_orders': total })
  })
  return _.sortBy(overview, 'total_orders').reverse()
}

module.exports = worker
