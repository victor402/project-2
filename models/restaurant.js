const mongoose = require('mongoose'); // this require the mongoose library.
// optional shortcut to the mongoose.Schema class
//this pull a mongoose.schema class from the library required above.
// classes are capitalized that's why schema have capital S.

const Schema = mongoose.Schema;

var reservationSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    guests:{ 
        type: Number, min: 1, max: 20,
    },
    date:{ 
        type: Date,
    },
    time:  {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});


var restaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location:{ 
        type: String,
        required: true,
    },
    open: {
        type: String,
        required: true,
    },
    close: {
        type: String,
        required: true,
    },
    tables: {
        type: String,
        required: true,
    },
    reservations: [reservationSchema],
    }, {
        timestamps: true
    });
    


// Compile the schema into a model and export it
module.exports = mongoose.model('Restaurant', restaurantSchema);
