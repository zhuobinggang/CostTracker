const assert = require("assert")
const {Given, When, Then} = require("cucumber")
const {getAnalysis, totalCost} = require('../../core')

function costItem(type, cost, detail=''){
  return {
    type,
    cost,
    detail,
  }
}

function list(str){
  return str.split(',').map(it => it.trim())
}

Given('I have no record today', function(){
  this.todayCostItems = []
}) 

When('I add records with cost of {string}, type of {string} today', function(costList, typeList){
  costList = list(costList)
  typeList = list(typeList)
  costList.forEach((cost, index) => {
    this.todayCostItems.push(costItem(typeList[index], cost));
  });
})

Then('The percentage list of the records will be {string}', function(percentMap) {
  percentMap = JSON.parse(percentMap)
  assert.deepEqual(percentMap, getAnalysis(this.todayCostItems));
})

Then('I will be shown analysis', function(){
  console.log('Yse I got here');
})

Then('The total cost will be {string}', function (total) {
  return assert.equal(total, totalCost(this.todayCostItems));
});
