import { modes, scaleOptions, impliedChords } from "./scales.js"
import "./disqus.js"

function create(tag, html) {
    const elem = document.createElement(tag)
    if (html) {
        elem.innerHTML = html
    }
    return elem
}

function renderModes(id) {
    const node = document.getElementById(id)
    const thead = create("thead")
    const tr = create("tr")

    const headers = ["mode", "scale", "from", "start"]
    headers.forEach(header => {
        const th = create("th", header)
        tr.appendChild(th)
    })
    thead.appendChild(tr)

    const tbody = create("tbody")
    for (const name in modes) {
        const mode = modes[name]
        const tr = create("tr")

        headers.forEach(item => {
            const td = create("td", mode[item])
            tr.appendChild(td)
        })

        tbody.appendChild(tr)
    }

    node.appendChild(thead)
    node.appendChild(tbody)
}

function renderScaleOptions(id) {
    const node = document.getElementById(id)

    // Header
    const thead = create("thead")
    const tr = create("tr")
    const headers = ["Chord Symbol", "Scale"]

    headers.forEach(header => {
        const th = create("th", header)
        tr.appendChild(th)
    })
    thead.appendChild(tr)

    // Body
    const tbody = create("tbody")
    for (const chord in scaleOptions) {
        const scales = scaleOptions[chord].join(", ")
        const tr = create("tr")

        tr.appendChild(create("td", chord))
        tr.appendChild(create("td", scales))
        tbody.appendChild(tr)
    }

    node.appendChild(thead)
    node.appendChild(tbody)
}

function renderImpliedChords(id) {
    const node = document.getElementById(id)

    // Header
    const thead = create("thead")
    const tr = create("tr")

    const headers = ["Scale", "Chord Symbols"]
    headers.forEach(header => {
        const th = create("th", header)
        tr.appendChild(th)
    })
    thead.appendChild(tr)

    // Body
    const tbody = create("tbody")
    for (const scale in impliedChords) {
        const chord = impliedChords[scale].join(", ")
        const tr = create("tr")

        tr.appendChild(create("td", scale))
        tr.appendChild(create("td", chord))
        tbody.appendChild(tr)
    }

    node.appendChild(thead)
    node.appendChild(tbody)

 }

function main() {
    // Main.
    renderModes("table-scales")
    renderScaleOptions("table-scale-options")
    renderImpliedChords("table-implied-chords")

    // Test. Remove when done.
    console.log(modes)
    console.log(scaleOptions)
    console.log(impliedChords)
}

main()