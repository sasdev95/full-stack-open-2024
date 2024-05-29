import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [displayMessage, setDisplayMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    
    const existingPerson = persons.find(person => person.name === newName)
    // Person exists in phonebook
    if (existingPerson) {
      const confirmUpdate = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      if (confirmUpdate) {
        const updatedPerson = { ...existingPerson, number: newNumber }
        personService.update(existingPerson.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== existingPerson.id ? person : returnedPerson))
            setDisplayMessage({
              text: `Updated ${existingPerson.name}'s number to ${newNumber}`,
              type: 'success'
            })
            setTimeout(() => {
              setDisplayMessage(null)
            }, 5000)
          })
          .catch(error => {
            setDisplayMessage({
              //text: `Information of ${existingPerson.name} has already been removed from server`,
              text: error.response.data.error,
              type: 'error'
            })
            setTimeout(() => {
              setDisplayMessage(null)
            }, 5000)
          })
      } 
    // Person does not exist in phonebook
    } else {  
      const personObject = {
        name: newName,
        number: newNumber
      }
  
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setDisplayMessage({
            text: `Added ${newName}`,
            type: 'success'
          })
          setTimeout(() => {
            setDisplayMessage(null)
          }, 5000)
        })
        .catch(error => {
          if (error.response && error.response.data) {
            console.error(error.response.data.error)
            setDisplayMessage({ 
              text: error.response.data.error, 
              type: 'error' 
            })
          } else {
            setDisplayMessage({ 
              text: 'An unexpected error occurred',
              type: 'error' 
            })
          }
          setTimeout(() => {
            setDisplayMessage(null)
          }, 3000)
        })
    }
    setNewName('')
    setNewNumber('')
  }

  const deletePerson = id => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
        .catch(() => {
          alert(`The person '${person.name}' was already deleted from server`)
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }

  const filteredPersons = nameFilter
    ? persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
    : persons

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setNameFilter(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={displayMessage} />
      <Filter value={nameFilter} onChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        onSubmit={addPerson}
        name={newName}
        onNameChange={handleNameChange}
        number={newNumber}
        onNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} onDelete={deletePerson} />
    </div>
  )
}

export default App