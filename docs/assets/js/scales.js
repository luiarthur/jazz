const modes = [
    // Major scale modes.
    {name: "ionian", scale: "1 2 3 4 5 6 7", from: "major", start: 1},
    {name: "dorian", scale: "1 2 b3 4 5 6 b7", from: "major", start: 2},
    {name: "phrygian", scale: "1 b2 b3 4 5 b6 b7", from: "major", start: 3},
    {name: "lydian", scale: "1 2 3 #4 5 6 7", from: "major", start: 4},
    {name: "mixolydian", scale: "1 2 3 4 5 6 b7", from: "major", start: 5},
    {name: "aeolian", scale: "1 2 b3 4 5 b6 b7", from: "major", start: 6},
    {name: "locrian", scale: "1 b2 b3 4 b5 b6 b7", from: "major", start: 7},
    // Minor scale modes.
    {
        name: "jazz melodic minor", scale: "1 2 b3 4 5 6 7",
        from: "melodic minor asc", start: 1
    },
    {
        name: "dorian b2", scale: "1 b2 b3 4 5 6 b7",
        from: "melodic minor asc", start: 2
    },
    {
        name: "lydian augmented", scale: "1 2 3 #4 #5 6 7",
        from: "melodic minor asc", start: 3
    },
    {
        name: "lydian dominant", scale: "1 2 3 #4 5 6 b7",
        from: "melodic minor asc", start: 4
    },
    {
        name: "mixolydian b6", scale: "1 2 3 4 5 b6 b7",
        from: "melodic minor asc", start: 5
    },
    {
        name: "half diminished", scale: "1 2 b3 4 b5 b6 b7",
        from: "melodic minor asc", start: 6, alias: ["locrian b2"]
    },
    {
        name: "altered scale", scale: "1 b2 b3 b4 b5 b6 b7",
        from: "melodic minor asc", start: 7, alias: ["super locrian"]
    },
    // Special Scales
    {
        name: "diminished",
        scale: "1 b2 b3 b4 b5 5 6 b7", from: "special", start: null,
        alias: ["half-whole"]
    },
    {
        name: "major blues",
        scale: "1 2 b3 3 5 6", from: "special", start: null
    },
    {
        name: "minor blues",
        scale: "1 b3 4 b5 b b7", from: "special",
        start: null
    },
    {
        name: "major pentatonic",
        scale: "1 2 3 5 6", from: "special", start: null
    },
    {
        name: "minor pentatonic",
        scale: "1 b3 4 5 b7", from: "special", start: null
    },
    {
        name: "whole tone",
        scale: "1 2 3 #4 #5 #6", from: "special", start: null
    },
    {
        name: "major bebop",
        scale: "1 2 3 4 5 #5 6 7", from: "special", start: null
    },
    {
        name: "melodic minor bebop",
        scale: "1 2 b3 4 5 #5 6 7", from: "special", start: null
    },
    {
        name: "harmonic minor bebop",
        scale: "1 2 b3 4 5 b6 b7 7", from: "special", start: null
    },
    {
        name: "dominant bebop",
        scale: "1 2 3 4 5 b6 b7 7", from: "special",
        start: null
    }
]

const scaleOptions = [
    {chord: "M7", scales: ["ionian", "lydian"]},
    {chord: "M6", scales: ["ionian", "lydian"]},
    {chord: "m7", scales: ["dorian", "aeolian"]},
    {chord: "m6", scales: ["dorian"]},
    {chord: "mM7", scales: ["jazz melodic minor"]},
    {chord: "7", scales: ["mixolydian", "altered scale", "lydian dominant"]},
    {chord: "dim", scales: ["diminished"]},
    {chord: "m7b5", scales: ["half diminished", "locrian"]},
    {chord: "7alt", scales: ["altered scale"]}
]

function makeImpliedChords() {
    const impliedChords = {}

    scaleOptions.forEach(data => {
        data.scales.forEach(scale => {
            !(scale in impliedChords) && (impliedChords[scale] = [])
            impliedChords[scale].push(data.chord)
        })
    })

    const scales = Object.keys(impliedChords)
    return scales.map(scale => ({
        "scale": scale,
        chords: impliedChords[scale].join(", ")
    }))
}
const impliedChords = makeImpliedChords()

export { modes, scaleOptions, impliedChords }