const Restaurant = require('../models/restaurant');

function create(req, res, next){
  req.body.time = req.body.hours+ ':' +  req.body.minutes;
Restaurant.findById(req.params.id, function(err, restaurant) {
    restaurant.reservations.push(req.body);
    console.log(req.body);
    restaurant.save(function(err) {
        res.redirect(`/restaurants/${restaurant._id}`);
    });
});
};
 
module.exports = {
  create
};
