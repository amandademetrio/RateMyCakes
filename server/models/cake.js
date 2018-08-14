const mongoose = require('mongoose');

var RatingSchema = new mongoose.Schema({
    comment: {
        type:String
    },
    rating: {
        type:Number
    }
})

var CakeSchema = new mongoose.Schema({
    name: {
        type:String
    },
    baker: {
        type:String
    },
    average_rating: {
        type:Number,
        default: 0
    },
    image: {
        type:String
    },
    ratings:[RatingSchema],
    showRatingBox: {
        type:Boolean,
        default:false
    }
}, {timestamps: true});

mongoose.model('Rating',RatingSchema);
mongoose.model('Cake',CakeSchema);