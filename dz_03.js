let lightLevel = 0
basic.forever(function () {
    lightLevel = input.lightLevel()
    // insert "show leds" blocks
    if (lightLevel >= 128) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        basic.showLeds(`
            . # # # .
            # # # . .
            # # . . .
            # # # . .
            . # # # .
            `)
    }
})
