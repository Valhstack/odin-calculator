document.getElementById("mathFuncsBtn").addEventListener("click", () => {
    if (!isMathFuncsOpenned) {
        isMathFuncsOpenned = true;

        for (img of images) {
            if (img.classList.contains("hinge")) {
                if (img.classList.contains("closed")) {
                    img.classList.add("hidden");
                }
                if (img.classList.contains("openned")) {
                    img.classList.remove("hidden");
                }
            }
        }

        document.getElementById("calculator").style["margin-left"] = "0";

        document.getElementById("mathFuncsLeft").classList.remove("hidden");
        document.getElementById("mathFuncsLeft").style["margin-left"] = "-70px";

        document.getElementById("mathFuncsRight").classList.remove("hidden");
        document.getElementById("mathFuncsRight").style["margin-right"] = "-100px";
    }
    else {
        isMathFuncsOpenned = false;

        for (img of images) {
            if (img.classList.contains("hinge")) {
                if (img.classList.contains("openned")) {
                    img.classList.add("hidden");
                }
                if (img.classList.contains("closed")) {
                    img.classList.remove("hidden");
                }
            }
        }

        document.getElementById("calculator").style["margin-left"] = "30px";

        document.getElementById("mathFuncsLeft").classList.add("hidden");
        document.getElementById("mathFuncsLeft").style["margin-left"] = "0";

        document.getElementById("mathFuncsRight").classList.add("hidden");
        document.getElementById("mathFuncsRight").style["margin-right"] = "0";
    }
})