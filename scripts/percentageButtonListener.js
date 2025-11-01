document.getElementById("percentageBtn").addEventListener('click', (event) => {
    if (param1 == null || param1 == "" || param1 == undefined) return;

    else displayInfo.textContent += event.target.innerText;
})