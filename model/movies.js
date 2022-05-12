const mongoose = require('mongoose')

const MovieSherma = mongoose.Schema({}).add({
    title: String,
    rated: String,
    timestamp: String,
})

module.exports = mongoose.model("Movie", MovieSherma,);