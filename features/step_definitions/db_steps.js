const assert = require("assert")
const {Given, When, Then} = require("cucumber")
const {getAnalysis, totalCost} = require('../../core')
const db = require('../../core/db.js')

Given('OK', function () {
  return;
});

When('I create a cost of type: {string}, cost: {string}, detail: {string}, time: {string}', 
  function (type, cost, detail, time) {
    const newCost = {type, cost, detail, time};
    this.cost = newCost;
    return db.save(newCost);
  }
);

When('I create a cost of type: {string}, cost: {string}, detail: {string}', function (type, cost, detail) {
  const newCost = {type, cost, detail, time: db.dateFormatted(new Date())};
  this.cost = newCost;
  return db.save(newCost);
});

When('I read all cost today', function () {
  const me = this;
  return db.readAllCostToday().then(list => {
    me.costList = list;
  });
});

When('I read all cost in date {string}', function (date) {
  const me = this;
  return db.readAddCostInDate(date).then(list => {
    me.costList = list;
  });
});

Then('The cost is contained in the list', function () {
  const cost = this.cost;
  const finded = this.costList.find(item => {
    return db.isTwoCostEqual(item, cost)
  })
  assert.notEqual(null, finded);
});

