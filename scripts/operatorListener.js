document.getElementById("mainCalcOperators").addEventListener('click', (event) => {
    if(displayInfo.textContent == "") return;
    operator = event.target.innerText;
    isOpSelected = !isOpSelected;
    isDot = !isDot;
    isSign = !isSign;

    if (param1 != null) {
        param2 = displayInfo.textContent.replace(/[^0-9.-]/g, "");
    }

    if (param1 == null) {
        param1 = displayInfo.textContent;
        selectedOperator = operator;
    }
    else if (param2 == null || param2 == "") {
        selectedOperator = operator;
    }

    if (param2 != null && param2 != "") {
        if (typeof operate(Number(param1), selectedOperator, Number(param2)) != 'undefined')
            displayInfo.textContent = operate(Number(param1), selectedOperator, Number(param2));
        else return;

        param1 = displayInfo.textContent;
        selectedOperator = operator;
        param2 = null;
    }

    if (param2 != "" || param2 != null)
        document.getElementById("calcDisplayHistoryInfo").textContent = displayInfo.textContent;
    else
        document.getElementById("calcDisplayHistoryInfo").textContent += displayInfo.textContent;

    document.getElementById("calcDisplayOperator").textContent = event.target.innerText;

    displayInfo.textContent = "";
})