const mongoose = require('mongoose');

const mongoURI ='mongodb+srv://test:test@cluster0.gc90c.mongodb.net/Recipe-Book?retryWrites=true&w=majority'



mongoose.connect(mongoURI)
    .then(instance => console.log(`connected to : ${instance.connections[0].name}`)
    )
    .catch(error => {
        console.log(`failed conn:`, error)})

    module.exports = mongoose