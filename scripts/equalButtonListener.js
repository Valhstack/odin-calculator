document.getElementById("equalBtn").addEventListener('click', (event) => {
    if (event.target.innerText === "=") {
        if (param1 != null) {
            param2 = displayInfo.textContent.replace(/[^0-9.-]/g, "");
        }

        if (param1 == null && param2 == null) { // covers a use-case where = pressed when neither param is specified
            return;
        }
        else if (param2 == null || param2 == "") { //covers use case when = is pressed after any other operator
            alert("Invalid format used");
        }
        else {
            result = operate(Number(param1), selectedOperator, Number(param2));
            if (typeof result !== "undefined") { // covers division by 0
                if (Number.isInteger(result)) displayInfo.textContent = result;
                else displayInfo.textContent = Number(result.toFixed(10)); // to avoid tailing zeroes (0.500000) converting to Number again

                operator = null;
                param1 = null;
                param2 = null;
                isDot = false;
                isSign = false;

                document.getElementById("calcDisplayHistoryInfo").textContent = "";
                document.getElementById("calcDisplayOperator").textContent = "";
            }
        }
    }
})