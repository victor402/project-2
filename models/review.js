const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var reviewSchema = new Schema({
    message:{type: String, required:true},
    Rating:{ type:Number, min:1, max:5},
});

module.export = mongoose.model('review', reviewSchema);