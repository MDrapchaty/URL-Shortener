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
			util.debug("Create Short Url: Error! Failed to create shortened url.");
      res.status(500).json(err);
		}, (data) => {
      util.debug("Create Short Url: Success! Created shortened url.");
      res.status(200).json(data);
		});
	});
		

//Display all urls

router.get('/urls', (req, res) => {
    url.findAll((err) => {
      util.debug("Retrieve All Urls: Error! Failed to retrieve all urls.");
      res.status(500).json(err);
    }, (data) => {
      util.debug("Retrieve All Urls: Success! Retrieved all urls.");
      res.status(200).json(data);
    })
  });

 // get url by id
  router.get('/urls/:id', (req, res) => {
  	req.body.id = req.params.id;
  	url.find(req.body, (err) => {
      util.debug("Retrieve Url: Error! Failed to retrieve url.");
  		res.status(500).json(err);
  	}, (data) => {
      util.debug("Retrieve Url: Success! Retrieved url.");
  		res.status(200).json(data);
  	})
  });

  // delete url by id
  router.delete('/urls/:id', (req, res) => {
  	req.body.id = req.params.id;
  	url.destroy(req.body, (err) => {
      util.debug("Delete Url: Error! Failed to delete url.");
  		res.status(500).json(err);
  	}, (data) => {
      util.debug("Delete Url: Success! Deleted url.");
  		res.status(200).json(data);
  	})
  });

   // update url by id
  router.post('/urls/:id', (req, res) => {
  	req.body.id = req.params.id;
  	url.update(req.body, (err) => {
      util.debug("Update Url: Error! Failed to update url.");
  		res.status(500).json(err);
  	}, (data) => {
      util.debug("Update Url: Success! Updated url.");
  		res.status(200).json(data);
  	})
  });



return router;
}