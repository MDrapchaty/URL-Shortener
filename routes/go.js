module.exports = (express) => {
  const router = express.Router();
  const url = require('../models/url'); // require url model

// route for redirecting original url from short url
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
};
