document.getElementById("clearOneBtn").addEventListener('click', (event) => {
    displayInfo.textContent = displayInfo.textContent.slice(0, -1);

    if(displayInfo.textContent == "") isDot = !isDot;
})