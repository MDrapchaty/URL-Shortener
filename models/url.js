const db = require('./db');


// add url
exports.create = (payload, err, success) => {
	db.url.create(payload).then(success).catch(err);
}

//find all
exports.findAll = (err, success) => {
	db.url.findAll().then(success).catch(err);
}

// find by id
exports.find = (payload, err, success) => {
  db.url.find({
    where: {
      id: payload.id,
    },
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
};
