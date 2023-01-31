var Review = require('../models/review');
var Restaurant = require('../models/restaurant');

function newReview(req, res, next) {
 res.render('reviews/new', {title:'Reviews'});
}
function create(req, res, next) {
var review = new Review(req.body);
 review.save(function(err, review) {
  if (err) {
    console.error(err);
   return  res.redirect('reviews/new')
}
res.redirect('/reviews/new');
 });
};


module.exports = {
    new:newReview,
    create
  };