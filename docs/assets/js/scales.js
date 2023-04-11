function makeModes() {
    const modes = {
        ionian: {scale: "1 2 3 4 5 6 7", from: "major", start: 1},
        dorian: {scale: "1 2 b3 4 5 6 b7", from: "major", start: 2},
        phrygian: {scale: "1 b2 b3 4 5 b6 b7", from: "major", start: 3},
        lydian: {scale: "1 2 3 #4 5 6 7", from: "major", start: 4},
        mixolydian: {scale: "1 2 3 4 5 6 b7", from: "major", start: 5},
        aeolian: {scale: "1 2 b3 4 5 b6 b7", from: "major", start: 6},
        locrian: {scale: "1 b2 b3 4 b5 b6 b7", from: "major", start: 7},
    }

    for (const name in modes) {
        modes[name].name = name
    }
    return modes
}

const modes = makeModes()

export { modes }