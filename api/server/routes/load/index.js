const controller = require('./controller');

module.exports = (router, database) => {
  router.get('/loads/:id', controller.getById(database));
  router.get('/loads', controller.getAll(database));
  router.post('/loads', controller.writeLoad(database));
  router.delete('/loads/:id', controller.deleteById(database));
  router.delete('/loads', controller.deleteAll(database));
};
