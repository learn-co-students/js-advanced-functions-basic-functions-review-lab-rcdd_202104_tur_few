function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }
  
  let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
  }
  
  let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
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
  
  let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
  }





// // Your code here
// function saturdayFun(string="roller-skate"){
//     return `This Saturday, I want to ${string}!`
// }

// function mondayWork(string="go to the office"){
//     return `This Monday, I will ${string}.`
// }


// //gonna fixed
// function wrapAdjective(){
    
//     return
// }

// let Calculator = {
//     add: function(p1,p2){
//         return p1+p2
//     },
//     subtract: function(p1,p2){
//         return p1-p2
//     },
//     multiply: function(p1,p2){
//         return p1*p2
//     },
//     divide: function(p1,p2){
//         return p1/p2
//     }
// }



// //didnt get it
// function actionApplyer(start, array) {

// }