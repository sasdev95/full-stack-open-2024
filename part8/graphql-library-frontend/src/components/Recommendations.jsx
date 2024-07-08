import { useQuery } from '@apollo/client'
import { GET_RECOMMENDED_BOOKS } from '../queries'

const Recommendations = ({ show }) => {
  const { data, loading, error } = useQuery(GET_RECOMMENDED_BOOKS, { 
    skip: !show,
  })

  if (!show) return null
  if (loading) return <p>Loading books...</p>
  if (error) return <p>Error loading books: {error.message}</p>

  return (
    <div>
      <h2>Recommendations</h2>
      <p>Books in your favorite genre <b>{data.me.favoriteGenre}</b></p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Author</th>
            <th>Published</th>
          </tr>
        </thead>
        <tbody>
          {data.recommendedBooks.map((book) => (
            <tr key={book.title}>
              <td>{book.title}</td>
              <td>{book.author.name}</td>
              <td>{book.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Recommendations
