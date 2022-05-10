const mongoose = require('mongoose')

const reviewSherma = mongoose.Schema({
    review: String,
    name: String,
    user_id: String,
    movie_id: String,
    date: String,

})

module.exports = mongoose.model("Review", reviewSherma)