module.exports = (router, database) => {
  require('./user')(router, database);
  require('./load')(router, database);
};
