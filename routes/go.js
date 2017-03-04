module.exports = function (express){
var router = express.Router();
const url = require('../models/url');

// show route is working
  router.get('/status', (req, res) => {
    res.json({
      healthy: true,
    });
  });


return router;
}