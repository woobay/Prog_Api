const Movie = require('../model/movies')
const Review = require('../model/review')


exports.movies = async (req, res) => {

    let result = await Movie.find({}).limit(50)

    res.json(result)
}

exports.moviesTitles = async (req, res) => {
    const title = req.params.title
    const rates = req.params.rates
    const limit = req.params.limit || 20
    const pages = req.params.pages || 0
    console.log(title, rates, limit, pages)

    let result = await Movie.find({title: new RegExp(title, "i")})
    .where("rated")
    .equals({$exists: true, $ne: null})
    .limit(limit)
    .skip(limit * pages)
    

    res.json(result)
}

exports.getRated = async (req, res) => {

    const result = await Movie.distinct("rated")
    res.json(result)
}

exports.getById = async (req, res) => {
    const id = req.params.id

    const result = await Movie.findById(id)
    
    res.json(result)
}