var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Set up body-parser for json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));



app.use('/api', require('../routes/api.js')(express));

app.listen(3000, function(){
	console.log('works on 3000.');
});