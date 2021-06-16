function saturdayFun(activity="roller-skate") {
   return `This Saturday, I want to ${activity}!`
}
const mondayWork = function (activity="go to the office") {
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(str="*"){
    return function(adjective="special") {
        return `You are ${str}${adjective}${str}!`

    }
}

const Calculator = {
    Calculator : {},
    add: function(x, y){return x + y},
    subtract: function(x, y){return x - y},
    multiply: function(x, y){return x * y},
    divide: function(x, y){return x / y}

};


function multiply(x){
    return x*2 ;
}
function add(x){
    return x + 1000;
}
function modulo(x) {
    return x % 7;
}




let newArray = [multiply, add, modulo];

function actionApplyer(int, arr) {
    let result = 0;
    
    if (arr === 0 ){
        return int
    }
    else { for(let i=0; i<arr.length; i++){ 
        result = arr[i](int)
        int = result;  
        }
      return result
  }
}
actionApplyer(10, newArray);