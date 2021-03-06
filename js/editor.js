var colors;
var parts;

select = document.querySelector("#preset-selection")
Object.entries(presets).forEach((preset, i) => {
    el = document.createElement('option')
    if (i == 0) el.setAttribute("selected", "true")
    el.value = preset[0]
    el.innerHTML = `${preset[0]}'s flag`
    select.append(el)
})

function updateParts() {
    parts = Array.from(document.querySelectorAll(".flag-canvas > .part"));
    return;
}

function createPart(color = 'white') {
    element = document.createElement("a")
    element.setAttribute("href", "#")
    element.classList.add("button", "part", "active")
    element.addEventListener('click', e => {
        e.preventDefault();
        parts.forEach(part => {
            part.classList.remove("active")
        });
        colors.forEach(item => { item.button.classList.remove("active") })
        try { colors.filter(item => item.color[0] == e.target.getAttribute("data-color"))[0].button.classList.add("active") } catch (err) { return console.error(`Can't find the color "${e.target.getAttribute("data-color")}"`) } finally { e.target.classList.add("active") }
    });
    currentPart = document.querySelector(".part.active")
    if (currentPart == null) {
        document.querySelector(".flag-canvas").appendChild(element)
    } else {
        currentPart.classList.remove("active")
        currentPart.parentElement.insertBefore(element, currentPart.nextSibling)
    }
    changeColor(color)
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
        return { color: [button.getAttribute("id"), button.getAttribute("data-color")], button: button }
    });
    colors.forEach(item => {
        button = item.button;
        button.style["backgroundColor"] = button.getAttribute("data-color");
        button.addEventListener('click', e => {
            e.preventDefault();
            changeColor(e.target.getAttribute("id"));
        })
    });

    // Loading flag
    try {
        preset = /#(\w*)$/.exec(document.URL)[1]
        if (preset == "") throw null;
        presets[preset].forEach(flagColor => {
            createPart(flagColor)
        })
    } catch {
        presets.rainbow.forEach(flagColor => {
            createPart(flagColor)
        })
    } finally {
        updateParts();
    }

    // Loading + creating buttons' events
    Array.from(document.querySelectorAll('.button')).forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();
            updateParts();

            switch (button.getAttribute("id")) {
                case "preset-enter":
                    try {
                        Array.from(document.querySelectorAll(".part")).forEach(e => e.remove())
                        presets[select.value].forEach(flagColor => { createPart(flagColor) })
                    } catch {
                        alert("Unknown preset")
                    }
                    break;
                case "columns":
                    document.querySelector(".flag-canvas").classList.add("vertical");
                    break;
                case "rows":
                    document.querySelector(".flag-canvas").classList.remove("vertical");
                    break;
                case "reset":
                    Array.from(document.querySelectorAll(".part")).forEach(e => e.remove())
                    presets.rainbow.forEach(flagColor => createPart(flagColor))
                    updateParts();
                    break;
                case "plus":
                    createPart();
                    updateParts();
                    break;
                case "minus":
                    if (parts.length == 1) break;
                    element = document.querySelector(".part.active")
                    try {
                        element.previousElementSibling.click()
                    } catch (err) {
                        element.nextElementSibling.click()
                    } finally {
                        element.remove();
                        updateParts();
                    }
                    break;
                case "preview":
                    document.querySelector("#output").innerHTML = parts.map(part => choice(emojis[part.getAttribute("data-color").replace(/\-/g, "_")])).join('')
                    break;
                case "copy":
                    navigator.clipboard.writeText(document.querySelector("#output").innerHTML)
                    if (document.querySelector(".notifications span") != null) break;
                    el = document.createElement("span")
                    el.innerHTML = "Copied!"
                    setTimeout(() => {
                        el.classList.add("animate")
                        setTimeout(() => {
                            el.remove()
                        }, 210)
                    }, 10);
                    document.querySelector(".notifications").appendChild(el);
                    break;
            }
        })
    })
})