document.getElementById("dotBtn").addEventListener('click', (event) => {
    if(!isDot){
        displayInfo.textContent += event.target.innerText;
        isDot = true;
    }
    else
        return;
})