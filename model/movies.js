const mongoose = require('mongoose')

const MovieSherma = mongoose.Schema({}).add({
    title: String,
    rated: String,
    user_id: String,
})

module.exports = mongoose.model("Movies", MovieSherma,);