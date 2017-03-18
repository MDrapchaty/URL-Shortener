
const fs = require('fs'); // require fs for logging

if (process.env.DEBUG === 'true') {  // if .env var DEBUG=true run function
// function for debug
  function debug(msg) {
// creates log info that is logged to logs/log.log
    const date = new Date();
    const logMsg = date + ', ' + msg + '\n\n';
    console.log(msg);
   }

   exports.debug = debug;

 }
