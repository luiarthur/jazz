function makeModes() {
    const modes = {
        // Major scale modes.
        ionian: {scale: "1 2 3 4 5 6 7", from: "major", start: 1},
        dorian: {scale: "1 2 b3 4 5 6 b7", from: "major", start: 2},
        phrygian: {scale: "1 b2 b3 4 5 b6 b7", from: "major", start: 3},
        lydian: {scale: "1 2 3 #4 5 6 7", from: "major", start: 4},
        mixolydian: {scale: "1 2 3 4 5 6 b7", from: "major", start: 5},
        aeolian: {scale: "1 2 b3 4 5 b6 b7", from: "major", start: 6},
        locrian: {scale: "1 b2 b3 4 b5 b6 b7", from: "major", start: 7},
        // Minor scale modes.
        "jazz melodic minor": {
            scale: "1 2 b3 4 5 6 7", from: "melodic minor asc", start: 1
        },
        "dorian b2": {
            scale: "1 b2 b3 4 5 6 b7", from: "melodic minor asc", start: 2
        },
        "lydian augmented": {
            scale: "1 2 3 #4 #5 6 7", from: "melodic minor asc", start: 3
        },
        "lydian dominant": {
            scale: "1 2 3 #4 5 6 b7", from: "melodic minor asc", start: 4
        },
        "mixolydian b6": {
            scale: "1 2 3 4 5 b6 b7", from: "melodic minor asc", start: 5
        },
        "half diminished": {
            scale: "1 2 b3 4 b5 b6 b7", from: "melodic minor asc", start: 6,
            alias: ["locrian b2"]
        },
        "altered scale": {
            scale: "1 b2 b3 b4 b5 b6 b7", from: "melodic minor asc", start: 7,
            alias: ["super locrian"]
        },
        // Special Scales
        "diminished": {
            scale: "1 b2 b3 b4 b5 5 6 b7", from: "special", start: null,
            alias: ["half-whole"]
        }
        // TODO: Complete the following:
        // - Major Blues
        // - Minor Blues
        // - Major Pentatonic
        // - Minor Pentatonic
        // - HW (diminished)
        // - Major Bebop
        // - Melodic Minor Bebop
        // - Harmonic Minor Bebop
        // - Dominant Bebop: 1 2 3 4 5 b6 b7 7
    }

    for (const name in modes) {
        modes[name].mode = name
    }
    return modes
}

const modes = makeModes()

const scaleOptions = {
    "M7": ["ionian", "lydian"],
    "M6": ["ionian", "lydian"],
    "m7": ["dorian", "aeolian"],
    "m6": ["dorian"],
    "mM7": ["jazz melodic minor"],
    "7": ["mixolydian", "altered scale", "lydian dominant"],
    "dim": ["diminished"],
    "m7b5": ["half diminished", "locrian"],
    "7alt": ["altered scale"],
}

function makeImpliedChords() {
    const impliedChords = {}

    for (const chord in scaleOptions) {
        const scales = scaleOptions[chord]
        scales.forEach(scale => {
            !(scale in impliedChords) && (impliedChords[scale] = [])
            impliedChords[scale].push(chord)
        })
    }

    return impliedChords
}
const impliedChords = makeImpliedChords()

export { modes, scaleOptions, impliedChords }