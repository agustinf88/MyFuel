const Load = require('../../../repository/models/Load');

const ObjectId = require('mongodb').ObjectId;

const getById = database => (req, res) => {
  const { id } = req.params;
  database
    .collection('loads')
    .find({ _id: ObjectId(id) })
    .limit(1)
    .toArray((err, r) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.status(200).send(r[0]);
    });
};

const getAll = database => (req, res) => {
  database
    .collection('loads')
    .find()
    .toArray((err, r) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.status(200).send(r);
    });
};

const writeLoad = database => async (req, res) => {
  const load = new Load(req.body);
  try {
    let r = await database.collection('loads').insert(load);
    res.status(200).send(r);
  } catch (error) {
    res.status(500).send(error);
  }
  return;
};

const deleteAll = database => (req, res) => {
  database
    .collection('loads')
    .drop()
    .then(r => res.status(200).send(r))
    .catch(err => res.status(500).send(err));
};

const deleteById = database => (req, res) => {
  const { id } = req.params;
  database
    .collection('loads')
    .deleteOne({ _id: ObjectId(id) })
    .then(r => res.status(200).send(r))
    .catch(err => res.status(500).send(err));
};

module.exports = {
  getById,
  getAll,
  writeLoad,
  deleteAll,
  deleteById
};
