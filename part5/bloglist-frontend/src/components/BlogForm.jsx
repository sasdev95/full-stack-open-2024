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
                title: <input value={title} onChange={({ target }) => setTitle(target.value)} />
            </div>
            <div>
                author: <input value={author} onChange={({ target }) => setAuthor(target.value)} />
            </div>
            <div>
                url: <input value={url} onChange={({ target }) => setUrl(target.value)} />
            </div>
            <button type="submit">create</button>
        </form>
    )
}

export default BlogForm