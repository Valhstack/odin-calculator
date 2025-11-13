document.addEventListener('keydown', (event) => {
    const allButtons = document.querySelectorAll("button");

    allButtons.forEach(btn => {
        const keys = btn.dataset.num ? btn.dataset.num.split(",").map(k => k.trim()) : [];

        if (keys.includes(event.key)) {
            event.preventDefault();
            btn.click();
        }
    })
})