var _ = require('lodash')

var worker = function(collection) {
  var total = []
  var group = _.groupBy(collection, function(item) {
    return item.username
  })
  _.forEach(group, function(val, key) {
    return total.push({username: key, comment_count: _.size(val)})
  })
  return _.sortBy(total, function(item) {
    return item.comment_count
  })
}

module.exports = worker
