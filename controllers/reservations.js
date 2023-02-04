const Restaurant = require('../models/restaurant');

function create(req, res, next){
  req.body.time = req.body.hours+ ':' +  req.body.minutes;

  req.body.date = new Date(req.body.date +'T00:00:00');
Restaurant.findById(req.params.id, function(err, restaurant) {
    restaurant.reservations.push(req.body);
    console.log(req.body);
    restaurant.save(function(err) {
        res.redirect(`/restaurants/${restaurant._id}`);
    });
});
};

function edit(req, res, next) {
  Restaurant.findOne({'reservations._id': req.params.id}, function(err, restaurant) {
console.log(err);
console.log("successful");

console.log(restaurant.reservations.id(req.params.id))
var reservation = restaurant.reservations.id(req.params.id)
console.log(restaurant)
    res.render('restaurants/edit', {reservation, title:'Update Reservation'});
  });
}

function update(req, res, next) {
  
  Restaurant.findOne({'reservations._id': req.params.id}, function(err, restaurant) {
    
    var reservation = restaurant.reservations.id(req.params.id);
    
    reservation.name = req.body.name;
    reservation.guests = req.body.guests;
    reservation.hours = req.body.hours;
    reservation.minutes = req.body.minutes;
    reservation.time = req.body.hours+ ':' + req.body.minutes;
    reservation.date = new Date(req.body.date +'T00:00:00');
    console.log(typeof req.body.date);
    
    restaurant.save(function(err) {
      
      res.redirect(`/restaurants/${restaurant._id}`);
    });
  });
}




 
module.exports = {
  create,
  edit,
  update,
};
