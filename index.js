const express =require('express')
const methodOverride = require('method-override')
const recipeController = require('./controllers/recipeController')
const ejs= require('ejs')


const app = express()
app.use(express.static('public'))
app.use(methodOverride('_method'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', recipeController)
app.set('view engine', 'ejs')


const PORT = process.env.PORT || 4000

// app.get('/', (req,res)=> {
//     res.send('hello')
// })




app.listen(PORT, ()=>{
    console.log('app running')
})