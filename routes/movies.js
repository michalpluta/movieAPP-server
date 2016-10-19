/**
 * Created by michal on 29.08.2016.
 */


var Movie = require('../models/movie');
var express = require('express');
var router = express.Router();



router.route('/movies')
    // Displaying all movies
    .get(function(req, res) {
        Movie.find(function(err, movies) {
            if (err) {
                return res.send(err);
            }

            res.json(movies);
        });
    })

    // Add new movie
    .post(function(req, res) {
        var movie = new Movie(req.body);

        movie.save(function(err) {
            if (err) {
                return res.send(err);
            }

            res.send({ message: 'Movie Added' });
        });
    });


// Updating the movie

router.route('/movies/:id').put(function(req, res){

    Movie.findOne({_id: req.params.id}, function(err, movie){
        if(err){
            return res.send(err);
        }

        for(prop in req.body){
            movie[prop] = req.body[prop];
        }

        //save the movie

        movie.save(function(err) {
            if (err) {
                return res.send(err);
            }

            res.json({ message: 'Movie Updated' });
        });

    });
});


// Read single movie

router.route('/movies/:id').get(function(req, res){
    Movie.findOne({_id: req.params.id}, function(err, movie){
        if(err){
            return res.send(err);
        }

        res.json(movie);
    });

});


// Deleting a movie

router.route('/movies/:id').delete(function(req, res){
    Movie.remove({_id: req.params.id}, function(err, movie){
        if(err){
            return res.send(err);
        }

        res.json(movie);
    });

});

module.exports = router;






