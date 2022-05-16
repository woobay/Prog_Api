const Movies = require("../model/movies");

exports.movies = async (req, res)=>{
        try{
        const title = req.query.title;
    
        let results = await Movies.find({title: new RegExp(title, "i")})
        .where("rated")
        .equals(req.query.rated)
        .limit(parseInt(req.query.limit) || 20)
        .skip(parseInt(req.query.page))
    
        res.json(results)

    }catch(error){
        console.log("Can't connect to database");
    }
}

exports.rating = async (req, res)=>{
    try {

        let ratings = await Movies.distinct("rated")
    
        res.json(ratings)
    } catch (error) {
        console.log("Can't connect to database");
        
    }
}

exports.searchById = async (req, res)=>{
    try {
    
        const searchId = req.params.id
        let oneMovie = await Movies.findById(searchId)
    
        res.json(oneMovie)
    } catch (error) {
        console.log("Can't connect to database");
        
    }
}