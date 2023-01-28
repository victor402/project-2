const mongoose = require('mongoose'); // this require the mongoose library.
// optional shortcut to the mongoose.Schema class
//this pull a mongoose.schema class from the library required above.
// classes are capitalized that's why schema have capital S.

const Schema = mongoose.Schema;

var reservationSchema = new Schema({
    name: String,
    guests: Number,
    date: Date,
    time: Date,
})

var restaurantSchema = new Schema({
    name: String,
    location: String,
    open: String,
    close: String,
    tables: String,
    reservations: [reservationSchema],
    })


// Compile the schema into a model and export it
module.exports = mongoose.model('Restaurant', restaurantSchema);
