module.exports = function (express){
const router = express.Router();
const url = require('../models/url');
const makeid = require('../lib/makeid')
const util = require('../lib/util');

//   ROUTES   //  


//Create a shortened url

router.post('/urls', function(req, res){  //post runs this function which is activated on this route /v1/:url  
	
		req.body.shortUrl = makeid.makeid();  //generate new random 5 digit string, and assign it to shortUrl var
		console.log(req.body);
		url.create(req.body, (err) => {
			res.status(500).json(err);
		}, (data) => {
			console.log('yessir');
      util.debug("You successfully created a shortened url", data);
      res.status(200).json(data);
		});
	});
		

//Display all urls

router.get('/urls', (req, res) => {
    url.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

 // get url by id
  router.get('/urls/:id', (req, res) => {
  	req.body.id = req.params.id;
  	url.find(req.body, (err) => {
  		res.status(500).json(err);
  	}, (data) => {
  		res.status(200).json(data);
  	})
  });

  // delete url by id
  router.delete('/urls/:id', (req, res) => {
  	req.body.id = req.params.id;
  	url.destroy(req.body, (err) => {
  		res.status(500).json(err);
  	}, (data) => {
  		res.status(200).json(data);
  	})
  });

   // update url by id
  router.post('/urls/:id', (req, res) => {
  	req.body.id = req.params.id;
  	url.update(req.body, (err) => {
  		res.status(500).json(err);
  	}, (data) => {
  		res.status(200).json(data);
  	})
  });



return router;
}