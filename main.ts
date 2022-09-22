input.onButtonPressed(Button.A, function () {
    amusic = randint(0, 2)
    if (amusic == 0) {
        serial.writeLine("Song: Hopeful by MakeCode")
        music.playMelody("G B A G C5 B A B ", 120)
        music.playMelody("G B A G C5 B A B ", 120)
        music.playTone(440, music.beat(BeatFraction.Double))
    } else if (amusic == 1) {
        serial.writeLine("Song: Rising by MakeCode")
        music.playMelody("E D G F B A C5 B ", 120)
        music.playTone(523, music.beat(BeatFraction.Double))
    } else {
        serial.writeLine("Song: Mystery by MakeCode")
        music.playMelody("E B C5 A B G A F ", 120)
        music.playTone(330, music.beat(BeatFraction.Double))
    }
})
input.onButtonPressed(Button.AB, function () {
    serial.writeLine("Exiting Micro:Music Demo...")
    basic.showIcon(IconNames.EigthNote)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # # .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    music.playMelody("C5 B A G F E D C ", 120)
    serial.writeLine("Goodbye. Thanks for using Micro:Music Demo.")
    basic.showString("Goodbye")
})
input.onButtonPressed(Button.B, function () {
    bmusic = randint(0, 2)
    if (bmusic == 0) {
        serial.writeLine("Song: Sitka by MakeCode")
        music.playMelody("C5 G B A F A C5 B ", 120)
        music.playTone(523, music.beat(BeatFraction.Whole))
    } else if (bmusic == 1) {
        serial.writeLine("Song: C + New by CaptAwesomeJnr")
        music.playMelody("C D C E C F C G ", 120)
        music.playMelody("C A C B C C5 C5 C5 ", 120)
    } else {
        serial.writeLine("Song: Up Up Up by CaptAwesomeJnr")
        music.playMelody("C D E C D E F D ", 120)
        music.playMelody("E F G E F G A F ", 120)
        music.playMelody("G A B G A B C5 C ", 120)
    }
})
let bmusic = 0
let amusic = 0
music.playMelody("C D E F G A B C5 ", 120)
