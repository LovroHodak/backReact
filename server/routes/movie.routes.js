const express = require('express')
const router = express.Router()
const MovieModel = require('../models/movie.model')

//router.post('/movie', MovieCtrl.createMovie)
router.post('/movie', (req, res) => {  
    const {name, time, rating} = req.body;
    console.log(req.body)
    MovieModel.create({name, time, rating})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })  
})

//router.put('/movie/:id', MovieCtrl.updateMovie)
router.patch('/movie/:id', (req, res) => {
    let id = req.params.id
    const {name, time, rating} = req.body;
    MovieModel.findByIdAndUpdate(id, {$set: {name: name, time: time, rating: rating}})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               console.log(err)
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          }) 
})

//router.delete('/movie/:id', MovieCtrl.deleteMovie)
router.delete('/movie/:id', (req, res) => {
    MovieModel.findByIdAndDelete(req.params.id)
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })  
})

//router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/movie/:id', (req, res) => {
    MovieModel.findById(req.params.id)
     .then((response) => {
          res.status(200).json(response)
     })
     .catch((err) => {
          res.status(500).json({
               error: 'Something went wrong',
               message: err
          })
     }) 
})

//router.get('/movies', MovieCtrl.getMovies)
router.get('/movies', (req, res) => {
    MovieModel.find()
         .then((response) => {
              res.status(200).json(response)
         })
         .catch((err) => {
              res.status(500).json({
                   error: 'Something went wrong',
                   message: err
              })
    })         
})

module.exports = router