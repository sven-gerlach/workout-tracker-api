require('source-map-support/register')
const { startApp } = require('./app');
const serverlessExpress = require('@vendia/serverless-express');

let serverlessExpressInstance

async function setup(event, context, callback) {
  const app = await startApp();

  serverlessExpressInstance = serverlessExpress({ app });
  return serverlessExpressInstance(event, context, callback);
}

async function handler (event, context, callback) {
  if (serverlessExpressInstance) return serverlessExpressInstance(event, context, callback);
  return setup(event, context, callback);
}

exports.handler = handler
