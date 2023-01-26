var express = require('express');
var router = express.Router();
var restaurantsCtrl = require('../controllers/restaurants');

/* GET users listing. */
// router.get('/new', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/new', restaurantsCtrl.new);

router.post('/', restaurantsCtrl.create)
module.exports = router;
