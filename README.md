Conole Log your message along with Time => Time-ConsoleLog
=======================================

## Install

    npm install --save time-consolelog

## Usuage

    const log = require('time-consolelog');

    log(String message , String Pattern);

    // If You want to log without any time/Date, set Pattern = false
    log('Test Message' , false);
    // Test Message

    log('Test Message'); // => When no Pattern is Provided - Default Time Stamp is used
    // [15:47:28] Test Message

    log('Test Message' , 'YYYYMMDD');
    // [2070514] Test Message

    log('Test Message , 'YYYYMMDD:ss');
    // [20170514:10] Test Message

    log('Test Message','YYYY/MM/DD:mm:ss');
    // [2017/05/04:30:10] Test Message

    log('Test Message','YYYY:MM:DD');
    // [20170514] Test Message

    log('Test Message','[YYYY:MM:DD]');
    // [017:0:14] Test Message

    log('Test Message','YYYY/MM/DD');
    // [2017/05/14] Test Message

    log('Test Message','YYYY:MM');
    // [2017:05] Test Message

    log('Test Message','YYYY');
    // [2017] Test Message

    log('Test Message','MM');
    // [05] Test Message

    log('Test Message','DD');
    // [14] Test Message

    log('Test Message','HH');
    // [21] Test message

    log('Test Message','mm');
    // [30] Test Message

    log('Test Message','ss');
    // [10] Test Message

    log('Test Message','ms');
    // [365] Test Message

## Example:

    log("Test Message");

## Sample Output:

    [13:27:18] Test Message
