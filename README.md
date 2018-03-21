# Time-ConsoleLog
### Console Log your message along with Time


## Install

    npm install --save time-consolelog

## Usage 

<code> const log = require('time-consolelog'); </code>

<code> log(String message , String Pattern); </code>

// If You want to log without any time/Date, set Pattern = false
<code> log('Test Message' , false); </code>
<br/>// Test Message

<code> log('Test Message'); </code> // => When no Pattern is Provided - Default Time Stamp is used
<br/>// [15:47:28] Test Message

<code> log('Test Message' , 'YYYYMMDD'); </code>
<br/>// [2070514] Test Message

<code> log('Test Message , 'YYYYMMDD:ss'); </code>
<br/>// [20170514:10] Test Message

<code> log('Test Message','YYYY/MM/DD:mm:ss'); </code>
<br/>// [2017/05/04:30:10] Test Message

<code> log('Test Message','YYYY:MM:DD'); </code>
<br/>// [20170514] Test Message

<code> log('Test Message','[YYYY:MM:DD]'); </code>
<br/>// [017:0:14] Test Message

<code> log('Test Message','YYYY/MM/DD'); </code>
<br/>// [2017/05/14] Test Message

<code> log('Test Message','YYYY:MM'); </code>
<br/>// [2017:05] Test Message

<code> log('Test Message','YYYY'); </code>
<br/>// [2017] Test Message

<code>log('Test Message','MM'); </code>
<br/>// [05] Test Message

<code> log('Test Message','DD'); </code>
<br/>// [14] Test Message

<code> log('Test Message','HH'); </code>
<br/>// [21] Test message

<code> log('Test Message','mm'); </code>
<br/>// [30] Test Message

<code> log('Test Message','ss'); </code>
<br/>// [10] Test Message

<code> log('Test Message','ms'); </code>
<br/>// [365] Test Message
