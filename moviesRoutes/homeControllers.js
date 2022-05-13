const Movies = require("../model/movies");


exports.movies = async (req, res)=>{
    const title = req.query.title;
    const rated = req.query.rated
    const limite = parseInt(req.query.limite) || 20
    const page = parseInt(req.query.page)

    let results = await Movies.find({title: new RegExp(title, "i")})
    .where("rated")
    .equals(rated)
    .limit(limite)
    .skip(page)

    res.json(results)
}
exports.rating = async (req, res)=>{

    let ratings = await Movies.distinct("rated")

    res.json(ratings)
}

exports.searchById = async (req, res)=>{
    const searchId = req.params.id
    // const searchId = {_id : req.params.id}

    // let oneMovie = await Movies.findById(searchId)
    let oneMovie = await Movies.findById(searchId)

    res.json(oneMovie)
}