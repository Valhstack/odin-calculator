document.addEventListener("click", (event) => {
  if (event.target.classList.contains("keyboardBtn") && !event.target.id) {
    calcKeyBoardOnClick(event);
  }
});

function calcKeyBoardOnClick(event) {
  if (result != null) {
    displayInfo.textContent = "";
    result = null;
  }

  let tempString = displayInfo.textContent + event.target.innerText;

  if (tempString.length == 10) {
    document.getElementById("calcDisplay").style["font-size"] = "28px";
  }

  if (tempString.length < maxLength) {
    displayInfo.textContent += event.target.innerText;
  }
  else {
    alert("Maximum 15 characters");
  }
}