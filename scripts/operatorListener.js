let func, param, tempResult;

document.addEventListener('click', (event) => {
    if (event.target.classList.contains("operatorBtn")) {
        operatorOnClick(event);
    }
})

function operatorOnClick(event) {
    if (displayInfo.textContent == "") return;

    operator = event.target.innerText;
    isOpSelected = !isOpSelected;
    if (isDot) isDot = false;
    isSign = !isSign;
    document.getElementById("calcDisplay").style["font-size"] = "42px"

    if (param1 != null) {
        param2 = displayInfo.textContent.replace(/[^0-9.%-]/g, "");
    }

    if (param1 == null) {
        if (isMathFuncClicked) { // to cover use case where math func buttons are used 
            param1 = Number(mathFuncBtnClicked().toFixed(5)); // mathFuncBtnClicked is currently in the equalButtonListener file
                                                              // but it will be moved when refactoring is done

            isMathFuncClicked = false;
        }
        else {
            param1 = displayInfo.textContent;
        }

        selectedOperator = operator;
    }
    else if (param2 == null || param2 == "") {
        selectedOperator = operator;
    }

    if (param2 != null && param2 != "") {
        if (typeof operate(Number(param1), selectedOperator, Number(param2)) != 'undefined') {
            tempResult = operate(Number(param1), selectedOperator, Number(param2));
            displayInfo.textContent = Number(tempResult.toFixed(5));
        }
        else return;

        param1 = displayInfo.textContent;
        selectedOperator = operator;
        param2 = null;
    }

    document.getElementById("calcDisplayHistoryInfo").textContent = param1;

    document.getElementById("calcDisplayOperator").textContent = event.target.innerText;

    displayInfo.textContent = "";
}
