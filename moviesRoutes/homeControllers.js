const Movie = require('../model/movies')
const Review = require('../model/review')


exports.movies = async (req, res) => {

    let result = await Movie.find({})

    res.json(result)
}

exports.moviesTitles = async (req, res) => {
    const rates = req.params.rates



    let result = await Movie.where("title")
    .equals(new RegExp(req.params.title, "i"))
    .where("rated")
    .equals(!!rates ? `${rates}` : {$exists: true, $ne: null})
    .limit(req.params.limit || 20)
    .skip(req.params.limit || 20 * req.params.pages || 0)
    

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