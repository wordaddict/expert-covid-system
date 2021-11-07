const calculateDiagnosis = (results) => {
    const allKeysCount = Object.keys(results).length;
    const eachPercentage = 100/ allKeysCount;
    let finalPercentage = 0;
    for (let rec in results){
      if(results[rec] === 'yes'){
          finalPercentage = finalPercentage + eachPercentage;
      }
    }
    return finalPercentage;
};

module.exports = calculateDiagnosis;



