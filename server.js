/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Set up body-parser for json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));


// Routers required
app.use('/api/v1', require('./routes/api.js')(express));
app.use('/go/', require('./routes/go.js')(express));

<<<<<<< HEAD

=======
>>>>>>> 6631e8df2e6260ffd837c93136db01e343647746
module.exports = app.listen(3000, function(){
	console.log('works on 3000.');
});
