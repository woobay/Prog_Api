const axios = require('axios')
const Movie = require('../model/movies')
const Review = require('../model/review')


exports.renderMovies = async (req, res) => {
    let result = await Movie.find({}).limit(100).select("title -_id")

    res.json(result)
}