let dir = 0
CODO.createDisplay(DigitalPin.P8, DigitalPin.P12)
CODO.set(7)
basic.forever(function () {
    dir = CODO.grove_gesture_reads()
    switch (dir) {
        case 1:
            CODO.robotMove(CODO.RobotDirection.Forward, 50)
            control.waitMicros(1000000)
            CODO.robotMove(CODO.RobotDirection.Stop, 0)
            break;
        case 2:
            CODO.robotMove(CODO.RobotDirection.Reverse, 50)
            control.waitMicros(1000000)
            CODO.robotMove(CODO.RobotDirection.Stop, 0)
            break;
        case 3:
            CODO.robotMove(CODO.RobotDirection.RotateLef, 25)
            control.waitMicros(1000000)
            CODO.robotMove(CODO.RobotDirection.Stop, 0)
            break;
        case 4:
            CODO.robotMove(CODO.RobotDirection.RotateRight, 25)
            control.waitMicros(1000000)
            CODO.robotMove(CODO.RobotDirection.Stop, 0)
            break;
    }
dir = 0
})

