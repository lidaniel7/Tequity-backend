const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const requestSchema = new mongoose.Schema({
    id: Number,
    firstName: String,
    lastName: String,
    school: String,
    laptops: String,
    cost: String,
    city: String,
    state: String,
    originalState: String,
    country: String,
    email: String,
    number: String,
    description: String
})

requestSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Request', requestSchema)