const express = require('express')
const app = express()
var morgan = require('morgan')  // Add morgan middleware to app for logging
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(express.static('dist'))

morgan.token('info', function getInfo (request) {
    return request.info
})

// Configure morgan to log msgs to console based on the tiny configuration + person info
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :info'))

let persons = [
    { 
        "id": 1,
        "name": "Arto Hellas", 
        "number": "040-123456"
    },
    { 
        "id": 2,
        "name": "Ada Lovelace", 
        "number": "39-44-5323523"
    },
    { 
        "id": 3,
        "name": "Dan Abramov", 
        "number": "12-43-234345"
    },
    { 
        "id": 4,
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

app.get('/info', (request, response) => {
    const numberOfPersons = persons.length
    const requestTime = new Date().toString()

    const info = 
        `<p>Phonebook has info for ${numberOfPersons} people</p>
         <p>${requestTime}</p>`

    response.send(info)
})

app.post('/api/persons', (request, response, next) => {
    const body = request.body

    request.info = JSON.stringify(body)
    next()

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'Name and number are required'
        })
    }

    // Check if name already exists in phonebook
    const duplicateName = persons.find(person => person.name === body.name)
    if (duplicateName) {
        return response.status(400).json({
            error: 'Name must be unique'
        })
    }

    const person = {
        id: Math.floor(Math.random() * 10000),
        name: body.name,
        number: '012-345-6789'
    }

    persons = persons.concat(person)

    response.json(person)
    //next()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
