input.onButtonPressed(Button.A, function () {
    Truth_to_Dare = randint(0, 1)
    if (Truth_to_Dare == 0) {
        basic.showString("Truth")
    } else {
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.B, function () {
    Arrow = randint(0, 3)
    if (Arrow == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (Arrow == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (Arrow == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (Arrow == 3) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    basic.clearScreen()
})
let Truth_to_Dare = 0
let Arrow = 0
Arrow = 0
Truth_to_Dare = 0
basic.showString("Lets Play Truth or Dare")
basic.forever(function () {
	
})
