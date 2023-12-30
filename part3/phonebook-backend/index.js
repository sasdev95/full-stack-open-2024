const express = require('express')
const app = express()
var morgan = require('morgan')  // Add morgan middleware to app for logging
const cors = require('cors')
require('dotenv').config()

const Person = require('./models/person')

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())

morgan.token('info', function getInfo (request) {
    return request.info
})

// Configure morgan to log msgs to console based on the tiny configuration + person info
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :info'))

app.get('/api/persons', (request, response) => {
    Person.find({}).then(people => {
        response.json(people)
    })
})

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
        .then(person => {
            if (person) {
                response.json(person)
            } else {
                response.status(404).end()
            }
        })
        .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndDelete(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

app.get('/info', (request, response) => {
    const requestTime = new Date().toString()

    Person.countDocuments({}).then(count => {
        const info = `<p>Phonebook has info for ${count} people</p>
                      <p>${requestTime}</p>`
        response.send(info)
    })
    .catch(error => {
        console.error('Error fetching count:', error)
        response.status(500).send('Internal Server Error')
    })
})

// Used if name already exists in phonebook
app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body

    const person = {
        name: body.name,
        number: body.number,
    }

    Person.findByIdAndUpdate(request.params.id, person, { new: true })
        .then(updatedPerson => {
            response.json(updatedPerson)
        })
        .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
    const body = request.body

    request.info = JSON.stringify(body)
  
    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'Name and number are required'
        })
    }

    const person = new Person({
        //id: Math.floor(Math.random() * 10000),
        name: body.name,
        number: body.number
    })

    person.save()
        .then(savedPerson => {
            response.json(savedPerson)
         })
        .catch((error) => next(error))
})

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    }

    next(error)
}

app.use(errorHandler)  // handler of requests with result to errors

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
