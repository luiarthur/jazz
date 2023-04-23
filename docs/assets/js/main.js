import { modes, scaleOptions, impliedChords } from "./scales.js"
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm"
import "./disqus.js"

const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1)

function renderModes(id) {
    const headers = ["name", "scale", "from", "start"]
    const thead = d3.select(id).append("thead")
    const tbody = d3.select(id).append("tbody")

    // Make headers.
    thead.append("tr")
         .selectAll("th")
         .data(headers)
         .enter()
         .append("th").text(d => capitalize(d))

    const rows = tbody.selectAll("tr")
        .data(modes)
        .enter()
        .append('tr')

    rows.selectAll('td')
        .data(row => headers.map(key => row[key]))
        .enter()
        .append('td')
        .text(d => d)
}

function renderScaleOptions(id) {
    const headers = ["chord", "scales"]
    const thead = d3.select(id).append("thead")
    const tbody = d3.select(id).append("tbody")

    // Make headers.
    thead.append("tr")
         .selectAll("th")
         .data(headers)
         .enter()
         .append("th").text(d => capitalize(d))

    const rows = tbody.selectAll("tr")
        .data(scaleOptions)
        .enter()
        .append('tr')

    rows.selectAll('td')
        .data(row => headers.map(key => 
            (key == "scales") ? row[key].join(", ") : row[key]
        ))
        .enter()
        .append('td')
        .text(d => d)
}

function renderImpliedChords(id) {
    const headers = ["scale", "chords"]
    const thead = d3.select(id).append("thead")
    const tbody = d3.select(id).append("tbody")

    // Make headers.
    thead.append("tr")
         .selectAll("th")
         .data(headers)
         .enter()
         .append("th").text(d => capitalize(d))

    const rows = tbody.selectAll("tr")
        .data(impliedChords)
        .enter()
        .append('tr')

    rows.selectAll('td')
        .data(row => headers.map(key => row[key]))
        .enter()
        .append('td')
        .text(d => d)
 }

function main() {
    // Main.
    renderModes("#table-scales")
    renderScaleOptions("#table-scale-options")
    renderImpliedChords("#table-implied-chords")

    // Test. Remove when done.
    console.log(modes)
    console.log(scaleOptions)
    console.log(impliedChords)
}

main()