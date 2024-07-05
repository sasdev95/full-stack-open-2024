import { useQuery } from '@apollo/client'
import { GET_BOOKS } from '../queries'

const Books = ({ show }) => {
  const { data, loading, error } = useQuery(GET_BOOKS, { skip: !show })

  if (!show) return null
  if (loading) return <p>Loading books...</p>
  if (error) return <p>Error loading books: {error.message}</p>

  return (
    <div>
      <h2>books</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Author</th>
            <th>Published</th>
          </tr>
        </thead>
        <tbody>
          {data && data.allBooks.map((book) => (
            <tr key={book.title}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Books
