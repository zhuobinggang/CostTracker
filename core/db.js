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
    logout: function(){
      console.log(storage)
    }
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
  const time = costItem.time == null ? dateFormatted(new Date()) : dateFormatted(new Date(costItem.time));
  const {type = 'Unknown', cost = 0, detail = 'No detail'} = costItem;
  return storage.getItem(time).then(item => {
    const costList = (item == null || item == '') ? [] : JSON.parse(item);
    costList.push({type, cost, detail, time});
    const val = JSON.stringify(costList);
    return storage.setItem(time, val);
  })
}

const isTwoCostEqual = (c1, c2) => {
  const t1 = new Date(c1.time)
  const t2 = new Date(c2.time)
  return c1.type == c2.type && c1.cost == c2.cost && c1.detail == c2.detail && (
    t1.getFullYear() == t2.getFullYear() && t1.getMonth() == t2.getMonth() && t1.getDate() == t2.getDate()
  );

}

const readAllCostInDate = function(time){
  if(typeof time == 'string'){
    time = dateFormatted(new Date(time))
  }else if(time == null){
    time = dateFormatted(new Date())
  }else{
    time = dateFormatted(time)
  }
  return storage.getItem(time).then(item => {
    console.log("ReadAllCostInDate: ")
    console.log(time, item)
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


const logoutCacheDb = () => {
  if(storage.logout){
    storage.logout()
  }
}

module.exports = {
  save,  isTwoCostEqual, dateFormatted, readAllCostInDate,
  emptyAll,
  readAllCostToday: readAllCostInDate,
  saveList,logoutCacheDb,
};