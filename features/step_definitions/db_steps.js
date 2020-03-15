const assert = require("assert")
const {Given, When, Then} = require("cucumber")
const {getAnalysis, totalCost, getWeeklyAnalysis, getMonthlyAnalysis} = require('../../core')
const db = require('../../core/db.js')

Given('OK', function () {
  return;
});

When('I create a cost of type: {string}, cost: {string}, detail: {string}, time: {string}', 
  function (type, cost, detail, time) {
    const newCost = {type, cost, detail, time};
    this.cost = newCost;
    return db.save(newCost).then(() => {
      db.logoutCacheDb()
    });
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
  return db.readAllCostInDate(date).then(list => {
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

Given('Today is {string}, and there is already some {string} these days.', function (date, records) {
  this.date = date;
  return db.emptyAll().then(() => {
    const all = records.split(';').map(typeCostDate => {
      const [type, cost, date] = typeCostDate.split(',');
      return {type, cost, time: date}
    })
    return db.saveList(all)
  });
});


When('I want to read weekly analysis', function () {
  const me = this;
  return getWeeklyAnalysis(this.date).then((analysis) => {
    me.analysis = analysis;
  });
});

Then('The weekly analysis is like {string}', function (analysis) {
  const result = this.analysis
  const incorrectList = analysis.split(',').filter(analyse => {
    const [date,cost] = analyse.split(':')
    return result[date] != cost
  });
  assert.equal(incorrectList.length, 0);
});

Then('Clear the db', function () {
  db.emptyAll()
});

When('I want to read monthly analysis', function () {
  // Write code here that turns the phrase above into concrete actions
  this.analysis = getMonthlyAnalysis(this.date);
});

Then('Just log it out', function () {
  console.log('Just log it out')
  console.log(this.analysis);
});