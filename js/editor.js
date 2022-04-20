var colors;

document.addEventListener("DOMContentLoaded", () => {
    colors = Array.from(document.querySelectorAll(".button.color")).forEach(button => {
        button.style["backgroundColor"] = button.getAttribute("data-color");
        button.addEventListener('click', e => {
            e.preventDefault();
            changeColor(button.getAttribute("data-color"));
        }).map(button => {
            return {color: button.getAttribute("data-color"), button: button}
        })
    })
    // Loading + creating buttons' events
    Array.from(document.querySelectorAll('.button')).forEach(button => {
        if(button.classList.contains("part")){
            button.addEventListener('click', e => {
                e.preventDefault();
                parts = Array.from(document.querySelectorAll(".flag-canvas > .part")).forEach(part => {
                    part.classList.remove("active")
                })
                button.classList.add("active")
            })
        }

        switch(button.getAttribute("id")){
            case "columns":
            case "rows":
            case "reset":
            case "plus":
            case "minus":
            case "picker":
            case "save":
            case "preview":
            case "share":
            case "copy":
                break;
        }
    })
})