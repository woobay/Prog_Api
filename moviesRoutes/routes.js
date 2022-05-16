const express = require('express');
const router = express.Router();
const homeController = require('./homeControllers');

router.get("/api/v1/movies", homeController.movies)
router.get("/api/v1/movies/rating", homeController.rating)
router.get("/api/v1/movies/id/:id", homeController.searchById)


module.exports = router;