/**
 * Library for Grove micro:bit project board https://www.a4.fr/carte-de-prototypage-microbit-codo.html
 */


//% weight=1 color=#004696 icon="\uf121" block="CODO" advanced=false
//% groups=['Motion', 'Sensors']
namespace CODO {
    export enum MotorDirection {
        //% block="Forward"
        Forward = 1,
        //% block="Backward"
        Reverse = 2,
        //% block="Stop"
        Stop = 0
    }

    export enum RobotDirection {
        //% block="Forward"
        Forward,
        //% block="Backward"
        Reverse,
        //% block="Turn Right"
        TurnRigh,
        //% block="Turn Left"
        TurnLef,
        //% block="Rotate Right"
        RotateRight,
        //% block="Rotate Left"
        RotateLef,
        //% block="Stop"
        Stop
    }

    export enum Motors {
        //%blockId=A4_Robot_Driver_motor_one
        //% block="left motor"
        Motor1,
        //%blockId=A4_Robot_Driver_motor_two
        //% block="right motor"
        Motor2,
        //%blockId=A4_Robot_Driver_motor_full
        //% block="left and right motor"
        MotorFull
    }
    
    export enum Color {
        //% block="Red"
        Red,
        //% block="Green"
        Green,
        //% block="Blue"
        Blue,
        //% block="Clear"
        Clear
    }

    export let _speed_left = 700; //1023 = 100% speed
    export let _speed_right = 700;
    export let _dir_right = 1; //0 = stop, 1 = forward, 2 = backward
    export let _dir_left = 1;
    export let identifiant = 0;
    
    /**
     * Control Robot speed
     * @param dir direction
     * @param speed speed in %
     */
    //% blockId=RobotDriverRobotMove
    //% block="CODO %dir| speed %speed %"
    //% speed.min=0 speed.max=100
    //% parts="RobotDriver" advanced=false
    //% speed.defl=75
    //% group="Motion"
    export function robotMove(dir: RobotDirection, speed: number): void {
        setSpeed(Motors.MotorFull, speed);
        switch (dir) {
            case RobotDirection.Forward:
                setDir(Motors.MotorFull, MotorDirection.Forward);
                break
            case RobotDirection.Reverse:
                setDir(Motors.MotorFull, MotorDirection.Reverse);
                break
            case RobotDirection.RotateRight:
                setDir(Motors.Motor1, MotorDirection.Forward);
                setDir(Motors.Motor2, MotorDirection.Reverse);
                break
            case RobotDirection.RotateLef:
                setDir(Motors.Motor1, MotorDirection.Reverse);
                setDir(Motors.Motor2, MotorDirection.Forward);
                break
            case RobotDirection.TurnRigh:
                setDir(Motors.Motor1, MotorDirection.Forward);
                setDir(Motors.Motor2, MotorDirection.Stop);
                break
            case RobotDirection.TurnLef:
                setDir(Motors.Motor1, MotorDirection.Stop);
                setDir(Motors.Motor2, MotorDirection.Forward);
                break
            case RobotDirection.Stop:
                setDir(Motors.MotorFull, MotorDirection.Stop);
                break
        }
        setMotors();
    }


    /**
     * get distance from ultrasonic range sensor
     * @param pin Input pin
     */
    //% blockId=RobotDriverultrasonic_cm 
    //% block="ultrasonic - Measure distance|%name| (cm)"
    //% name.fieldEditor="gridpicker" 
    //% name.fieldOptions.columns=5
    //% name.fieldOptions.tooltips="false"
    //% name.fieldOptions.width="0"
    //% group="Sensors"
    export function measDistCm(name: DigitalPin): number {
        let duration = 0;
        let distance = 0;
        pins.digitalWritePin(name, 0); //make sure pin is low
        control.waitMicros(2);
        pins.digitalWritePin(name, 1); //send echo
        control.waitMicros(20);
        pins.digitalWritePin(name, 0);
        duration = pins.pulseIn(name, PulseValue.High, 50000); // Max duration 50 ms - receive echo
        distance = duration * 153 / 29 / 2 / 100;
        Math.constrain(distance, 0, 500);
        return distance;
    }

    /**
     * Set the servomotor position
     * @param pin servomotor pin (right or left)
     */
    //% blockId=RobotDriverservodegrees
    //% block="set the servomotor |%pin| at |%angle| degree"
    //% parts="RobotDriver" advanced=false
    //% angle.shadow="protractorPicker"
    //% angle.defl=90
    //% group="Motion"
    export function setServoMotor(pin: AnalogPin, angle: number): void {
        pins.servoWritePin(pin, Math.constrain(angle, 0, 180));
    }

    /**
     * Change the motor direction
     * @param motor selection (left, right)
     * @param dir rotation direction (forward, backward)
     */

    //% blockId=RobotDrivermotordir
    //% block="set %motor| %dir"
    //% parts="RobotDriver" advanced=true
    //% motor.defl=MotorFull
    //% group="Motion"
    export function motorDir(motor: Motors, dir: MotorDirection): void {
        setDir(motor, dir);
        setMotors();
    }

    /**
     * Change the motor speed
     * @param motor selection (left, right)
     * @param new speed (0-100%)
     */
    
    //% blockId=robotdrivermotorspeed
    //% block="set speed %motor| to %speed %"
    //% speed.min=0 speed.max=100
    //% parts="A4_Robot_Driver" advanced=true
    //% speed.defl=75
    //% group="Motion"
    export function motorSpeed(motor: Motors, speed: number): void {
        setSpeed(motor, speed);
        setMotors();
    }

     /**
     * Get color from I2C Grove Color Sensor v1.3 or v2.0
     * output value : [0;65534]
     * @param selected color
     */
    //% blockId="grovecolorsensorgetcolor" 
    //% block="color - %Color value"
    //% group="Sensors"
    //% block.loc.fr="Valeur de la couleur %Color du capteur de couleur grove"
    //% jsdoc = "Grab sensor value from grove color sensor"
    export function color(col: Color): NumberFormat.UInt16BE {
        let nums, red, green, blue, clear: number;

        if (identifiant == 0) {   // No sensor previously detected
            pins.i2cWriteNumber(57, 132, NumberFormat.UInt8BE, false);
            nums = pins.i2cReadNumber(57, NumberFormat.UInt8BE, false);
            if (nums == 17) {     // Grove Sensor v1.3 detected
                identifiant = 1;
                pins.i2cWriteNumber(57, 129, NumberFormat.UInt8BE, false);
                pins.i2cWriteNumber(57, 0, NumberFormat.UInt8BE, true);
                pins.i2cWriteNumber(57, 135, NumberFormat.UInt8BE, false);
                pins.i2cWriteNumber(57, 48, NumberFormat.UInt8BE, true);
                pins.i2cWriteNumber(57, 128, NumberFormat.UInt8BE, false);
                pins.i2cWriteNumber(57, 3, NumberFormat.UInt8BE, true);
                basic.pause(50);
            } else {
                pins.i2cWriteNumber(41, 146, NumberFormat.UInt8BE, false);
                nums = pins.i2cReadNumber(41, NumberFormat.UInt8BE, false);
                if (nums == 68) {     // Grove Sensor v2 detected 
                    identifiant = 2;
                    pins.i2cWriteNumber(41, 129, NumberFormat.UInt8BE, false);
                    pins.i2cWriteNumber(41, 249, NumberFormat.UInt8BE, true);
                    pins.i2cWriteNumber(41, 143, NumberFormat.UInt8BE, false);
                    pins.i2cWriteNumber(41, 2, NumberFormat.UInt8BE, true);
                    pins.i2cWriteNumber(41, 128, NumberFormat.UInt8BE, false);
                    pins.i2cWriteNumber(41, 1, NumberFormat.UInt8BE, true);
                    basic.pause(50);
                    pins.i2cWriteNumber(41, 128, NumberFormat.UInt8BE, false);
                    pins.i2cWriteNumber(41, 3, NumberFormat.UInt8BE, true);
                    basic.pause(500);
                }
            }
        }

        if (identifiant == 1) {    // Grove Sensor v1.3 detected
            switch (col) {
                case Color.Red:
                    pins.i2cWriteNumber(57, 210, NumberFormat.UInt8BE, false);
                    red = pins.i2cReadNumber(57, NumberFormat.UInt16BE, true);
                    return swap16(red)
                    break
                case Color.Green:
                    pins.i2cWriteNumber(57, 208, NumberFormat.UInt8BE, false);
                    green = pins.i2cReadNumber(57, NumberFormat.UInt16BE, true);
                    return swap16(green)
                    break
                case Color.Blue:
                    pins.i2cWriteNumber(57, 212, NumberFormat.UInt8BE, false);
                    blue = pins.i2cReadNumber(57, NumberFormat.UInt16BE, true);
                    return swap16(blue)
                    break
                case Color.Clear:
                    pins.i2cWriteNumber(57, 214, NumberFormat.UInt8BE, false);
                    clear = pins.i2cReadNumber(57, NumberFormat.UInt16BE, true);
                    return swap16(clear)
                    break
            }
        }
        else if (identifiant == 2) {
            switch (col) {
                case Color.Red:
                    pins.i2cWriteNumber(41, 150, NumberFormat.UInt8BE, false);
                    red = pins.i2cReadNumber(41, NumberFormat.UInt16BE, true);
                    return swap16(red)
                    break
                case Color.Green:
                    pins.i2cWriteNumber(41, 152, NumberFormat.UInt8BE, false);
                    green = pins.i2cReadNumber(41, NumberFormat.UInt16BE, true);
                    return swap16(green)
                    break
                case Color.Blue:
                    pins.i2cWriteNumber(41, 154, NumberFormat.UInt8BE, false);
                    blue = pins.i2cReadNumber(41, NumberFormat.UInt16BE, true);
                    return swap16(blue)
                    break
                case Color.Clear:
                    pins.i2cWriteNumber(41, 148, NumberFormat.UInt8BE, false);
                    clear = pins.i2cReadNumber(41, NumberFormat.UInt16BE, true);
                    return swap16(clear)
                    break
            }
            return 0;
        }
        return 0;
    }
   
    /*
     * Private functions
     */
    function swap16(val: NumberFormat.UInt16BE) {
        return ((val & 0xFF) << 8)
            | ((val >> 8) & 0xFF);
    }

    function setDir(motor: Motors, dir: MotorDirection): void {
        switch (motor) {
            case Motors.Motor1: //gauche
                _dir_left = dir;
                break
            case Motors.Motor2: //droit
                _dir_right = dir;
                break
            case Motors.MotorFull: //droit
                _dir_left = dir;
                _dir_right = dir;
                break
        }
    }

    function setSpeed(motor: Motors, speed: number): void {
        let corrected_speed = Math.min(Math.map(speed, 0, 100, 0, 1023), 1023);
        switch (motor) {
            case Motors.Motor1:
                _speed_left = corrected_speed;
                break
            case Motors.Motor2:
                _speed_right = corrected_speed;
                break
            case Motors.MotorFull:
                _speed_left = corrected_speed;
                _speed_right = corrected_speed;
                break
        }
    }

    function setMotors(): void {
        if (_dir_right == 1) {
            pins.digitalWritePin(DigitalPin.P15, 0);
            pins.analogWritePin(AnalogPin.P16, _speed_right);
        } else if (_dir_right == 2) {
            pins.analogWritePin(AnalogPin.P15, _speed_right);
            pins.digitalWritePin(DigitalPin.P16, 0);
        } else {
            pins.digitalWritePin(DigitalPin.P15, 0);
            pins.digitalWritePin(DigitalPin.P16, 0);
        }
        if (_dir_left == 1) {
            pins.digitalWritePin(DigitalPin.P13, 0);
            pins.analogWritePin(AnalogPin.P14, _speed_left);
        } else if (_dir_left == 2) {
            pins.analogWritePin(AnalogPin.P13, _speed_left);
            pins.digitalWritePin(DigitalPin.P14, 0);
        } else {
            pins.digitalWritePin(DigitalPin.P13, 0);
            pins.digitalWritePin(DigitalPin.P14, 0);
        }
    }
}
