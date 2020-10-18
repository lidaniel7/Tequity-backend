require('dotenv').config()
const cors = require('cors')
const { response } = require('express')
const express = require('express')
const app = express()
const Request = require('./models/request')


const mongoose = require('mongoose')

let morgan = require('morgan')

app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.static('build'))

const url = process.env.MONGODB_URI

app.post('/request', (req, res) => {
    const body = req.body

    const request = new Request({
        firstName: body.firstName,
        lastName: body.lastName,
        school: body.school,
        laptops: body.laptops,
        cost: body.cost,
        city: body.city,
        state: body.state,
        country: body.country,
        email: body.email,
        number: body.number,
        description: body.description
    })

    request.save().then(savedRequest => {
        res.json(savedRequest)
    })
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})