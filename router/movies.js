const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { addMovieValidator, deleteMovieValidator } = require('../utils/validator');

router.get('/movies', getMovies);

router.post('/movies', addMovieValidator, createMovie);

router.delete('/movies/:movieId', deleteMovieValidator, deleteMovie);

module.exports = router;
