import { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
    const [blogs, setBlogs] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [notification, setNotification] = useState({ message: null, isError: false })

    const blogFormRef = useRef()

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            blogService.setToken(user.token)
        }
    }, [])

    useEffect(() => {
        blogService.getAll().then(blogs => {
            const sortedBlogs = blogs.sort((a, b) => b.likes - a.likes)
            setBlogs(sortedBlogs)
        })  
    }, [])

    const showNotification = (message, isError = false) => {
        setNotification({ message, isError })
        setTimeout(() => {
          setNotification({ message: null, isError: false })
        }, 3000)
    }

    const createBlog = async (blogData) => {
        blogFormRef.current.toggleVisibility()
        try {
          const newBlog = await blogService.create(blogData)
          //setBlogs(blogs.concat(newBlog))
          const updatedBlogs = blogs.concat(newBlog)
          updatedBlogs.sort((a, b) => b.likes - a.likes)
          setBlogs(updatedBlogs)
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
                setNotification({ message: null, isError: false })
            }, 3000)
        }
    }

    const handleLogout = () => {
        window.localStorage.removeItem('loggedBlogAppUser')
        setUser(null)
        blogService.setToken(null)
    }

    const handleLike = async (blogToLike) => {
        try {
            const updatedBlog = {
                ...blogToLike,
                likes: blogToLike.likes + 1
            }
            const returnedBlog = await blogService.update(blogToLike.id, updatedBlog)
            const updatedBlogs = blogs.map(blog => blog.id === returnedBlog.id ? returnedBlog : blog)
            updatedBlogs.sort((a, b) => b.likes - a.likes)
            setBlogs(updatedBlogs)
        } catch (error) {
            console.error('Error updating the blog:', error)
        }
    }

    const handleRemoveBlog = async (id) => {
        try {
            await blogService.remove(id)
            setBlogs(blogs.filter(blog => blog.id !== id))
            showNotification(`Blog deleted successfully`)
        } catch (error) {
            showNotification("Failed to delete blog", true)
        }
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
            <Togglable buttonLabel="create blog" ref={blogFormRef}>
                <BlogForm createBlog={createBlog} />
            </Togglable>
            <br/>

            {blogs.map(blog =>
                <Blog key={blog.id} blog={blog} onLike={() => handleLike(blog)} onRemove={() => handleRemoveBlog(blog.id)} currentUser={user} />
            )}
        </div>
    )
}

export default App