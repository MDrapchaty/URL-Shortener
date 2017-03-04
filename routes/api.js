module.exports = function (express){
var router = express.Router();
const url = require('../models/url');


//   ROUTES   //  


// POST - Create a shortened url

router.post('/urls', function(req, res){  //post runs this function which is activated on this route /v1/:url  
		
		
		function makeid() // random 5 digit string generater
		{
		    var text = '';
		    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";  //string containing every possible character for short url

		    for( var i=0; i < 5; i++ )
		        text += possible.charAt(Math.floor(Math.random() * possible.length));  // for loop to create 5 character string for short url

		    return text;
		}

		req.body.shortUrl = makeid();  //generate new random 5 digit string, and assign it to shortUrl var
		console.log(req.body);
		url.create(req.body, (err) => {
			res.status(500).json(err);
		}, (data) => {
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



return router;
}