const axios = require('axios')
const Movie = require('../model/movies')
const Review = require('../model/review')


exports.movies = async (req, res) => {

    let result = await Movie.find({}).limit(50)

    res.json(result)
}

exports.moviesTitles = async (req, res) => {
    const title = req.params.title
    const rates = req.params.rates
    console.log(rates)

    let result = await Movie.find({title: new RegExp(title, "i"), rates: new RegExp(rates, "i")})
    

    res.json(result)
}