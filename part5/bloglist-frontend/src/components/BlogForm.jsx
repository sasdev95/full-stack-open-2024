import { useState } from 'react'

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
                <label htmlFor="title">Title:</label> &nbsp;
                <input id="title" value={title} onChange={event => setTitle(event.target.value)} />
            </div>
            <div>
                <label htmlFor="author">Author:</label> &nbsp;
                <input id="author" value={author} onChange={event => setAuthor(event.target.value)} />
            </div>
            <div>
                <label htmlFor="url">URL:</label> &nbsp;
                <input id="url" value={url} onChange={event => setUrl(event.target.value)} />
            </div>
            <button type="submit">create</button>
        </form>
    )
}

export default BlogForm