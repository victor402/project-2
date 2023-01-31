var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews')

router.get('/reviews/new', reviewsCtrl.new);

router.post('/reviews', reviewsCtrl.create);

module.exports = router;