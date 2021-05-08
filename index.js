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