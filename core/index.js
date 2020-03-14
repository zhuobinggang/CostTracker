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
    result[key] = Number((result[key] / total) * 100).toFixed()
  })
  return result
}

const totalCost = (costItems) => {
  return costItems.reduce((sum, cur) => {
    return sum + parseFloat(cur.cost)
  }, 0)
}

module.exports = {
  getAnalysis,
  totalCost,
}