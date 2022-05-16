const mongoose = require('mongoose')

const MovieSchema = mongoose.Schema({}).add({
    title: String,
    rated: String,
    user_id: String,
})

module.exports = mongoose.model("Movie", MovieSchema,);