document.getElementById("clearOneBtn").addEventListener('click', () => {
    if(displayInfo.textContent[displayInfo.textContent.length - 1] == "."){
        isDot = !isDot;
    }
    displayInfo.textContent = displayInfo.textContent.slice(0, -1);

    if(displayInfo.textContent == "") isDot = !isDot;
})