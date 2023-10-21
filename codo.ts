/**
 * Library for Grove micro:bit project board https://www.a4.fr/carte-de-prototypage-microbit-codo.html
 */

//% weight=10 color=#004696 icon="\uf121" block="CODO" advanced=false
//% groups=['Motors', 'Sensors', 'Actuators', 'Display', 'Communication']
namespace CODO {
    const initRegisterArray: number[] = [
        0xEF, 0x00, 0x32, 0x29, 0x33, 0x01, 0x34, 0x00, 0x35, 0x01, 0x36, 0x00, 0x37, 0x07, 0x38, 0x17,
        0x39, 0x06, 0x3A, 0x12, 0x3F, 0x00, 0x40, 0x02, 0x41, 0xFF, 0x42, 0x01, 0x46, 0x2D, 0x47, 0x0F,
        0x48, 0x3C, 0x49, 0x00, 0x4A, 0x1E, 0x4B, 0x00, 0x4C, 0x20, 0x4D, 0x00, 0x4E, 0x1A, 0x4F, 0x14,
        0x50, 0x00, 0x51, 0x10, 0x52, 0x00, 0x5C, 0x02, 0x5D, 0x00, 0x5E, 0x10, 0x5F, 0x3F, 0x60, 0x27,
        0x61, 0x28, 0x62, 0x00, 0x63, 0x03, 0x64, 0xF7, 0x65, 0x03, 0x66, 0xD9, 0x67, 0x03, 0x68, 0x01,
        0x69, 0xC8, 0x6A, 0x40, 0x6D, 0x04, 0x6E, 0x00, 0x6F, 0x00, 0x70, 0x80, 0x71, 0x00, 0x72, 0x00,
        0x73, 0x00, 0x74, 0xF0, 0x75, 0x00, 0x80, 0x42, 0x81, 0x44, 0x82, 0x04, 0x83, 0x20, 0x84, 0x20,
        0x85, 0x00, 0x86, 0x10, 0x87, 0x00, 0x88, 0x05, 0x89, 0x18, 0x8A, 0x10, 0x8B, 0x01, 0x8C, 0x37,
        0x8D, 0x00, 0x8E, 0xF0, 0x8F, 0x81, 0x90, 0x06, 0x91, 0x06, 0x92, 0x1E, 0x93, 0x0D, 0x94, 0x0A,
        0x95, 0x0A, 0x96, 0x0C, 0x97, 0x05, 0x98, 0x0A, 0x99, 0x41, 0x9A, 0x14, 0x9B, 0x0A, 0x9C, 0x3F,
        0x9D, 0x33, 0x9E, 0xAE, 0x9F, 0xF9, 0xA0, 0x48, 0xA1, 0x13, 0xA2, 0x10, 0xA3, 0x08, 0xA4, 0x30,
        0xA5, 0x19, 0xA6, 0x10, 0xA7, 0x08, 0xA8, 0x24, 0xA9, 0x04, 0xAA, 0x1E, 0xAB, 0x1E, 0xCC, 0x19,
        0xCD, 0x0B, 0xCE, 0x13, 0xCF, 0x64, 0xD0, 0x21, 0xD1, 0x0F, 0xD2, 0x88, 0xE0, 0x01, 0xE1, 0x04,
        0xE2, 0x41, 0xE3, 0xD6, 0xE4, 0x00, 0xE5, 0x0C, 0xE6, 0x0A, 0xE7, 0x00, 0xE8, 0x00, 0xE9, 0x00,
        0xEE, 0x07, 0xEF, 0x01, 0x00, 0x1E, 0x01, 0x1E, 0x02, 0x0F, 0x03, 0x10, 0x04, 0x02, 0x05, 0x00,
        0x06, 0xB0, 0x07, 0x04, 0x08, 0x0D, 0x09, 0x0E, 0x0A, 0x9C, 0x0B, 0x04, 0x0C, 0x05, 0x0D, 0x0F,
        0x0E, 0x02, 0x0F, 0x12, 0x10, 0x02, 0x11, 0x02, 0x12, 0x00, 0x13, 0x01, 0x14, 0x05, 0x15, 0x07,
        0x16, 0x05, 0x17, 0x07, 0x18, 0x01, 0x19, 0x04, 0x1A, 0x05, 0x1B, 0x0C, 0x1C, 0x2A, 0x1D, 0x01,
        0x1E, 0x00, 0x21, 0x00, 0x22, 0x00, 0x23, 0x00, 0x25, 0x01, 0x26, 0x00, 0x27, 0x39, 0x28, 0x7F,
        0x29, 0x08, 0x30, 0x03, 0x31, 0x00, 0x32, 0x1A, 0x33, 0x1A, 0x34, 0x07, 0x35, 0x07, 0x36, 0x01,
        0x37, 0xFF, 0x38, 0x36, 0x39, 0x07, 0x3A, 0x00, 0x3E, 0xFF, 0x3F, 0x00, 0x40, 0x77, 0x41, 0x40,
        0x42, 0x00, 0x43, 0x30, 0x44, 0xA0, 0x45, 0x5C, 0x46, 0x00, 0x47, 0x00, 0x48, 0x58, 0x4A, 0x1E,
        0x4B, 0x1E, 0x4C, 0x00, 0x4D, 0x00, 0x4E, 0xA0, 0x4F, 0x80, 0x50, 0x00, 0x51, 0x00, 0x52, 0x00,
        0x53, 0x00, 0x54, 0x00, 0x57, 0x80, 0x59, 0x10, 0x5A, 0x08, 0x5B, 0x94, 0x5C, 0xE8, 0x5D, 0x08,
        0x5E, 0x3D, 0x5F, 0x99, 0x60, 0x45, 0x61, 0x40, 0x63, 0x2D, 0x64, 0x02, 0x65, 0x96, 0x66, 0x00,
        0x67, 0x97, 0x68, 0x01, 0x69, 0xCD, 0x6A, 0x01, 0x6B, 0xB0, 0x6C, 0x04, 0x6D, 0x2C, 0x6E, 0x01,
        0x6F, 0x32, 0x71, 0x00, 0x72, 0x01, 0x73, 0x35, 0x74, 0x00, 0x75, 0x33, 0x76, 0x31, 0x77, 0x01,
        0x7C, 0x84, 0x7D, 0x03, 0x7E, 0x01
    ];

    export enum MotorDirection {
        //% block="Forward"
        Forward = 1,
        //% block="Backward"
        Reverse = 2,
        //% block="Stop"
        Stop = 0
    }

    export enum OnOff {
        //% block="On"
        On = 1,
        //% block="Off"
        Off = 0
    }

    export enum BP {
        //% block="BPA"
        BPA = 1,
        //% block="BPB"
        BPB = 0
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

    export enum GroveGesture {
        //% block=None
        None = 0,
        //% block=Right
        Right = 1,
        //% block=Left
        Left = 2,
        //% block=Up
        Up = 3,
        //% block=Down
        Down = 4,
        //% block=Forward
        Forward = 5,
        //% block=Backward
        Backward = 6,
        //% block=Clockwise
        Clockwise = 7,
        //% block=Anticlockwise
        Anticlockwise = 8,
        //% block=Wave
        Wave = 9
    }

    export let _speed_left = 700; //1023 = 100% speed
    export let _speed_right = 700;
    export let _dir_right = 1; //0 = stop, 1 = forward, 2 = backward
    export let _dir_left = 1;
    export let identifiant = 0;
    export let grovegestureinit = 0;

    let TubeTab: number[] = [
        0x3f, 0x06, 0x5b, 0x4f, 0x66, 0x6d, 0x7d, 0x07,
        0x7f, 0x6f, 0x77, 0x7c, 0x39, 0x5e, 0x79, 0x71
    ];

    export let digit_clkPin: DigitalPin;
    export let digit_dataPin: DigitalPin;
    export let digit_brightnessLevel: number;
    export let digit_pointFlag: boolean;
    export let digit_buf: Buffer;

    /**
     * Control Robot speed [0-100%]
     * @param dir direction
     * @param speed speed in %
     */
    //% blockId=RobotDriverRobotMove
    //% block="move %dir| speed %speed"
    //% speed.min=0 speed.max=100
    //% parts="RobotDriver" advanced=false
    //% speed.defl=75
    //% group="Motors"
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
     * Change the motor direction
     * @param motor selection (left, right)
     * @param dir rotation direction (forward, backward)
     */
    //% blockId=RobotDrivermotordir
    //% block="set %motor| %dir"
    //% parts="RobotDriver" advanced=false
    //% motor.defl=MotorFull
    //% group="Motors"
    export function motorDir(motor: Motors, dir: MotorDirection): void {
        setDir(motor, dir);
        setMotors();
    }

    /**
     * Change the motor speed [0-100%]
     * @param motor selection (left, right)
     * @param new speed (0-100%)
     */

    //% blockId=robotdrivermotorspeed
    //% block="set %motor| to %speed %"
    //% speed.min=0 speed.max=100
    //% parts="A4_Robot_Driver" advanced=false
    //% speed.defl=75
    //% group="Motors"
    export function motorSpeed(motor: Motors, speed: number): void {
        setSpeed(motor, speed);
        setMotors();
    }

    /**
     * Stop both motors
    */
    //% blockId=RobotDriverRobotStop
    //% block="stop both motors"
    //% group="Motors"
    export function motorStop(): void {
        robotMove(CODO.RobotDirection.Stop, 0)
    }
    /**
     * get distance from ultrasonic range sensor [cm]
     * @param pin Input pin
     */
    //% blockId=RobotDriverultrasonic_cm 
    //% block="ultrasonic distance|%name| (cm)"
    //% name.fieldEditor="gridpicker" 
    //% name.fieldOptions.columns=5
    //% name.fieldOptions.tooltips="false"
    //% name.fieldOptions.width="0"
    //% group="Sensors"
    export function measureDistanceCentimeter(name: DigitalPin): number {
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
     * Get analog potentiometer value [0-1023]
    */
    //% blockId=CodoPotargRead
    //% block="potentiometer |%pin|"
    //% group="Sensors"
    export function potarValue(pin: AnalogPin): number {
        return pins.analogReadPin(pin);
    }

    /**
     * Get collision sensor state [0-1]
    */
    //% blockId=CodoCollisionRead
    //% block="collision sensor |%pin|"
    //% group="Sensors"
    export function collisionSensor(pin: BP): boolean {
        if (pin)
            return input.buttonIsPressed(Button.A);
        return input.buttonIsPressed(Button.B);
    }

    /**
     * Get line sensor state [0-1]
    */
    //% blockId=CodoLineRead
    //% block="line sensor |%pin|"
    //% group="Sensors"
    export function detectline(pin: DigitalPin): number {
        return pins.digitalReadPin(pin);
    }

    /**
     * Get button state [0-1]
    */
    //% blockId=CodoButtonRead
    //% block="button |%pin|"
    //% group="Sensors"
    export function buttonState(pin: DigitalPin): number {
        return pins.digitalReadPin(pin);
    }

    /**
     * Set the servomotor position [0-180deg]
     * @param pin servomotor pin (right or left)
     */
    //% blockId=RobotDriverservodegrees
    //% block="servomotor |%pin| to |%angle| degre"
    //% parts="RobotDriver" advanced=false
    //% angle.shadow="protractorPicker"
    //% angle.defl=90
    //% group="Actuator"
    export function setServoMotor(pin: AnalogPin, angle: number): void {
        pins.servoWritePin(pin, Math.constrain(angle, 0, 180));
    }

    /**
    * Get color from I2C Grove Color Sensor v1.3 or v2.0
    * [0;65534]
    * @param selected color
    */
    //% blockId="grovecolorsensorgetcolor" 
    //% block="color %Color"
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

    /**
     * Create a new driver Grove - 4-Digit Display
     * @param clkPin value of clk pin number
     * @param dataPin value of data pin number
     */
    //% blockId=CODO_tm1637_create block="4-Digit Display at|%clkPin|and|%dataPin"
    //% group="Display"
    //% weight=60
    export function digit_createDisplay(clkPin: DigitalPin, dataPin: DigitalPin): void {
        digit_buf = pins.createBuffer(4);
        digit_clkPin = clkPin;
        digit_dataPin = dataPin;
        digit_brightnessLevel = 0;
        digit_pointFlag = false;
        digit_clear();
    }

    /**
     * Detect and recognize the gestures from Grove - Gesture
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
     */
    //% blockId=CodoGroveGesture
    //% block="grove gesture"
    //% group="Sensors"
    export function grove_gesture_reads(): number {
        let data = 0, result = 0;

        if (grovegestureinit == 0) {
            paj7620Init();
            basic.pause(200);
            grovegestureinit = 1;
        }

        data = paj7620ReadReg(0x43);
        switch (data) {
            case 0x01:
                result = GroveGesture.Right;
                break;

            case 0x02:
                result = GroveGesture.Left;
                break;

            case 0x04:
                result = GroveGesture.Up;
                break;

            case 0x08:
                result = GroveGesture.Down;
                break;

            case 0x10:
                result = GroveGesture.Forward;
                break;

            case 0x20:
                result = GroveGesture.Backward;
                break;

            case 0x40:
                result = GroveGesture.Clockwise;
                break;

            case 0x80:
                result = GroveGesture.Anticlockwise;
                break;

            default:
                data = paj7620ReadReg(0x44);
                if (data == 0x01)
                    result = GroveGesture.Wave;
                break;
        }
        return result;
    }

    /**
     * Set Led state
    */
    //% blockId=CodoLedSet
    //% block="led |%pin| to |%state|"
    //% state.min=0 state.max=1
    //% group="Display"
    export function ledState(pin: DigitalPin, state: OnOff): void {
        pins.digitalWritePin(pin, state);
    }

    /**
    * Show a 4 digits number on display
    * @param dispData value of number
    */
    //% blockId=CODO_tm1637_display_number block="show number|%dispData"
    //% group="Display"
    //% weight=59
    export function digit_show(dispData: number) {
        let compare_01: number = dispData % 100;
        let compare_001: number = dispData % 1000;

        if (dispData < 10) {
            digit_bit(dispData, 3);
            digit_bit(0x7f, 2);
            digit_bit(0x7f, 1);
            digit_bit(0x7f, 0);
        }
        else if (dispData < 100) {
            digit_bit(dispData % 10, 3);
            if (dispData > 90) {
                digit_bit(9, 2);
            } else {
                digit_bit(Math.floor(dispData / 10) % 10, 2);
            }

            digit_bit(0x7f, 1);
            digit_bit(0x7f, 0);
        }
        else if (dispData < 1000) {
            digit_bit(dispData % 10, 3);
            if (compare_01 > 90) {
                digit_bit(9, 2);
            } else {
                digit_bit(Math.floor(dispData / 10) % 10, 2);
            }
            if (compare_001 > 900) {
                digit_bit(9, 1);
            } else {
                digit_bit(Math.floor(dispData / 100) % 10, 1);
            }
            digit_bit(0x7f, 0);
        }
        else if (dispData < 10000) {
            digit_bit(dispData % 10, 3);
            if (compare_01 > 90) {
                digit_bit(9, 2);
            } else {
                digit_bit(Math.floor(dispData / 10) % 10, 2);
            }
            if (compare_001 > 900) {
                digit_bit(9, 1);
            } else {
                digit_bit(Math.floor(dispData / 100) % 10, 1);
            }
            if (dispData > 9000) {
                digit_bit(9, 0);
            } else {
                digit_bit(Math.floor(dispData / 1000) % 10, 0);
            }
        }
        else {
            digit_bit(9, 3);
            digit_bit(9, 2);
            digit_bit(9, 1);
            digit_bit(9, 0);
        }
    }

    /**
     * Set the brightness level of display at from 0 to 7
     * @param level value of brightness light level
     */
    //% blockId=CODO_tm1637_set_display_level block="brightness level to|%level"
    //% level.min=0 level.max=7
    //% group="Display"
    //% weight=58
    export function digit_set(level: number) {
        digit_brightnessLevel = level;

        digit_bit(digit_buf[0], 0x00);
        digit_bit(digit_buf[1], 0x01);
        digit_bit(digit_buf[2], 0x02);
        digit_bit(digit_buf[3], 0x03);
    }

    /**
     * Show a single number from 0 to 9 at a specified digit of Grove - 4-Digit Display
     * @param dispData value of number
     * @param bitAddr value of bit number
     */
    //% blockId=grove_tm1637_display_bit block="%strip|show single number|%dispData|at digit|%bitAddr"
    //% dispData.min=0 dispData.max=9
    //% bitAddr.min=0 bitAddr.max=3
    //% group="Display"
    //% advanced=true
    export function digit_bit(dispData: number, bitAddr: number) {
        if ((dispData == 0x7f) || ((dispData <= 9) && (bitAddr <= 3))) {
            let segData = 0;

            segData = digit_coding(dispData);
            digit_start();
            digit_writeByte(0x44);
            digit_stop();
            digit_start();
            digit_writeByte(bitAddr | 0xc0);
            digit_writeByte(segData);
            digit_stop();
            digit_start();
            digit_writeByte(0x88 + digit_brightnessLevel);
            digit_stop();

            digit_buf[bitAddr] = dispData;
        }
    }

    /**
     * Turn on or off the colon point on Grove - 4-Digit Display
     * @param pointEn value of point switch
     */
    //% blockId=grove_tm1637_display_point block="%strip|turn|%point|colon point"
    //% group="Display"
    //% advanced=true
    export function digit_point(point: boolean) {
        digit_pointFlag = point;

        digit_bit(digit_buf[0], 0x00);
        digit_bit(digit_buf[1], 0x01);
        digit_bit(digit_buf[2], 0x02);
        digit_bit(digit_buf[3], 0x03);
    }

    /**
     * Clear the display
     */
    //% blockId=grove_tm1637_display_clear block="%strip|clear"
    //% group="Display"
    //% advanced=true
    export function digit_clear() {
        digit_bit(0x7f, 0x00);
        digit_bit(0x7f, 0x01);
        digit_bit(0x7f, 0x02);
        digit_bit(0x7f, 0x03);
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

    function digit_writeByte(wrData: number) {
        for (let i = 0; i < 8; i++) {
            pins.digitalWritePin(digit_clkPin, 0);
            if (wrData & 0x01) pins.digitalWritePin(digit_dataPin, 1);
            else pins.digitalWritePin(digit_dataPin, 0);
            wrData >>= 1;
            pins.digitalWritePin(digit_clkPin, 1);
        }

        pins.digitalWritePin(digit_clkPin, 0); // Wait for ACK
        pins.digitalWritePin(digit_dataPin, 1);
        pins.digitalWritePin(digit_clkPin, 1);
    }

    function digit_start() {
        pins.digitalWritePin(digit_clkPin, 1);
        pins.digitalWritePin(digit_dataPin, 1);
        pins.digitalWritePin(digit_dataPin, 0);
        pins.digitalWritePin(digit_clkPin, 0);
    }

    function digit_stop() {
        pins.digitalWritePin(digit_clkPin, 0);
        pins.digitalWritePin(digit_dataPin, 0);
        pins.digitalWritePin(digit_clkPin, 1);
        pins.digitalWritePin(digit_dataPin, 1);
    }

    function digit_coding(dispData: number): number {
        let pointData = 0;

        if (digit_pointFlag == true) pointData = 0x80;
        else if (digit_pointFlag == false) pointData = 0;

        if (dispData == 0x7f) dispData = 0x00 + pointData;
        else dispData = TubeTab[dispData] + pointData;

        return dispData;
    }

    function paj7620WriteReg(addr: number, cmd: number) {
        let buf: Buffer = pins.createBuffer(2);

        buf[0] = addr;
        buf[1] = cmd;

        pins.i2cWriteBuffer(0x73, buf, false);
    }

    function paj7620ReadReg(addr: number): number {
        let buf: Buffer = pins.createBuffer(1);

        buf[0] = addr;

        pins.i2cWriteBuffer(0x73, buf, false);

        buf = pins.i2cReadBuffer(0x73, 1, false);

        return buf[0];
    }

    function paj7620SelectBank(bank: number) {
        if (bank == 0) paj7620WriteReg(0xEF, 0);
        else if (bank == 1) paj7620WriteReg(0xEF, 1);
    }

    function paj7620Init() {
        let temp = 0;

        paj7620SelectBank(0);

        temp = paj7620ReadReg(0);
        if (temp == 0x20) {
            for (let i = 0; i < 438; i += 2) {
                paj7620WriteReg(initRegisterArray[i], initRegisterArray[i + 1]);
            }
        }

        paj7620SelectBank(0);
    }
}
