document.getElementById("calcKeyBoard").addEventListener('click', (event) => {
    if (result != null){
        document.getElementById("calcDisplayInfo").textContent = "";
        result = null;
    }

    document.getElementById("calcDisplayInfo").textContent += event.target.innerText;
})