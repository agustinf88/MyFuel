require('./logging');
const { dbInit } = require('./repository');
const { initServer } = require('./server');

dbInit()
  .then(database => {
    console.log('Database connected');
    initServer(database);
  })
  .catch(err => console.log('Error while connecting', err));










  