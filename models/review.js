const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var reviewSchema = new Schema({
    message:{type: String, required:true},
    rating:{ type:Number, min:1, max:5},
    restaurant: {type:mongoose.SchemaTypes.ObjectId, ref: 'Restaurant' }
}, {
    timestamps: true
});

module.exports = mongoose.model('review', reviewSchema);