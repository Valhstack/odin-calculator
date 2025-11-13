document.getElementById("hint").addEventListener("pointermove", () => {
    document.getElementById("hint-text").classList.remove("hidden");

    document.getElementById("hint-text").classList.add("hintText");

    document.getElementById("calculator").style["margin-left"] = "240px";
})

document.getElementById("hint").addEventListener("pointerout", () => {
    document.getElementById("hint-text").classList.remove("hintText");

    document.getElementById("hint-text").classList.add("hidden");

    document.getElementById("calculator").style["margin-left"] = "30px";
})