module.exports = function (express){
var router = express.Router();

router.post('/v1/urls', function(req, res){  //post runs this function which is activated on this route /v1/:url  
		
		
				function makeid() // random 5 digit string generater
		{
		    var text = '';
		    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";  //string containing every possible character for short url

		    for( var i=0; i < 5; i++ )
		        text += possible.charAt(Math.floor(Math.random() * possible.length));  // for loop to create 5 character string for short url

		    return text;
		}


		req.body.shortUrl = makeid();  //generate new random 5 digit string, and assign it to shortUrl var
		//req.body = {long_url : req.params.url, short_url: shortUrl }
		console.log(req.body);
		res.json(req.body.shortUrl); //respond with json format with new generated random string
	});

return router;
}