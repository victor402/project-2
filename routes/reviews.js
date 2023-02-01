var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews')

router.get('/restaurants/:id/reviews/new', reviewsCtrl.new);

router.post('/restaurants/:id/reviews', reviewsCtrl.create);

module.exports = router;



///posts/:id/comments/new