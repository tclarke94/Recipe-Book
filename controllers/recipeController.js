const express = require('express')
const Recipe = require('../models/recipe-models')


const router =  express.Router()




//display recipe names, make them clickable to redirect to recipe details
router.get('/', (req,res)=> {
    Recipe.find({}).then((items)=>
    res.render('index', {stuff: items}))
  
})
//above redirects here, has form to create new recipe model
router.get('/add', (req,res)=> {
    res.render('new')
})


//adds recipe
router.post('/add', (req,res)=> {
    Recipe.create(req.body)
    .then(()=> res.redirect('/'))
})


//this grabs an individual recipe and displays its body
router.get('/:id', (req,res)=> {
    Recipe.findById({_id: req.params.id})
    .then(items => (res.render('display',{stuff: items})))
   
})
//this should allow to edit recipe
router.put('/:id', (req,res)=> {
    Recipe.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(items => res.redirect('/'))
    
})

router.get('/:id/edit', (req,res)=> {
    Recipe.findById({_id: req.params.id})
    .then(items => res.render('edit',{stuff: items}))
})

//delete route
router.delete('/:id', (req,res)=> {
    Recipe.findByIdAndRemove({_id: req.params.id})
    .then(res.redirect('/'))
})








module.exports= router