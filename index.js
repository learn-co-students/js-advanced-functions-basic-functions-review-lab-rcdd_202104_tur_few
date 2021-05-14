// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

saturdayFun()


function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

mondayWork();


function wrapAdjective (param2 = "*") {
    const innerfunction = function (param1 = "special") {
        return `You are ${param2}${param1}${param2}!`
    } 
    return innerfunction
}

const Calculator = {
    add: () => 1 + 3,
    subtract: () => 1 - 3,
    multiply: () => 1 * 3,
    divide: () => 10 / 5,
}

function multi1(x){
    return x*2 ;
};
multi1(13)

function add1(x){
    return x + 1000;
}
add1(26)

function modulo1(x) {
    return x % 7;
}

modulo1(1026)




let array1 = [multi1, add1, modulo1];

function actionApplyer(startInt, array) {
    let result = 0;

    if (array == 0 ){
        return startInt
    }
    else { for(let i=0;i<array.length;i++){ 
        result = array[i](startInt)

        startInt = result;  
        }

        return result

}


};
actionApplyer(13, array1);