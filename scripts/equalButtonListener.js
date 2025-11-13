document.getElementById("equalBtn").addEventListener('click', (event) => {
    if (event.target.innerText === "=") {
        if (param1 != null) {
            param2 = displayInfo.textContent.replace(/[^0-9.%-]/g, "");
        }

        if (param1 == null && param2 == null) { // covers a use-case where = pressed when neither param is specified
            return;
        }
        else if (param2 == null || param2 == "") { //covers use case when = is pressed after any other operator
            alert("Invalid format used");
        }
        else {
            if (param2.includes("%")) {
                param2 = param2.replace("%", "");
                result = percentage(Number(param1), selectedOperator, Number(param2));
            }
            else
                result = operate(Number(param1), selectedOperator, Number(param2));

            if (typeof result !== "undefined") { // covers division by 0

                if (result.toString().length > 10)
                    document.getElementById("calcDisplay").style["font-size"] = "28px";

                if (Number.isInteger(result)) displayInfo.textContent = result;
                else 
                    if(result.toString().length <= 15)
                        displayInfo.textContent = Number(result.toFixed(10)); // to avoid tailing zeroes (0.500000) converting to Number again
                    else{
                        let resultSplit = result.toString().split(".");
                        displayInfo.textContent = Number(result.toFixed(15 - (resultSplit[0].length + 1)));
                    }

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