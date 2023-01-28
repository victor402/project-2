//in order for us to create we need to require the model.
var Restaurant = require('../models/restaurant');


//you have to do 2 five steps to create which is new and create
function newRestaurant(req, res, next) {
    res.render('restaurants/new', {title:'Restaurants'}); // this line is redirecting the link in index.ejs to a file restaurant new.
    
}

function index(req, res, next) {
    Restaurant.find({}, function(err, restaurants) {
        if(err) {
            console.log(err);
            res.redirect('/'); //this means redirect to home page.
        }
        res.render('restaurants/index', { restaurants, title:'Restaurants' })
    });
}
// this one come into play when tou click reserve button in new.
function create(req, res, next) {
    var restaurant = new Restaurant(req.body);
    restaurant.save(function(err, newRestaurant) {
        if (err) {
            console.error(err);
           return  res.redirect('restaurants/new')
        }
        console.log(newRestaurant);
        
        res.redirect('/restaurants');
    })
    
} 

function show(req, res) {
    Movie.findById(req.params.id, (err, restaurant) => {
      res.render('restaurants/show', { title: 'Restaurant Booking', restaurant });
    });
  }


module.exports = {
    show,
    new: newRestaurant,
    create,
    index,
  };
  