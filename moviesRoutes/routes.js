const express = require('express')
const router = express.Router()
const moviesRoutes = require('./homeControllers')

router.get("/api/v1/", moviesRoutes.movies)
router.get("/api/v1/movies", moviesRoutes.movies)
router.get("/api/v1/movies/:title?/:rates?/:limit?/:pages?", moviesRoutes.moviesTitles)

router.get("/api/v1/rating", moviesRoutes.getRated)
router.get("/api/v1/id/:id", moviesRoutes.getById)


module.exports = router