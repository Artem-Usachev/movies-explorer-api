const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { addMovieValidator, deleteMovieValidator } = require('../utils/validator');

router.get('/api/movies', getMovies);

router.post('/api/movies', addMovieValidator, createMovie);

router.delete('/api/movies/:movieId', deleteMovieValidator, deleteMovie);

module.exports = router;
