document.getElementById("signBtn").addEventListener('click', () => {
    if(displayInfo.textContent != "" && 
        displayInfo.textContent != "-")
        return;

    if(!isSign){
        displayInfo.textContent = "-";
        isSign = !isSign;
    }
    else {
        displayInfo.textContent = displayInfo.textContent.replace("-", "");
        isSign = !isSign;
    }
})