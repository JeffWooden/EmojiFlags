document.addEventListener("DOMContentLoaded", () => {
    // Loading + creating buttons' events
    Array.from(document.querySelectorAll('.button')).forEach(button => {
        if(button.classList.includes("color")){
            button.style["backgroundColor"] = button.getAttribute("data-color");
            button.addEventListener('click', e => {
                e.preventDefault();
                changeColor(button.getAttribute("data-color"));
            })
        }
    })
})