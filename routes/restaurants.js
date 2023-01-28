var express = require('express');
var router = express.Router();
var restaurantsCtrl = require('../controllers/restaurants');



router.get('/new', restaurantsCtrl.new);

router.post('/', restaurantsCtrl.create);
router.get('/', restaurantsCtrl.index);
router.get('/:id', restaurantsCtrl.show);

module.exports = router;
