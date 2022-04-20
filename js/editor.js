var colors;
var parts;

function updateParts(){
    parts = Array.from(document.querySelectorAll(".flag-canvas > .part"));
    return;
}

document.addEventListener("DOMContentLoaded", () => {
    // Colors' buttons
    colors = Array.from(document.querySelectorAll(".button.color")).map(button => {
        return {color: [button.getAttribute("id"),button.getAttribute("data-color")], button: button}
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
                colors.forEach(item => {item.button.classList.remove("active")})
                try{colors.filter(item => item.color[0] == button.getAttribute("data-color"))[0].button.classList.add("active")}catch(err){return console.error(`Can't find the color "${button.getAttribute("data-color")}"`)} finally { button.classList.add("active") }
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