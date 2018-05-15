require('./logging');
const { dbInit } = require('./repository');
const { runMock } = require('./repository/mock');

dbInit()
  .then(database => {
    console.log('Database connected');
    // eslint-disable-next-line
    runMock(database).then(() => process.exit(0));
  })
  .catch(err => console.log('Error while connecting', err));
