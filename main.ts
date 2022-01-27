input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Breve))
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(523, music.beat(BeatFraction.Breve))
})
music.playMelody("C D E F G A B C5 ", 120)
