const ts = require('time-stamp');

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

module.exports = function (msg) {
    console.log("[" + ts('HH:mm:ss') + "] " + msg);
}