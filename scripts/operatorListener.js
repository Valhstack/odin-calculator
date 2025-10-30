document.getElementById("mainCalcOperators").addEventListener('click', (event) => {
    operator = event.target.innerText;
    isOpSelected = !isOpSelected;

    if (param1 != null) {
        param2 = document.getElementById("calcDisplayInfo").textContent.replace(/[^0-9]/g, "");
    }

    if (param1 == null) {
        param1 = document.getElementById("calcDisplayInfo").textContent;
        selectedOperator = operator;
    }
    else if (param2 == null || param2 == "") {
        selectedOperator = operator;
    }

    if (param2 != null && param2 != "") {
        if (typeof operate(Number(param1), selectedOperator, Number(param2)) != 'undefined') document.getElementById("calcDisplayInfo").textContent = operate(Number(param1), selectedOperator, Number(param2));
        else return;

        param1 = document.getElementById("calcDisplayInfo").textContent;
        selectedOperator = operator;
        param2 = null;
    }

    document.getElementById("calcDisplayHistoryInfo").textContent = document.getElementById("calcDisplayInfo").textContent + event.target.innerText;
    document.getElementById("calcDisplayInfo").textContent = "";
})