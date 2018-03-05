const ts = require('./timeStamp');

/*!
 * time-logger <https://github.com/krishnaclouds/time-consolelog>
 */
'use strict';


/**
 * Parse the given pattern and return a formatted
 * timestamp.
 *
 * @param  {String} `msg` Message to Log.
 * @return {String} `Console log message!`
 */

module.exports = function (msg , pattern) {

    pattern = typeof pattern !== 'undefined' ? pattern : 'HH:mm:ss';

    if(pattern == false){
        console.log(msg);
    } else {
        console.log("[" + ts(pattern) + "] " + msg);
    }
};