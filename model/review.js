const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    review: String,
    name: String,
    user_id: String,
    movie_id: String,
    date: String,

})

module.exports = mongoose.model("Review", reviewSchema)