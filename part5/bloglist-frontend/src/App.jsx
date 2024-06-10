import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
    const [blogs, setBlogs] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [notification, setNotification] = useState({ message: null, isError: false })

    useEffect(() => {
        blogService.getAll().then(blogs =>
            setBlogs(blogs)
        )  
    }, [])

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            blogService.setToken(user.token)
        }
    }, [])

    const showNotification = (message, isError = false) => {
        setNotification({ message, isError })
        setTimeout(() => {
          setNotification({ message: null, isError: false })
        }, 3000)
    }

    const createBlog = async (blogData) => {
        try {
          const newBlog = await blogService.create(blogData)
          setBlogs(blogs.concat(newBlog))
          showNotification(`A new blog ${newBlog.title} by ${newBlog.author} added`)
        } catch (exception) {
            showNotification('Failed to add blog', true)
        }
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({
                username, password,
            })
            window.localStorage.setItem(
                'loggedBlogAppUser', JSON.stringify(user)
            ) 
            blogService.setToken(user.token)
            setUser(user)
            showNotification('Logged in successfully')
            setUsername('')
            setPassword('')
        } catch (exception) {
            showNotification('Wrong username or password', true)
            setTimeout(() => {
                setErrorMessage(null)
            }, 3000)
        }
    }

    const handleLogout = () => {
        window.localStorage.removeItem('loggedBlogAppUser')
        setUser(null)
        blogService.setToken(null)
    }

    const loginForm = () => (
        <div>
            <h2>Log in to application</h2>
            <Notification message={notification.message} isError={notification.isError} />
            <form onSubmit={handleLogin}>
                <div>
                    username &nbsp;
                    <input
                    type="text"
                    value={username} 
                    name="Username"
                    onChange={({ target }) => setUsername(target.value)}
                    />
                </div>
                <div>
                    password &nbsp;
                    <input
                    type="password"
                    value={password}
                    name="Password"
                    onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <button type="submit">login</button>
            </form>      
        </div>
    )

    if (user === null) {  // User not logged in
        return loginForm()
    }
    
    return (  // User is logged in
        <div>
            <h2>Blogs</h2>
            <Notification message={notification.message} isError={notification.isError} />
            <p>{user.name} logged in <button onClick={handleLogout}>logout</button></p>
            <BlogForm createBlog={createBlog} />
            <br/>
            {blogs.map(blog =>
                <Blog key={blog.id} blog={blog} />
            )}
        </div>
    )
}

export default App