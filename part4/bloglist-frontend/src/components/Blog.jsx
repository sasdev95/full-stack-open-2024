const Blog = ({ blog }) => {
    return (
      <div>
        <p><strong>Title:</strong> {blog.title}</p>
        <p><strong>Author:</strong> {blog.author}</p>
        <p><strong>URL:</strong> {blog.url}</p>
        <p><strong>Likes:</strong> {blog.likes}</p>
        <hr />
      </div>
    )
  }
  
  export default Blog