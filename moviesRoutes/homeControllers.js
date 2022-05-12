const axios = require('axios')
const Movie = require('../model/movies')
const Review = require('../model/review')


exports.movies = async (req, res) => {

    let result = await Movie.find({}).limit(50)

    res.json(result)
}

exports.moviesTitles = async (req, res) => {
    const title = req.params.title
    let results = await Movie.find({title: new RegExp(title, "i")})

    res.json(results)
}