let isMathFuncClicked = false;

document.addEventListener('click', (event) => {
    if (event.target.classList.contains("mathFuncBtn")) {
        mathFuncOnClick(event);
    }
});

function mathFuncOnClick(event) {
    isMathFuncClicked = true;

    if (result != null) {
        displayInfo.textContent = "";
        result = null;
    }

    if (displayInfo.textContent != "" && event.target.innerText == "√") {
        displayInfo.textContent = "";
    }

    let tempString = displayInfo.textContent + event.target.innerText;

    if (tempString.length < maxLength) {
        displayInfo.textContent += event.target.innerText;
    }
    else {
        alert("Maximum 15 characters");
    }
}