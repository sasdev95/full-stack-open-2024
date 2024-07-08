import { useQuery, useSubscription } from '@apollo/client'
import { GET_BOOKS, BOOK_ADDED } from '../queries'
import { useState } from 'react'

const Books = ({ show }) => {
  const { data, loading, error, refetch } = useQuery(GET_BOOKS, { skip: !show })
  const [selectedGenre, setSelectedGenre] = useState('all genres')

  useSubscription(BOOK_ADDED, {
    onSubscriptionData: ({ subscriptionData }) => {
      const newBook = subscriptionData.data.bookAdded
      alert(`New book added: ${newBook.title}`)
      refetch()
    }
  })

  if (!show) return null
  if (loading) return <p>Loading books...</p>
  if (error) return <p>Error loading books: {error.message}</p>

  if (!data || !data.allBooks) return <p>No books available.</p>;

  const genres = ['all genres', ...new Set(data.allBooks.flatMap(book => book.genres))]

  const filteredBooks = selectedGenre === 'all genres'
    ? data.allBooks
    : data.allBooks.filter(book => book.genres.includes(selectedGenre))


  return (
    <div>
      <h2>Books</h2>
      {selectedGenre !=='all genres' && <p>in genre <b>{selectedGenre}</b></p>}
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Author</th>
            <th>Published</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book.title}>
              <td>{book.title}</td>
              <td>{book.author.name}</td>
              <td>{book.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {genres.map(genre => (
          <button key={genre} onClick={() => setSelectedGenre(genre)} style={{ margin: '0px' }}>
            {genre}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Books
