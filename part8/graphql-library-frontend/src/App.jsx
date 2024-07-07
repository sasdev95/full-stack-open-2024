import { useApolloClient } from '@apollo/client'
import { useState } from 'react'

import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import Recommendations from './components/Recommendations'
import LoginForm from './components/LoginForm'
import Notify from './components/Notify'

const App = () => {
    const [page, setPage] = useState("authors")
    const [token, setToken] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')
    const client = useApolloClient()

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
          <Notify errorMessage={errorMessage} />
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