const express = require('express');
const router = express.Router();
const moviesRoutes = require('./homeControllers');

router.get("/api/v1/movies", moviesRoutes.movies)
router.get("/api/v1/movies/rating", moviesRoutes.rating)
router.get("/api/v1/movies/id/:id", moviesRoutes.searchById)

// router.get("/api/v1/rating", moviesRoutes.getRated)
// router.get("/api/v1/id/:id", moviesRoutes.getById)

module.exports = router;