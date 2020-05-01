# CODO
Library for Grove micro:bit project board
https://www.a4.fr/carte-de-prototypage-microbit-codo.html

![](icon.png)  

## Examples with Blocks :

### Robot Control by hand

Control the robot with your hand

```blocks
let dir = 0
basic.forever(function () {
    dir = CODO.grove_gesture_reads()
    if (dir == 1) {
        CODO.robotMove(CODO.RobotDirection.Forward, 50)
        control.waitMicros(1000000)
    } else if (dir == 2) {
        CODO.robotMove(CODO.RobotDirection.Reverse, 50)
        control.waitMicros(1000000)
    } else if (dir == 3) {
        CODO.robotMove(CODO.RobotDirection.RotateLef, 50)
        control.waitMicros(1000000)
    } else if (dir == 4) {
        CODO.robotMove(CODO.RobotDirection.RotateRight, 50)
        control.waitMicros(1000000)
    }
})
```

### Robot move until first obstable

Robot go forward until the first wall

```blocks
basic.forever(function () {
    if (CODO.collisionSensor(CODO.BP.BPA) == true || CODO.collisionSensor(CODO.BP.BPB) == true) {
        CODO.motorStop()
    } else {
        CODO.robotMove(CODO.RobotDirection.Forward, 50)
    }
})
```

### Send color value to serial line

```blocks
basic.forever(function () {
    serial.writeNumbers([CODO.color(CODO.Color.Red), CODO.color(CODO.Color.Green), CODO.color(CODO.Color.Blue), CODO.color(CODO.Color.Clear)])
})
```

## Examples with JavaScript :

### Robot forward at 75%

```blocks
CODO.robotMove(CODO.RobotDirection.Forward, 75)
```
### Send red color value to serial line

```blocks
serial.writeLine(CODO.measureDistanceCentimeter(DigitalPin.P0))
```
### Rotation at 75% speed

```blocks
CODO.robotMove(CODO.RobotDirection.Forward, 75)
CODO.motorDir(CODO.Motors.Motor1, CODO.MotorDirection.Forward)
CODO.motorDir(CODO.Motors.Motor2, CODO.MotorDirection.Reverse)
```

## API :

### Motion :

- **function robotMove(dir: RobotDirection, speed: number)**

Control Robot speed [0-100%] and direction [forward,backward,turn left, turn right ...].

- **function motorDir(motor: Motors, dir: MotorDirection)**

Change the motor direction.

- **function motorSpeed(motor: Motors, speed: number)**

Change the motor speed.

- **function motorStop()**

Stop both motors.

### Sensors :

- **function measureDistanceCentimeter(name: DigitalPin)**

Return distance from ultrasonic range sensor (centimeter).
    
- **function potarValue(pin: AnalogPin)**

Return analog potentiometer value [0-1023].

- **function color(col: Color)**

Return color from i2c Grove Color Sensor v1.3 or v2.0. It autodetect the sensor version. Output value : [0;65534].

- **function grove_gesture_reads()**

Detect and recognize the gestures from Grove - Gesture
* None:0
* Right:1
* Left:2
* Up:3
* Down:4
* Forward:5
* Backward:6
* Clockwise:7
* Anticlockwise:8
* Wave:9
<br/>(from https://github.com/Seeed-Studio/pxt-grove)

- **function collisionSensor(pin: BP)**

Return collision sensor state [0-1].

- **function detectline(pin: DigitalPin)**

Return line sensor state [0-1].

- **function buttonState(pin: DigitalPin)**

Return button state [0-1].

### Display :

- **function digit_createDisplay(clkPin: DigitalPin, dataPin: DigitalPin)**

Create a new driver Grove - 4-Digit Display.<br/>
(from https://github.com/Seeed-Studio/pxt-grove)

- **function digit_show(dispData: number)**

Show a 4 digits number on 4-Digit Display<br/>
(from https://github.com/Seeed-Studio/pxt-grove)

- **function digit_set(level: number)**

Set the brightness level of 4-Digit Display at from 0 to 7<br/>
(from https://github.com/Seeed-Studio/pxt-grove)

- **function digit_clear()**

Clear the 4-Digit Display<br/>
(from https://github.com/Seeed-Studio/pxt-grove)

- **function ledState(pin: DigitalPin, state: OnOff)**

Set Led state [0-1]

### Actuator :

- **function setServoMotor(pin: AnalogPin, angle: number)**

Set the servomotor position.

## License

MIT

Copyright (c) 2020, A4 Technologie

## Supported targets

* for PXT/microbit
