var express = require('express');
var body_parser = require('body-parser');
var app = express();



app.use('/api', require('../routes/api.js')(express));

app.listen(3000, function(){
	console.log('works on 3000.');
});