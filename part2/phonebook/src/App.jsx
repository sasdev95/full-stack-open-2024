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

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    }

    const existingPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())

    if (existingPerson) {
      // Prompt user for confirmation
      const confirmUpdate = window.confirm(
        `${newName} is already added to phonebook. Replace the old number with a new one?`
      )

      if (confirmUpdate) {  // Update existing person's phone number in phonebook
        personService
          .update(existingPerson.id, nameObject)
          .then(updatedPerson => {
            setPersons(persons.map(person =>
              person.id === updatedPerson.id ? updatedPerson : person
            ))
            setDisplayMessage(
              `Updated ${existingPerson.name}'s number to ${newNumber}`
            )
            setTimeout(() => {
              setDisplayMessage(null)
            }, 3000)
          })
          .catch(error => {
            setDisplayMessage(`Information of ${existingPerson.name} has already been removed from server`)
            setTimeout(() => {
              setDisplayMessage(null)
            }, 3000)
          })
        }
    } else {  // Add new person to phonebook 
      personService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setDisplayMessage(
            `Added ${newName}`
          )
          setTimeout(() => {
            setDisplayMessage(null)
          }, 3000)
        })
    }

    setNewName('')
    setNewNumber('')
  }

  const handleFilterChange = (event) => {
    setNameFilter(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const removePerson = (id) => {
    const personToRemove = persons.find(person => person.id === id)
    
    // Confirm removal with an alert
    const confirmRemoval = window.confirm(`Delete ${personToRemove.name}?`)

    if (confirmRemoval) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={displayMessage} />

      <Filter value={nameFilter} onChange={handleFilterChange} />
  
      <h3>Add a New Person</h3>
      
      <PersonForm 
        onSubmit={addName} 
        name={newName} 
        onNameChange={handleNameChange} 
        number={newNumber} 
        onNumberChange={handleNumberChange} 
      />

      <h3>Numbers</h3>
      
      <Persons persons={persons} nameFilter={nameFilter} onDelete={removePerson} />
      
    </div>
  )
}

export default App
