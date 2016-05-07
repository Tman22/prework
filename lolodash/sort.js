var _ = require('lodash')

var sort = function(info) {
  return _.sortBy(info, 'quantity').reverse()
}

// LoDash Solution
// var sorting = function (collection) {
//        return _.sortBy(collection, function (item) {
//            return -item.quantity;
//        });
//    };

module.exports = sort
