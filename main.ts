input.onSound(DetectedSound.Loud, function () {
    lights_on = !(false)
    if (lights_on) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        basic.clearScreen()
    }
})
let lights_on = false
input.setSoundThreshold(SoundThreshold.Loud, 128)
