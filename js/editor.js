document.addEventListener("DOMContentLoaded", () => {
    // Loading + creating buttons' events
    Array.from(document.querySelectorAll('.colors > .color')).forEach(colorButton => {
        colorButton.style["backgroundColor"] = colorButton.getAttribute("data-color");
        colorButton.addEventListener('click', e => {
            e.preventDefault();
            changeColor(colorButton.getAttribute("data-color"));
        })
    })
})