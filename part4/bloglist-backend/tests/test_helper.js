const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
    {
        "title": "Test Blog 1",
        "author": "Blog Guy",
        "url": "fakeblogurl.com",
        "likes": 4
    },
    {
        "title": "Test Blog 2",
        "author": "Blog Gal",
        "url": "fakeblogurl2.com",
        "likes": 8
    }
]

const nonExistingId = async () => {
    const blog = new Blog({ title: 'willremovethissoon' })
    await blog.save()
    await blog.deleteOne()

    return blog._id.toString()
}

const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
}

const fetchBlogs = async () => {
    return await api
            .get('/api/blogs')
            .expect(200)
            .expect('Content-Type', /application\/json/)
}

const createValidBlog = async (blog, token) => {
    return await api
            .post('/api/blogs')
            .set('Authorization', `Bearer ${token}`)
            .send(blog)
            .expect(201)
            .expect('Content-Type', /application\/json/)
}

const createInvalidBlog = async (blog, token) => {
    return await api
            .post('/api/blogs')
            .set('Authorization', `Bearer ${token}`)
            .send(blog)
            .expect(400)
}

module.exports = {
    initialBlogs, 
    nonExistingId, 
    blogsInDb,
    usersInDb,
    fetchBlogs,
    createValidBlog,
    createInvalidBlog
}