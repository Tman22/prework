var _ = require('lodash')

var stuff = function(collection) {
  var hot, warm;
  var temp = { hot: [], warm: [] }
  _.forEach(collection, function(val, key) {
    hot = _.every(val, function(n) {
      return n > 19
    })
    warm = _.some(val, function(n) {
      return n > 19
    })
    if (hot) return temp.hot.push(key)
    if (!hot && warm) return temp.warm.push(key)
  })
  return temp
}

// var tempsort = function (item) {
//     var result = {
//         hot: [],
//         warm: []
//     };
//
//     function check_temp (item) {
//         return item > 19;
//     }
//
//     _.forEach(item, function (town, townname) {
//
//         if (_.every(town, check_temp)) {
//             result.hot.push(townname);
//         } else if (_.some(town, check_temp)) {
//             result.warm.push(townname);
//         }
//
//     });
module.exports = stuff
