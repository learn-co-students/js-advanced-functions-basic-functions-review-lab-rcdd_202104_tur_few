// Your code here
function saturdayFun (activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

saturdayFun ();

function mondayWork (activity="go to the office"){
return `This Monday, I will ${activity}.`
}

mondayWork ();


function wrapAdjective (highlight = "*") {
    const innerfunction = function (param = "special") {
        return `You are ${highlight}${param}${highlight}!`
    } 
    return innerfunction
}

const Calculator = {
    add: function(x,y) {
      return x + y;
    },
    subtract: function(x,y) {
      return x - y;
    },
    multiply: function(x,y) {
      return x * y;
    },
    divide: function(x,y) {
      return x / y;
    }
  }

  function actionApplyer (int, arr) {
        for (let i = 0; i < arr.length; i++) {
         int = arr[i](int);
       }
       return int;
     }
