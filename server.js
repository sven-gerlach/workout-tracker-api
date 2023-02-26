const { startApp } = require('./app');

const app = startApp();

// define port for API to run on
const port = process.env.PORT || 3001

// run API on designated port
app.listen(port, () => {
  console.log('listening on port ' + port)
})
