import { modes, scaleOptions, impliedChords } from "./scales.js"
import { renderNavBar, tag } from "./navbar.js"
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm"
import { exercises } from "./exercises.js"
import "./disqus.js"

const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1)

function renderTable({id, headers, data}) {
    // Style the table.
    d3.select(id).node().classList.add(
        "table", "table-striped", "table-bordered"
    )
    const thead = d3.select(id).append("thead").classed("table-dark", true)
    const tbody = d3.select(id).append("tbody")

    // Make headers.
    thead.append("tr")
         .selectAll("th")
         .data(headers)
         .enter()
         .append("th").text(d => capitalize(d))

    // Append rows.
    const rows = tbody.selectAll("tr")
        .data(data)
        .enter()
        .append('tr')

    // Fill out elements in rows.
    rows.selectAll('td')
        .data(row => headers.map(key => row[key]))
        .enter()
        .append('td')
        .text(d => d)
}

function renderModes(id) {
    renderTable({
        id: id,
        data: modes,
        headers: ["name", "scale", "from", "start"]
    })
}

function renderScaleOptions(id) {
    renderTable({
        id: id,
        headers: ["chord", "scales"],
        data: scaleOptions
    })
}

function renderImpliedChords(id) {
    renderTable({
        id: id,
        headers: ["scale", "chords"],
        data: impliedChords
    }) 
}

// FIXME: Does not redraw on resize ...
// document.addEventListener("resize", (event) => {
//     renderExercise(exercises)
// })
function renderExercise(selector, exercises) {
    const exerciseDiv = document.querySelector(selector)

    const staffwidth = exerciseDiv.offsetWidth - 20

    // Create HTML.
    exercises.forEach(exercise => {
        const h5 = tag({type: "h5"})
        h5.append(
            document.createTextNode(exercise.name)
        )
        exerciseDiv.append(h5)
        exerciseDiv.append(
            tag({type: "div", id: exercise.id})
        )
        exerciseDiv.append(tag({type: "br"}))
    })

    const id = exercises.map(obj => obj.id)
    const abc = exercises.map((obj, i) => {
        let music = [`X:${i}`, "L:1", "K:C"].join("\n") 
        music += "\n|:"
        music += obj.abc.join("|")
        music += ":|"
        console.log(music)
        return music
    })

    ABCJS.renderAbc(
        id,
        abc.join("\n"),
        {
            wrap: true,
            staffwidth: staffwidth,
            jazzchords: true
        }
    )
}

function main() {
    // Main.
    renderModes("#table-scales")
    renderScaleOptions("#table-scale-options")
    renderImpliedChords("#table-implied-chords")
    renderNavBar("#navbar-anchor")
    renderExercise("#exercises", exercises)

    // Test. Remove when done.
    console.log(modes)
    console.log(scaleOptions)
    console.log(impliedChords)
}

main()