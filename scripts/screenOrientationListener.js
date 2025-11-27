let mathFuncsLeft = document.getElementById("mathFuncsLeft"); // blocks to be moved
let mathFuncsRight = document.getElementById("mathFuncsRight");

let calcKeyBoard = document.getElementById("calcKeyBoard"); // parent for move when changing to landscape

let calculator = document.getElementById("calculator"); // parent for left part when switching back to portrait
let hint = document.getElementById("hint"); // parent for right part

screen.orientation.addEventListener("change", () => {
    if (screen.orientation.type === "landscape-primary") {
        mathFuncsLeft.classList.remove("hidden");
        mathFuncsRight.classList.remove("hidden");

        calcKeyBoard.parentNode.insertBefore(mathFuncsLeft, calcKeyBoard);
        mathFuncsLeft.parentNode.insertBefore(mathFuncsRight, mathFuncsLeft);
    }
    else if (screen.orientation.type === "portrait-primary") {
        mathFuncsLeft.classList.add("hidden");
        mathFuncsRight.classList.add("hidden");

        calculator.parentNode.insertBefore(mathFuncsLeft, calculator);
        hint.parentNode.insertBefore(mathFuncsRight, hint);
    }
});