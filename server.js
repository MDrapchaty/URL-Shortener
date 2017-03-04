var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Set up body-parser for json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));


//Routers required
app.use('/api/v1', require('./routes/api.js')(express));
app.use('/go/', require('./routes/go.js')(express));

exports.server = app.listen(3000, function(){
	console.log('works on 3000.');
});
