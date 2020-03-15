function reactStorageExist(){
  try{
    const {AsyncStorage} = require('react-native')
    return true;
  } catch(e){
    console.log('fuck')
    return false;
  };
}

function getCacheStorage(){
  const storage =  {}
  return {
    getItem: function(time){
      return Promise.resolve(storage[time])
    },
    setItem: function(key, val){
      storage[key] = val;
      return Promise.resolve()
    }
  }
}

function getReactStorage(){
  return null
}

function dateFormatted(time){
  return [time.getFullYear(), time.getMonth() + 1, time.getDate()].join('-');
}

const storage = reactStorageExist()? getReactStorage() : getCacheStorage();

const save = function(costItem){
  const {type, cost, detail, time = dateFormatted(new Date())} = costItem;
  return storage.getItem(time).then(item => {
    const costList = (item == null || item == '') ? [] : JSON.parse(item);
    costList.push({type, cost, detail, time});
    const val = JSON.stringify(costList);
    return storage.setItem(time, val);
  })
}

const isTwoCostEqual = (c1, c2) => {
  return c1.type == c2.type && c1.cost == c2.cost && c1.detail == c2.detail && c1.time == c2.time;
}

const readAddCostInDate = function(time = dateFormatted(new Date())){
  return storage.getItem(time).then(item => {
    return JSON.parse(item);
  })
}


module.exports = {
  save,  isTwoCostEqual, dateFormatted, readAddCostInDate,
  readAllCostToday: readAddCostInDate,
};