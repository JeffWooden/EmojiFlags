var colors;
var parts;

function updateParts(){
    parts = Array.from(document.querySelectorAll(".flag-canvas > .part"));
    return;
}

document.addEventListener("DOMContentLoaded", () => {
    // Colors' buttons
    colors = Array.from(document.querySelectorAll(".button.color")).map(button => {
        return {color: button.getAttribute("data-color"), button: button}
    });
    colors.forEach(item => {
        button = item.button;
        button.style["backgroundColor"] = button.getAttribute("data-color");
        button.addEventListener('click', e => {
            e.preventDefault();
            changeColor(button.getAttribute("data-color"));
        })
    });

    // Loading + creating buttons' events
    Array.from(document.querySelectorAll('.button')).forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();
            if(button.classList.contains("part")){
                parts.forEach(part => {
                    part.classList.remove("active")
                })
                button.classList.add("active")
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
})