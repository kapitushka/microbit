let count = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.pause(500)
    count = randint(0, 6)
    if (count == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (count == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    } else if (count == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # . # #
            . . . . .
            . . . . .
            `)
    } else if (count == 3) {
        basic.showLeds(`
            . . . # #
            . . . . .
            . # # # .
            . . . . .
            # # . . .
            `)
    } else if (count == 4) {
        basic.showLeds(`
            # # . # #
            . . . . .
            . . . . .
            . . . . .
            # # . # #
            `)
    } else if (count == 5) {
        basic.showLeds(`
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            # # . # #
            `)
    } else if (count == 6) {
        basic.showLeds(`
            # # . # #
            . . . . .
            # # . # #
            . . . . .
            # # . # #
            `)
    }
})
