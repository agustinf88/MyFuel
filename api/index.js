require('./logging');
const { dbInit } = require('./repository');
const { initServer } = require('./server');
const { runMock } = require('./repository/mock');

dbInit()
  .then(database => {
    console.log('Databse connected');
    // runMock(database);
    initServer(database);
  })
  .catch(err => console.log('Error while connecting', err));
