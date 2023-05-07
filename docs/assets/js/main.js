import { modes, scaleOptions, impliedChords } from "./scales.js"
import { renderNavBar } from "./navbar.js"
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm"
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

function renderMajor7(id) {}

function main() {
    // Main.
    renderModes("#table-scales")
    renderScaleOptions("#table-scale-options")
    renderImpliedChords("#table-implied-chords")
    renderNavBar("#navbar-anchor")
    renderMajor7("#div-major-7-circle")

    // Test. Remove when done.
    console.log(modes)
    console.log(scaleOptions)
    console.log(impliedChords)
}

main()