const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
        .then(
          (movies => {
            res.render('movies', {movies});
          })
        )
});

router.get('/movies/:movieId', (req, res, next) => {
  Movie.find({'_id' : req.params.movieId})
  .then(
    (movie => {
      res.render('detail',{movie});
    })
  )
});

module.exports = router;
