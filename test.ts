basic.forever(function () {
    serial.writeLine("Red:" + CODO.color(CODO.Color.Red) + " - Blue:" + CODO.color(CODO.Color.Blue) + "- Green:" + CODO.color(CODO.Color.Green) + "- Clear:" + CODO.color(CODO.Color.Clear))
    control.waitMicros(500000)
})

