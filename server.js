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

// Create port var to be dynamic for deployment
const port = process.env.PORT || 3000;

module.exports = app.listen(port, () => {
  console.log('works on ', port);
});
