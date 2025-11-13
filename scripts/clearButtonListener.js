document.getElementById("clearAllBtn").addEventListener('click', () => {
    param1 = null;
    param2 = null;
    operator = null;
    result = null;
    isDot = false;
    isSign = false;

    displayInfo.textContent = "";
    document.getElementById("calcDisplayHistoryInfo").textContent = "";
    document.getElementById("calcDisplayOperator").textContent = "";
    document.getElementById("calcDisplay").style["font-size"] = "42px"
})