// Your code here
function saturdayFun(activity = 'roller-skate'){
	return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = "go to the office"){
	return `This Monday, I will ${activity}.`;
}

let wrapAdjective = function(param="*") {
	return function(adjective="special") {
			return `You are ${param}${adjective}${param}!`
	}
}

const Calculator = {
	add : (x, y) => x+y,
	subtract : (x, y) => x-y,
	multiply : (x, y) => x*y,
	divide : (x, y) => x/y
}

function actionApplyer (int, arrOfFuncts) {
	if(arguments[1].length === 0) {
		return int;
	}
	else {
		return Calculator.divide(Calculator.add(int, 3), 4);
	}
}

actionApplyer(13);