import { useApolloClient, useSubscription } from '@apollo/client'
import { useState } from 'react'

import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import Recommendations from './components/Recommendations'
import LoginForm from './components/LoginForm'
import Notify from './components/Notify'

import { GET_BOOKS, BOOK_ADDED } from './queries'

export const updateCache = (cache, query, addedBook) => {
    // helper that is used to eliminate saving same book twice
    const uniqueByName = (a) => {
        let seen = new Set()
        return a.filter((item) => {
            let k = item.name
            return seen.has(k) ? false : seen.add(k)
        })
    }

    cache.updateQuery(query, ({ allBooks }) => {
        return {
            allBooks: uniqueByName(allBooks.concat(addedBook)),
        }
    })
}

const App = () => {
    const [page, setPage] = useState("authors")
    const [token, setToken] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')
    const [notification, setNotification] = useState('')
    const client = useApolloClient()

    useSubscription(BOOK_ADDED, {
        onData: ({ data, client }) => {
            const addedBook = data.data.bookAdded
            const message = `${addedBook.title} by ${addedBook.author.name} added`
            setNotification(message)
            //setTimeout(() => setNotification('', 5000))
            updateCache(client.cache, { query: GET_BOOKS }, addedBook)
        }
    })
    
    const logout = () => {
        setToken(null)
        localStorage.clear()
        client.resetStore()
        setPage("authors")
    }

    const handleLogin = (token) => {
        setToken(token)
        setPage("authors")
    }

    return (
        <div>
          <Notify message={notification || errorMessage} />
            <div>
                <button onClick={() => setPage("authors")}>Authors</button>
                <button onClick={() => setPage("books")}>Books</button>
                {token ? (
                  <>
                      <button onClick={() => setPage("add")}>Add Book</button>
                      <button onClick={() => setPage("recommend")}>Recommend</button>
                      <button onClick={logout}>Logout</button>
                  </>
                ) : (
                    <button onClick={() => setPage("login")}>Login</button>
                )}
            </div>

            <Authors show={page === "authors"} token={token} />
            <Books show={page === "books"} />
            <NewBook show={page === "add"} />
            {page === "recommend" && <Recommendations show={page === "recommend"} />}
            {page === "login" && <LoginForm setError={setErrorMessage} setToken={handleLogin} />}
        </div>
    )
}

export default App