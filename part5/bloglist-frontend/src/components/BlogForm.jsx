import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const handleCreateBlog = (event) => {
        event.preventDefault()
        createBlog({ title, author, url })
        setTitle('')
        setAuthor('')
        setUrl('')
    }

    return (
        <form onSubmit={handleCreateBlog}>
            <h2>Create New Blog</h2>
            <div>
                Title: <input value={title} onChange={event => setTitle(event.target.value)} />
            </div>
            <div>
                Author: <input value={author} onChange={event => setAuthor(event.target.value)} />
            </div>
            <div>
                URL: <input value={url} onChange={event => setUrl(event.target.value)} />
            </div>
            <button type="submit">create</button>
        </form>
    )
}

export default BlogForm