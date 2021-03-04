const _ = require('lodash')

const requestLogger = function (req, res, next) {
  console.log('\n===== Incoming Request =====\n')
  console.log(`${new Date()}`)
  console.log(`${req.method} ${req.url}`)
  // todo: params are not printed
  console.log(`params: ${JSON.stringify(req.params)}`)
  console.log(`body: ${(_.isEmpty(req.body)) ? 'n/a' : JSON.stringify(req.body)}`)
  console.log('\n============================\n')
  next()
}

module.exports = requestLogger
