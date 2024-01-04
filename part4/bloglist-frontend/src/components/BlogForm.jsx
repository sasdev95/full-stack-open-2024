import { useState } from 'react'
import blogService from '../services/blogs'

const BlogForm = ({ updateBlogs }) => {
  const [newBlog, setNewBlog] = useState({ title: '', author: '', url: '', likes: '' })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setNewBlog({ ...newBlog, [name]: value })
  }

  const handleAddBlog = (event) => {
    event.preventDefault()

    blogService.create(newBlog)
      .then(() => {
        setNewBlog({ title: '', author: '', url: '', likes: '' })
        // Fetch and update the blog list after adding a new blog
        blogService.getAll()
          .then(data => updateBlogs(data))
          .catch(error => console.error('Error fetching blogs:', error))
      })
      .catch(error => console.error('Error creating blog:', error))
  }

  return (
    <div>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleAddBlog}>
        <label>Title:</label>
        <input type="text" value={newBlog.title} onChange={handleInputChange} />

        <label>Author:</label>
        <input type="text" value={newBlog.author} onChange={handleInputChange} />

        <label>URL:</label>
        <input type="text" value={newBlog.url} onChange={handleInputChange} />

        <label>Likes:</label>
        <input type="number" value={newBlog.likes} onChange={handleInputChange} />

        <button type="submit">Add Blog</button>
      </form>
    </div>
  )
}

export default BlogForm
