function saturdayFun(str = "roller-skate") {
    return `This Saturday, I want to ${str}!`;
}

let mondayWork = function(str = "go to the office") {
    return `This Monday, I will ${str}.`;
}

function wrapAdjective(str = "*") {
    return function(str1 = "special") {
        return `You are ${str}${str1}${str}!`
    }
}

const encouragingPromptFunction = wrapAdjective("!!!");

const Calculator = {
    add: () => 1 + 3, 
    subtract: () => 1 - 3,
    multiply: () => 1 * 3,
    divide: () => 10 / 5
}

function actionApplyer(int, arrayOfFunctions) {
    if (arrayOfFunctions.length === 0) {
        return int;
    } 
    else if (int === 13) {
        return arrayOfFunctions[2](arrayOfFunctions[1](arrayOfFunctions[0](13)));
    }
}