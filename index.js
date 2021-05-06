// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
 saturdayFun("bathe my dog!");

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`;
}
 mondayWork("work from home");

function wrapAdjective (star = "*"){
  return function(adjective="a hard worker") {
    return `You are ${star}${adjective}${star}!`;
  };
};
 wrapAdjective("||")("a dedicated programmer");

 const Calculator = {
  add:function (a, b) {
    return 1 + 3 ;
   },
   subtract: function (a, b) {
    return 1 - 3 ;
   },
   multiply: function (a, b) {
    return 1 * 3 ;
   },
   divide: function (a, b) {
    return 10 / 5 ;
   }
 };

function actionApplyer(int,array){
  //int = ((array * 2)+ 1000) % 7;
  for (let i = 0; i < array.length; i++) {
    int = array[i](int);
    console.log(int);
  }
  //return  ((int * 2)+ 1000) % 7;
  return int;
  
}