function reactStorageExist(){
  try{
    const {AsyncStorage} = require('react-native')
    return true;
  } catch(e){
    return false;
  };
}

function getCacheStorage(){
  let storage =  {}
  return {
    getItem: function(time){
      return Promise.resolve(storage[time])
    },
    setItem: function(key, val){
      storage[key] = val;
      return Promise.resolve()
    },
    emptyAll: function(){
      storage = {};
      return Promise.resolve()
    },
  }
}

function getReactStorage(){
  console.error('I am using the AsyncStorage from react-native')
  const {AsyncStorage} = require('react-native')
  AsyncStorage.emptyAll = function(){
    this.clear()
  }
  return AsyncStorage;
}

function dateFormatted(time){
  return [time.getFullYear(), time.getMonth() + 1, time.getDate()].join('-');
}

const storage = reactStorageExist()? getReactStorage() : getCacheStorage();

const save = function(costItem){
  if(costItem == null){
    return
  }
  const {type = 'Unknown', cost = 0, detail = 'No detail', time = dateFormatted(new Date())} = costItem;
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

const readAllCostInDate = function(time = dateFormatted(new Date())){
  return storage.getItem(time).then(item => {
    if(item == null){
      return []
    }else{
      return JSON.parse(item);
    }
  })
}

const emptyAll = function(){
  return storage.emptyAll()
}

const saveList = function(list){
  const map = {}
  list.forEach(item => {
    if(map[item.time] == null){
      map[item.time] = [item]
    }else{
      map[item.time].push(item)
    }
  })
  const all = Object.keys(map).map(key => {
    return storage.getItem(key).then(val => {
      const list = (val == null || val == '') ? [] : JSON.parse(val)
      return storage.setItem(key, JSON.stringify(list.concat(map[key])))
    })
  })
  return Promise.resolve(all)
}


module.exports = {
  save,  isTwoCostEqual, dateFormatted, readAllCostInDate,
  emptyAll,
  readAllCostToday: readAllCostInDate,
  saveList,
};