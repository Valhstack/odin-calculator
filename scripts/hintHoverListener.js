let images = document.getElementsByClassName("hinge");

document.getElementById("hint").addEventListener("pointermove", () => {
    document.getElementById("hint-text").classList.remove("hidden");

    document.getElementById("hint-text").classList.add("hintText");

    if (!isMathFuncsOpenned)
        document.getElementById("calculator").style["margin-left"] = "230px";
    else {
        document.getElementById("calculator").style["margin-left"] = "0";
        document.getElementById("mathFuncsLeft").style["margin-left"] = "130px";
    }

    for (img of images) {
        if (img.classList.contains("left")) {
            img.style["left"] = "28.7%";
        }
        if (img.classList.contains("right")) {
            img.style["right"] = "27.45%"
        }
    }
})

document.getElementById("hint").addEventListener("pointerout", () => {
    document.getElementById("hint-text").classList.remove("hintText");

    document.getElementById("hint-text").classList.add("hidden");

    if (!isMathFuncsOpenned)
        document.getElementById("calculator").style["margin-left"] = "30px";
    else {
        document.getElementById("calculator").style["margin-left"] = "0";
        document.getElementById("mathFuncsLeft").style["margin-left"] = "-70px";
        document.getElementById("mathFuncsRight").style["margin-right"] = "-100px";
    }

    for (img of images) {
        if (img.classList.contains("closed")) {
            if (img.classList.contains("left")) {
                img.style["left"] = "7.5%";
            }
            if (img.classList.contains("right")) {
                img.style["right"] = "5%"
            }
        }
        else if (img.classList.contains("openned")) {
            if (img.classList.contains("left")) {
                img.style["left"] = "7.8%";
            }
            if (img.classList.contains("right")) {
                img.style["right"] = "5.2%"
            }
        }
    }
})