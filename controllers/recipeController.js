const express = require('express')
const Recipe = require('../models/recipe-models')


const router =  express.Router()


//find all recipes
router.get('/', (req,res)=> {
    Recipe.find({})
    .then((items) => res.send(items))
})


//add a recipe
router.post('/add', (req,res)=> {
    Recipe.create(req.body)
    .then(()=> res.redirect('/'))
})


//delete a recipe
router.delete('/:id', (req,res)=> {
    Recipe.findByIdAndRemove({_id: req.params.id})
    .then(res.redirect('/'))
})

//edit a recipe
router.put('/:id', (req,res)=> {
    Recipe.findOneAndUpdate({_id: req.params.id}, req.body)
    .then(items => res.redirect('/'))
})






module.exports= router