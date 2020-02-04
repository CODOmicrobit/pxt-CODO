//% Test function for i2c grove color sensor v1.3 or v2.0
//% It send color value over usb serial
basic.forever(function () {
    serial.writeLine("Red:" + Grove_Color_Sensor.get_color(Color.Red) + " - Blue:" + Grove_Color_Sensor.get_color(Color.Blue) + "- Green:" + Grove_Color_Sensor.get_color(Color.Green) + "- Clear:" + Grove_Color_Sensor.get_color(Color.Clear))
    control.waitMicros(500000)
})
