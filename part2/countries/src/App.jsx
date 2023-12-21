import { useState, useEffect } from 'react'
import Countries from './components/Countries'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([]) 
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
    .then(response => {
      setCountries(response.data)
    })
  }, [])

  const handleChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <Filter value={filter} onChange={handleChange} />

      <Countries countries={countries} filter={filter} />
    </div>
  )
}

export default App
