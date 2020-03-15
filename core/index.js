const db = require('./db')

const getAnalysis = (costItems) => {
  const result = {};
  let total = 0;
  costItems.forEach(({type, cost}) => {
    if(result[type] == null){
      result[type] = 0
    }
    result[type] += parseFloat(cost)
    total += parseFloat(cost)
  });

  Object.keys(result).forEach((key) => {
    if(total == 0){
      result[key] = 100;
    }else{
      result[key] = Number((result[key] / total) * 100).toFixed();
    }
  })
  return result
}

const totalCost = (costItems) => {
  return costItems.reduce((sum, cur) => {
    return sum + parseFloat(cur.cost)
  }, 0)
}

const getWeekdates = (dateAsText) => {
  date = new Date(dateAsText);
  const weekday = date.getDay();
  const result = [];
  for(let i = 0; i < 7; i++){
    const temp = new Date(dateAsText);
    temp.setDate(temp.getDate() + i - weekday);
    result.push(db.dateFormatted(temp))
  }
  return result
}

const getWeeklyAnalysis = (date) => {
  const weekdates = getWeekdates(date)
  const result = {};
  const all = weekdates.map(weekdate => {
    return db.readAllCostInDate(weekdate).then(costItems => {
      result[weekdate] = costItems.reduce((acc, {cost}) => {
        return acc + Number(cost)
      },0)
      return true
    })
  })
  return Promise.all(all).then(() => {
    return result
  })
}

module.exports = {
  getAnalysis,
  totalCost,
  getWeeklyAnalysis,
}