const assert = require("assert")
const {Given, When, Then} = require("cucumber")

const mockTodayCostItems  = [{
  type: 'food',
  cost: 1,
  detail: 'Cup noodle',
}, {
  type: 'clothe',
  cost: 2,
  detail: 'Jeans',
}, {
  type: 'food',
  cost: 3,
  detail: 'Bean sprout',
}]

const getAnalysis = (costItems) => {
  return costItems.reduce((prev, cur) => {
    return prev + cur.cost;
  }, 0);
}

Given('I have some cost items today', function(){
  this.costItems = mockTodayCostItems
})


When('I enter the homepage', function(){
  console.log('OK I entered the homepage')
})


Then('I will be shown analysis', function(){
  assert.equal(getAnalysis(this.costItems), 6)
})