gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Up, function () {
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    radio.sendNumber(13)
})
gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Up, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    radio.sendNumber(11)
})
gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Down, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . . . . .
        . . . . .
        `)
    radio.sendNumber(10)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    radio.sendNumber(1)
})
gamePad.onEvent(GamerBitPin.P2, GamerBitEvent.Up, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    radio.sendNumber(7)
})
gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Down, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `)
    radio.sendNumber(12)
})
gamePad.onEvent(GamerBitPin.P13, GamerBitEvent.Down, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    radio.sendNumber(8)
})
gamePad.onEvent(GamerBitPin.P8, GamerBitEvent.Up, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    radio.sendNumber(15)
})
gamePad.onEvent(GamerBitPin.P1, GamerBitEvent.Up, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    radio.sendNumber(5)
})
gamePad.onEvent(GamerBitPin.P8, GamerBitEvent.Down, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    radio.sendNumber(14)
})
gamePad.onEvent(GamerBitPin.P1, GamerBitEvent.Down, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        . . . . .
        . . . . .
        `)
    radio.sendNumber(4)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Pitchfork)
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    radio.sendNumber(2)
})
gamePad.onEvent(GamerBitPin.P13, GamerBitEvent.Up, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    radio.sendNumber(9)
})
gamePad.onEvent(GamerBitPin.P2, GamerBitEvent.Down, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    radio.sendNumber(6)
})
radio.setGroup(77)
gamePad.vibratorMotorSpeed(255)
gamePad.vibratorMotor(gamePad.Vibrator.V1)
basic.pause(200)
gamePad.vibratorMotor(gamePad.Vibrator.V0)
basic.showIcon(IconNames.Fabulous)
gamePad.vibratorMotor(gamePad.Vibrator.V1)
gamePad.led(gamePad.Led.ON)
basic.pause(500)
gamePad.vibratorMotor(gamePad.Vibrator.V0)
gamePad.led(gamePad.Led.OFF)
basic.forever(function () {
	
})
