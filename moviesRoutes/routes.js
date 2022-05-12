const express = require('express')
const router = express.Router()
const moviesRoutes = require('./homeControllers')

router.get("/api/v1/", moviesRoutes.movies)
router.get("/api/v1/movies/:title/:rates", moviesRoutes.moviesTitles)



module.exports = router