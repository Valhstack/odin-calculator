document.getElementById("clearButton").addEventListener('click', () => {
    param1 = null;
    param2 = null;
    operator = null;
    result = null;

    document.getElementById("calcDisplayInfo").textContent = "";

    console.log(param1, " ", operator, " ", param2);
})