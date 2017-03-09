 const fs = require('fs');

if (process.env.DEBUG === 'true') {
  // function for debug 
  function debug(msg) {
      const date = new Date();
      logMsg = date + ', ' + msg + '\n\n';
      fs.appendFile('./logs/log.txt', logMsg, (err) => {
        if (err) throw err;
        console.log('The data was appended to file!');
      });

  }
}
// export debug
exports.debug = debug;