const MongoClient = require('mongodb').MongoClient;

const DB_NAME = 'myfuel';
const HOST_NAME = 'mongodb://192.168.99.100';
const PORT = 32768;

// const CONNECTION_STRING = `${HOST_NAME}:${PORT}/${DB_NAME}`;
const CONNECTION_STRING = `${HOST_NAME}:${PORT}`;

const dbInit = () =>
  new Promise((resolve, reject) => {
    MongoClient.connect(CONNECTION_STRING, (err, database) => {
      if (err) reject(err);
      resolve(database.db(DB_NAME));
    });
  });

module.exports = {
  dbInit
};
