# CODO
Library for Grove micro:bit project board
https://www.a4.fr/carte-de-prototypage-microbit-codo.html

Authors : A4 Technologie

Date : 02/02/2020

![](icon.png)  

## API :

### Motion :

- **function robotMove(dir: RobotDirection, speed: number)**
Control Robot speed [0-100%] and direction [forward,backward,turn left, turn right ...]

- **function setServoMotor(pin: AnalogPin, angle: number)**
Set the servomotor position

- **function motorDir(motor: Motors, dir: MotorDirection)**
Change the motor direction

- **function motorSpeed(motor: Motors, speed: number)**
Change the motor speed

### Sensors :

- **function measDistCm(name: DigitalPin)**
Return distance from ultrasonic range sensor
    
- **function get_color(col: Color)**
Return color from i2c Grove Color Sensor v1.3 or v2.0. It autodetect the sensor version. Output value : [0;65534]

## License

MIT

Copyright (c) 2020, A4 Technologie

## Supported targets

* for PXT/microbit
