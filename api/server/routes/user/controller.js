const getById = database => (req, res) => {
  database.collection('user').find();
  res.status(200).send('Hello World');
};

const getAll = database => (req, res) => {
  database.collection('user').find().toArray((err, r) => {
    if(err){
      res.status(500).send(err);
      return;
    }
    res.status(200).send(r);
  });
}
module.exports = {
  getById,
  getAll
};
