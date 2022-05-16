const Movies = require("../model/movies");

try{
    exports.movies = async (req, res)=>{
        const title = req.query.title;
    
        let results = await Movies.find({title: new RegExp(title, "i")})
        .where("rated")
        .equals(req.query.rated)
        .limit(parseInt(req.query.limit) || 20)
        .skip(parseInt(req.query.page))
    
        res.json(results)
    }
}catch(error){
    console.log("Une erreur sais produite");
}

try {
    exports.rating = async (req, res)=>{

        let ratings = await Movies.distinct("rated")
    
        res.json(ratings)
    }
} catch (error) {
    console.log("Une erreur sais produite");
}

try {
    exports.searchById = async (req, res)=>{
    
        const searchId = req.params.id
        let oneMovie = await Movies.findById(searchId)
    
        res.json(oneMovie)
    }
} catch (error) {
    console.log("Une erreur sais produite");
}