var _ = require('lodash')

var stuff = function(user) {
  return _.filter(user, {active: true})
}

module.exports = stuff
