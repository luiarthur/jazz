import { modes } from "./scales.js"

function renderModes(id) {
    const node = document.getElementById(id)
    for (const name in modes) {
        mode = modes[name]
        const li = document.createElement("li")
        li.innerHTML = `${name}: ${mode.scale}`
        node.appendChild(li)
    }
}

renderModes("ul-scales")

console.log(modes)