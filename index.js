// Your code here
function saturdayFun (string){
    if (string != undefined){
return ("This Saturday, I want to" +" "+ string +"!");}
else {
    return ("This Saturday, I want to roller-skate!");
}
}
function mondayWork (string){
    if (string != undefined){
return ("This Monday, I will" +" "+ string +".");}
else {
    return ("This Monday, I will go to the office.");}}
function wrapAdjective (string = "*"){
    if (string != undefined){
    return function (str){
       if (string != undefined ){
       return `${"You are "}${string}${str}${string}!`; 
       } else {
           str = "special";
           
           return `${"You are "}${string}${str}${string}!`;
         
        } } }}
      const Calculator = {
        add: function (x, y){
                return x + y;
        },
        subtract: function (x, y){
                return x-y;
        },
        multiply: function (x, y){
                return x*y;
        },
        divide: function (x, y){
                return x/y;
        },
};
let actionApplyer = function(start, ray) {
 let a = start
      
  for (let i = 0; i < ray.length; i++ ){
       a = ray[i](a);
     }
  return a
}