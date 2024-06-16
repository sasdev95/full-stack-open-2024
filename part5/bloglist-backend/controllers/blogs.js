const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog
        .find({}).populate('user', { username: 1, name: 1 })
    response.json(blogs)
})

blogsRouter.get('/:id', async (request, response) => {
    const blog = await Blog.findById(request.params.id)
    if (blog) {
        response.json(blog)
    } else {
        response.status(404).end()
    }
})

blogsRouter.post('/', async (request, response) => {
    const user = request.user
    if (!user) {
        return response.status(401).json({ error: 'authentication required' })
    }

    const blog = new Blog({
        title: request.body.title,
        author: request.body.author,
        url: request.body.url,
        likes: request.body.likes || 0,
        user: {
            _id: user._id,
            username: user.username,
            name: user.name
        }
    })

    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()
    
    response.status(201).json(savedBlog)
})

blogsRouter.delete('/:id', async (request, response, next) => {
    try {
        const blog = await Blog.findById(request.params.id)

        if (!blog) {
            return response.status(404).json({ error: 'blog not found' })
        }

        if (blog.user._id.toString() !== request.user._id.toString()) {
            return response.status(403).json({ error: 'only the creator can delete this blog' })
        }

        await Blog.findByIdAndDelete(request.params.id)
        response.status(204).end()
    } catch (error) {
        next(error)
    }
})

blogsRouter.put('/:id', async (request, response, next) => {
    const {likes} = request.body
    const blogUpdate = { likes }
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(
            request.params.id, 
            blogUpdate, 
            { new: true, runValidators: true }
        )
        response.json(updatedBlog)
    } catch (error) {
        next(error)
    }
})

module.exports = blogsRouter