const express = require('express')
const router = express.Router()
const homeController = require('./homeControllers')

router.get("/", homeController.renderMovies)



module.exports = router