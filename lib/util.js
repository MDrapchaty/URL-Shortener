 const fs = require('fs');

if (process.env.DEBUG === 'true') {
  // function for debug 
  function debug(msg) {

      fs.appendFile('./logs/log.txt', msg, (err) => {
        if (err) throw err;
        console.log('The data was appended to file!');
      });

  }
}
// export debug
exports.debug = debug;