var express = require('express');
var router = express.Router();
var moviesJSON = require('../movies.json');

/* GET home page. */
router.get('/', function (req, res, next) {
    let movies = moviesJSON.movies;
    res.render('index', {
        title: 'Star Wars Movies',
        movies: movies
    });
});

module.exports = router;
