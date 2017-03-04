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

// update by id
exports.update = (payload, err, success) => {
  db.url.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};

// delete by id
exports.destroy = (payload, err, success) => {
  db.url.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
};

//Find Original url
exports.getUrl = (data, error, success) => {
  // find url based on short url
  db.url.find({    
    where: {
      shortUrl: data.shortUrl,
    },
  })
  .then(success)    
  .catch(error);   
}; 
