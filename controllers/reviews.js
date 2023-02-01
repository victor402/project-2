var Review = require('../models/review');
var Restaurant = require('../models/restaurant');

function newReview(req, res, next) {
  Review.find({restaurant:req.params.id}, function(err, reviews){
    res.render('reviews/new', {title:'Reviews', reviews, restaurantId:req.params.id});
  })
 
}
function create(req, res, next) {
  req.body.restaurant = req.params.id;
  console.log(req.body);
var review = new Review(req.body);
 review.save(function(err, review) {
  if (err) {
    console.error(err);
   return  res.redirect('reviews/new')
}
res.redirect(`/restaurants/${req.params.id}/reviews/new`);
 });
};





module.exports = {
    new:newReview,
    create
  };