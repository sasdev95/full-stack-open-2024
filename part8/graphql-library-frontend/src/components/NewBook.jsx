import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_BOOK, GET_BOOKS } from '../queries'

const NewBook = ({ show }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [published, setPublished] = useState('')
  const [genre, setGenre] = useState('')
  const [genres, setGenres] = useState([])

  const [createBook] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
    onError: (error) => {
      console.log(`Error adding book: ${error.message}`)
    }
  })  

  const submit = async (event) => {
    event.preventDefault()

    if (!title || !author || !published || genres.length === 0) {
      alert("All fields must be filled out, and at least one genre must be added.")
      return
    }

    createBook({ variables: { title, author, published: parseInt(published), genres } })

    setTitle('')
    setPublished('')
    setAuthor('')
    setGenres([])
    setGenre('')
  }

  const addGenre = () => {
    setGenres(genres.concat(genre))
    setGenre('')
  }

  if (!show) return null

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          title <input value={title} onChange={({ target }) => setTitle(target.value)} />
        </div>
        <div>
          author <input value={author} onChange={({ target }) => setAuthor(target.value)} />
        </div>
        <div>
          published 
          <input type="number" value={published} onChange={({ target }) => setPublished(target.value)} />
        </div>
        <div>
          <input value={genre} onChange={({ target }) => setGenre(target.value)} />
          <button onClick={addGenre} type="button">add genre</button>
        </div>
        <div>genres: {genres.join(' ')}</div>
        <button type="submit">create book</button>
      </form>
    </div>
  )
}

export default NewBook