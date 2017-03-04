module.exports = function (express){
var router = express.Router();
const url = require('../models/url');

router.get('/:shortUrl', (req, res) => {
    const request = req;
    const response = res;
    request.body.shortUrl = request.params.shortUrl;
    url.getUrl(request.body, (err) => {
      response.status(500).json(err);
    }, (data) => {
      // response redirects to originalURL
      response.redirect(data.Url);
    });
  });

return router;
}