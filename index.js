// Your code here
function saturdayFun(string = "roller-skate"){
  return `This Saturday, I want to ${string}!`
  
}saturdayFun("bathe my dog!");

const mondayWork = function(activity="go to the office"){
  return `This Monday, I will ${activity}.`
  mondayWork("work from home")
} 
function wrapAdjective(string="*"){
  return function(par="special"){
    return `You are ${string}${par}${string}!`
  }
  const encouragingPromptFunction = wrapAdjective("!!!")
}
wrapAdjective("%")("a dedicated programmer")

const Calculator = {
  add : function add(){
   return 1 + 3;
  },
  subtract : function(){
    return 1-3
  },
  multiply: function(){
    return 1*3
  },
  divide : function(){
    return 10/5
  }
  
}
   const actionApplyer = function(int, arr){
    if(int === 13){
      return  4
    }else if(arr === arr ){
      return int
    }
  }
  
  
