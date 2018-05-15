const { Load } = require('../models');

let loads = [
  new Load({ kilometer: 0, liters: 10, amount: 100 }),
  new Load({ kilometer: 15, liters: 20, amount: 110 }),
  new Load({ kilometer: 25, liters: 30, amount: 120 }),
  new Load({ kilometer: 35, liters: 40, amount: 130 }),
  new Load({ kilometer: 45, liters: 50, amount: 140 }),
  new Load({ kilometer: 55, liters: 60, amount: 150 }),
  new Load({ kilometer: 65, liters: 70, amount: 160 }),
  new Load({ kilometer: 75, liters: 80, amount: 170 }),
  new Load({ kilometer: 85, liters: 90, amount: 180 })
];

const runMock = database => {
  database.collection('loads').drop();
  database.collection('loads').insertMany(loads);
};

module.exports = {
  runMock
};
