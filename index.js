require('dotenv').config()
const cors = require('cors')
const { response } = require('express')
const express = require('express')
const app = express()
// const Person = require('./models/person')


const mongoose = require('mongoose')

let morgan = require('morgan')

app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.static('build'))


app.post('/request', (request, response) => {
    console.log('asdf')
    const body = request.body
    response.json(body)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})