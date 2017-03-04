const db = require('./db');


// add url
exports.create = (payload, err, success) => {
	db.url.create(payload).then(success).catch(err);
}

//find all
exports.findAll = (err, success) => {
	db.url.findAll().then(success).catch(err);
}

