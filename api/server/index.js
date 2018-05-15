const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const compression = require('compression');
const router = new express.Router();
const logger = require('winston').loggers.get('development');

logger.info('info');

const loggerMid = (req, res, next) => {
  console.log(
    `METHOD: ${req.method} URL: ${req.url} FROM ${
      req.ip
    } QUERY: ${JSON.stringify(req.query)} PARAMS: ${JSON.stringify(
      req.params
    )} BODY: ${JSON.stringify(req.body)}`
  );
  next();
};

const catchErrors = (e, req, res, next) => {
  if (res.headersSent) {
    return next(e);
  }
  if (e.message === 'Not found') {
    res.status(404);
  } else if (e.message === 'Bad request') {
    res.status(400);
  }
  res.json({ error: { msg: e.message, stack: e.stack } });
};

const initServer = database => {
  app.use(compression());
  app.use(bodyParser.json());
  app.use(loggerMid);
  app.use('/v1/', router);
  app.use(catchErrors);

  require('./routes')(router, database);

  // const cors = require('cors');
  // app.use(cors);

  app.listen(3001, () => {
    console.log('App started');
  });
};

module.exports = {
  initServer
};
