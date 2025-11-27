let isMobileHint = false;

document.getElementById("mobileHint").addEventListener("click", () => {
    if (!isMobileHint) {
        isMobileHint = true;

        document.getElementById("mobile-hint").classList.remove("hidden");

        document.getElementById("mobile-hint").classList.add("hintText");
    }
    else {
        isMobileHint = false;

        document.getElementById("mobile-hint").classList.add("hidden");

        document.getElementById("mobile-hint").classList.remove("hintText");
    }
});