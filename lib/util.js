 const fs = require('fs'); //require fs for logging 

if (process.env.DEBUG === 'true') {  // if .env var DEBUG=true run function
  // function for debug 
  function debug(msg) {   // takes in msg as argument and creates log info that is logged to logs/log.txt
      const date = new Date();
      logMsg = date + ', ' + msg + '\n\n';
      fs.appendFile('./logs/log.txt', logMsg, (err) => {
        if (err) throw err;
        //console.log('The data was appended to file!');
      });

  }
}
// export debug
exports.debug = debug;