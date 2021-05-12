// Your code here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(thing="*") {
    return function(adjective="special") {
      return `You are ${thing}${adjective}${thing}!`
    }
  }

  const Calculator = {
    add: function(a,b) {
      return a + b;
    },
    subtract: function(a,b) {
      return a - b
    },
    multiply: function(a,b) {
      return a * b
    },
    divide: function(a,b) {
      return a / b;
    }
  }




  function actionApplyer (starting,array){

    let a=starting
    for (let i=0; i< array.length; i++){
        a = array[i](a)
    }
    return a
  }