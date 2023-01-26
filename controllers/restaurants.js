//in order for us to create we need to require the model.
var Restaurant= require('../models/restaurant');



function newRestaurant(req, res, next) {
    res.render('restaurants/new'); // this line is redirecting the link in index.ejs to a file restaurant new.
    
}
function create(req, res, next) {
    var restaurant = new Restaurant(req.body);
    restaurant.save(function(err) {
        if (err) {
            console.error(err);
           return  res.redirect('restaurant/new')
        }
        console.log(req.body);
        res.render('/restaurant/show');
    })
    
}

module.exports = {
    new: newRestaurant,
    create,
  };
  