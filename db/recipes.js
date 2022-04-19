const Recipe = require('../models/recipe-models')

const seedData = require('./recipes.json')

// Recipe.deleteMany({})
//     .then(() => {
//     return Recipe.insertMany(seedData)
//     }).finally(() => process.exit())