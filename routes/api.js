module.exports = function (express){
var router = express.Router();

router.post('/v1/:url', function(req, res){  //post runs this function which is activated on this route /v1/:url  
		//
		
				function makeid() // random 5 digit string generater
		{
		    var text = '';
		    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		    for( var i=0; i < 5; i++ )
		        text += possible.charAt(Math.floor(Math.random() * possible.length));

		    return text;
		}


		var shortUrl = makeid();  //generate new random 5 digit string
		var longUrl = req.params.url
		
		res.json({url: shortUrl }); //respond with json format with new generated random string
	});

return router;
}