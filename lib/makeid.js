
	
		//function to make 5 digit short url
		function makeid() // random 5 digit string generater
		{
		    var text = '';
		    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";  //string containing every possible character for short url

		    for( var i=0; i < 5; i++ )
		        text += possible.charAt(Math.floor(Math.random() * possible.length));  // for loop to create 5 character string for short url

		    return text;
		}

exports.makeid = makeid;

// function to make 5 digit short url
function makeid() { // random 5 digit string generater
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';  // string containing every possible character for short url

  for (let i = 0; i < 5; i += 1) {
    text += possible.charAt(Math.floor(Math.random()
 * possible.length));  // for loop to create short url
  }
  return text;
}
exports.makeid = makeid;

