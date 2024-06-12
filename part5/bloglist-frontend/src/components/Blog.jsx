import { useState } from 'react'

const Blog = ({ blog, onLike, onRemove, currentUser }) => {
    const [visible, setVisible] = useState(false)
    const toggleVisibility = () => setVisible(!visible)

    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }

    const detailStyle = {
        display: visible ? '' : 'none'
    }

    const handleRemove = () => {
        if (window.confirm(`Remove blog "${blog.title}" by ${blog.author}?`)) {
          onRemove(blog.id)
        }
    }
    return (
        <div>
            <div style={blogStyle}>
                <div>
                    {blog.title} &nbsp;
                    <button onClick={toggleVisibility}>
                        {visible ? 'hide' : 'view'}
                    </button>
                </div>  
                <div style={detailStyle}>
                    <p>{blog.url}</p>
                    <p>{blog.likes} likes <button onClick={() => onLike(blog)}>like</button></p>
                    <p>{blog.author}</p>
                    {blog.user && (
                        <button onClick={handleRemove}>remove</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Blog
