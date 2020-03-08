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

module.exports = {getAnalysis}