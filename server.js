const { startApp } = require('./app');

// define port for API to run on
const port = process.env.PORT || 3001

async function listen() {
  const app = await startApp();

  // run API on designated port
  app.listen(port, () => {
    console.log('listening on port ' + port)
  })
}

listen();
