const dummy = (blogs) => {
  console.log(blogs)
  return 1
}

const totalLikes = (blogs) => {
  return blogs.length === 0
    ? 0
    : blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  return blogs.length === 0
    ? null
    : blogs.reduce((maxLikesBlog, currentBlog) =>
      currentBlog.likes > maxLikesBlog.likes
        ? currentBlog
        : maxLikesBlog,
    blogs[0])
}

const mostBlogs = (blogs) => {
  const result = blogs.reduce((acc, currentBlog) => {
    const author = currentBlog.author

    acc[author] = (acc[author] || 0) + 1

    // Update mostBlogsAuthor if the current author has more blogs
    acc.author = !acc.author || acc[author] > acc[acc.author] ? author : acc.author

    return acc
  }, {})

  return result.author
    ? { author: result.author, blogs: result[result.author] }
    : null
}

const mostLikes = (blogs) => {
  const result = blogs.reduce((acc, currentBlog) => {
    const author = currentBlog.author

    acc[author] = (acc[author] || 0) + currentBlog.likes

    // Update mostBlogsAuthor if the current author has more blogs
    acc.author = !acc.author || acc[author] > acc[acc.author] ? author : acc.author

    return acc
  }, {})

  return result.author
    ? { author: result.author, likes: result[result.author] }
    : null
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
}
