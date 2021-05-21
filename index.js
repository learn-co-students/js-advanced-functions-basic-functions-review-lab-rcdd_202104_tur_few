function saturdayFun(fun="roller-skate") {
  return `This Saturday, I want to ${fun}!`;
}

function mondayWork(workDay="go to the office"){
  return `This Monday, I will ${workDay}.`;
}

function wrapAdjective(flair="*"){
  return function(uAdj="special"){
    return `You are ${flair}${uAdj}${flair}!`;
  };

}

const Calculator = {
  add: function(x, z){
    return x + z;
  },
  subtract: function(x, z){
    return x - z;
  },
  multiply: function(x, z){
    return x * z;
  },
  divide: function(x, z){
    return x / z;
  }
};

function actionApplyer(startingNum, arrayOfFunctions) {
  for (let i = 0 ; i < arrayOfFunctions.length; i++){
    startingNum = arrayOfFunctions[i](startingNum);
  }
  return startingNum;
}