document.addEventListener("click", (event) => {
  if (event.target.classList.contains("keyboardBtn")) {
    calcKeyBoardOnClick(event);
  }
});

function calcKeyBoardOnClick(event){
    if (result != null){
        displayInfo.textContent = "";
        result = null;
    }

    displayInfo.textContent += event.target.innerText;
}