document.getElementById("calcKeyBoard").addEventListener('click', (event) => {
    if (result != null){
        document.getElementById("calcDisplayInfo").textContent = "";
        result = null;
    }

    document.getElementById("calcDisplayInfo").textContent += event.target.innerText;
})

// perhaps listener can be re-attached based on class - this will require keyboard to simply have it's own
// class, while giving flexibility to add other buttons to the same div