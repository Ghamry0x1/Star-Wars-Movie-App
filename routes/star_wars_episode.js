var express = require('express');
var router = express.Router();
var moviesJSON = require('../movies.json');


/* GET users listing. */
router.get('/:episode_number?', function(req, res, next) {
    let episode_number = req.params.episode_number;
    let movies = moviesJSON.movies;
    let movie = movies[episode_number - 1];
    let title = movie.title;
    let main_characters = movie.main_characters;

    res.render('movie_single', {
        movies: movies,
        movie: movie,
        title: title,
        main_characters: main_characters
    });
});

module.exports = router;
