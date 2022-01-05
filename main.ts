input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
    music.playMelody("C D E C E C E - ", 120)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
    music.playMelody("E F G E G E G - ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    music.playMelody("D E F F E D F - ", 120)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("i love you stink")
    soundExpression.giggle.play()
})
basic.showIcon(IconNames.Pitchfork)
basic.forever(function () {
	
})
