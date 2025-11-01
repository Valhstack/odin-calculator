let param1, param2, selectedOperator, operator, isOpSelected = false, result = null, isDot = false, isSign = false;

const displayInfo = document.getElementById("calcDisplayInfo");

function add(param1, param2) {
    return param1 + param2;
}

function subtract(param1, param2) {
    return param1 - param2;
}

function multiply(param1, param2) {
    return param1 * param2;
}

function divide(param1, param2) {
    if (param2 === 0) {
        alert("Can't divide by 0"); 
        return;
    }

    return param1 / param2;
}

function percentage(param1, operator, param2){
    if(operator == "+" || operator == "-"){
        return operate(param1, operator, param1 * (param2 / 100));
    }
    else if (operator == "*" || operator == "/"){
        return operate(param1, operator, (param2 / 100));
    }
}

function operate(param1, operator, param2){
    switch (operator){
        case "+":
            return add(param1, param2);
        case "-":
            return subtract(param1, param2);
        case "*":
            return multiply(param1, param2);
        case "/":
            return divide(param1, param2);
    }
}