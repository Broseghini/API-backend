const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
    name: 'string',
    salary: Number,
    approved: Boolean,
    
})

module.exports = Person
