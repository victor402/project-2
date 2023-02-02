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
 

function deleteReview(req, res, next) {
  console.log(req.params);
  Review.findByIdAndDelete(req.params.id, function(err, review) {
    if(err) {
      res.redirect(`/restaurants/${review.restaurant}/reviews/new`)
    }
    res.redirect(`/restaurants/${review.restaurant}/reviews/new`)
    console.log(err);
    console.log(review);
  });
  
  

}


module.exports = {
    new:newReview,
    create,
    delete:deleteReview,
  };