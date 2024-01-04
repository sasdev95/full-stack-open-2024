import { useState, useEffect } from 'react'
import Blog from './components/Blog' 
import BlogForm from './components/BlogForm'
import blogService from './services/blogs' 

const App = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService.getAll()
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error))
  }, [])

  const updateBlogs = (data) => {
    setBlogs(data)
  }

  return (
    <div>
      <h1>Blog List</h1>

      <div>
        {Array.isArray(blogs) 
          ? blogs.map(blog => 
            <Blog key={blog._id} blog={blog} />
            )
          : <p>No blogs available.</p>
        }
      </div>

      <BlogForm updateBlogs={updateBlogs} />
    </div>
  )
}

export default App
