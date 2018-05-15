const controller = require('./controller');

module.exports = (router, database) => {
  router.get('/user/:id', controller.getById(database));
  router.get('/user', controller.getAll(database));
  router.post('/user');
  router.put('/user/:id');
};
