var colors;
var parts;

function updateParts(){
    parts = Array.from(document.querySelectorAll(".flag-canvas > .part"));
    return;
}

function createPart(){
    element = document.createElement("a")
    element.setAttribute("href", "#")
    element.classList.add("button", "part", "active")
    element.addEventListener('click', e => {
        e.preventDefault();
        parts.forEach(part => {
            part.classList.remove("active")
        });
        colors.forEach(item => {item.button.classList.remove("active")})
        try{colors.filter(item => item.color[0] == e.target.getAttribute("data-color"))[0].button.classList.add("active")}catch(err){return console.error(`Can't find the color "${e.target.getAttribute("data-color")}"`)} finally { e.target.classList.add("active") }
    });
    currentPart = document.querySelector(".part.active")
    if(currentPart == null) {
        document.querySelector(".flag-canvas").appendChild(element)
    } else {
        currentPart.classList.remove("active")
        currentPart.parentElement.insertBefore(element, currentPart.nextSibling)
    }
    changeColor('white')
}

function changeColor(colorName) {
    colors.forEach(item => item.button.classList.remove("active"))
    color = colors.filter(item => item.color[0] == colorName)[0]
    color.button.classList.add("active")
    part = document.querySelector(".part.active")
    part.style["background-color"] = color.color[1];
    part.setAttribute("data-color", colorName)
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
            changeColor(e.target.getAttribute("id"));
        })
    });

    // Loading + creating buttons' events
    Array.from(document.querySelectorAll('.button')).forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();
            updateParts();

            switch(button.getAttribute("id")){
                case "columns":
                case "rows":
                case "reset":
                case "plus":
                    createPart();
                    updateParts();
                    break;
                case "minus":
                    if(parts.length == 1) break;
                    element = document.querySelector(".part.active")
                    try {
                        element.previousElementSibling.click()
                    } catch(err) {
                        element.nextElementSibling.click()
                    } finally {
                        element.remove();
                        updateParts();
                    }
                    break;
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