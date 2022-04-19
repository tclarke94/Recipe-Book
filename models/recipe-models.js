const mongoose = require('../db/connection')

const RecipeSchema = new mongoose.Schema({
    
        name: {type: String, required: true},
        recipe: {type:String, required: true},
        instructions: {type:String, required: true},
        isSpicy: Boolean,
        prepTime: String,
        servingSize: Number,
        img: String
        
        
})

const Recipe = mongoose.model('recipe', RecipeSchema)

module.exports = Recipe