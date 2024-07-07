import { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import Select from 'react-select'
import { GET_AUTHORS, SET_AUTHOR_BIRTHYEAR } from '../queries'

const Authors = ({ show, token }) => {
  const { data, loading, error } = useQuery(GET_AUTHORS, { skip: !show })
  const [selectedAuthor, setSelectedAuthor] = useState('')
  const [born, setBorn] = useState('')

  const [editAuthor] = useMutation(SET_AUTHOR_BIRTHYEAR, {
    refetchQueries: [{ query: GET_AUTHORS }],
    onError: (error) => {
      alert(`An error occurred, please try again.`)
      console.error(`Error: ${error.message}`)
    },
    onCompleted: () => {
      alert('Author updated successfully!')
      setSelectedAuthor(null)
      setBorn('')
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!selectedAuthor || !born) {
      alert("Please select an author and enter a valid birth year.")
      return
    }
    editAuthor({ 
      variables: { 
        name: selectedAuthor.value,
        born: parseInt(born, 10) 
      } 
    })
  }

  const options = data?.allAuthors.map(author => ({
    value: author.name,
    label: author.name
  }))

  if (!show) return null
  if (loading) return <p>Loading authors...</p>
  if (error) return <p>Error loading authors: {error.message}</p>

  return (
    <div>
      <h2>Authors</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Born</th>
            <th>Books</th>
          </tr>
        </thead>
        <tbody>
          {data && data.allAuthors.map((author) => (
            <tr key={author.name}>
              <td>{author.name}</td>
              <td>{author.born}</td>
              <td>{author.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {token && (
        <div>
          <h3>Set Birth Year</h3>
          <form onSubmit={handleSubmit}>
            <Select
              value={selectedAuthor}
              onChange={setSelectedAuthor}
              options={options}
              className="react-select-container"
              classNamePrefix="react-select"
            />
            <input
              type="number"
              value={born}
              onChange={(e) => setBorn(e.target.value)}
              placeholder="Set birth year"
            />
            <br />
            <button type="submit">Update Author</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Authors
