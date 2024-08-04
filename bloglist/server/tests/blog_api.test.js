const { test, after, beforeEach, describe } = require('node:test');
const assert = require('node:assert');
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);
const bcrypt = require('bcrypt');

const helper = require('./test_helper');

const User = require('../models/user');
const Blog = require('../models/blog');

describe('when there are initially some blogs saved', () => {
    let token;

    beforeEach(async () => {
        await User.deleteMany({});
        await Blog.deleteMany({});

        const newUser = {
            username: 'testuser',
            name: 'Test User',
            password: 'testpass123',
        };

        await api.post('/api/users').send(newUser);

        const loginResponse = await api.post('/api/login').send({
            username: 'testuser',
            password: 'testpass123',
        });

        token = loginResponse.body.token;

        const user = await User.findOne({ username: 'testuser' });

        const blogsWithUser = helper.initialBlogs.map(blog => ({
            ...blog,
            user: {
                _id: user._id,
                username: user.username,
                name: user.name
            }
        }));

        await Blog.insertMany(blogsWithUser);
    });

    test('blogs are returned as json', async () => {
        const response = await helper.fetchBlogs();
        assert.strictEqual(response.body.length, helper.initialBlogs.length);
    });

    test('unique identifier property of blog posts is named "id"', async () => {
        const response = await helper.fetchBlogs();
        const blog = response.body[0];
        assert.strictEqual(
            typeof blog.id,
            'string',
            'Blog post should have an "id" property'
        );
        assert.strictEqual(blog._id, undefined, '"_id" should be undefined');
    });

    test('a valid blog can be added', async () => {
        const newBlog = {
            title: 'this is a test blog',
            author: 'test blogger',
            url: 'testblogurl.com',
            likes: 7,
        };

        await helper.createValidBlog(newBlog, token);

        const blogsAtEnd = await helper.blogsInDb();
        assert.strictEqual(blogsAtEnd.length, helper.initialBlogs.length + 1);

        const contents = blogsAtEnd.map((b) => b.title);
        assert(contents.includes('this is a test blog'));
    });

    test('likes default to 0 if not provided in blog post', async () => {
        const newBlog = {
            title: 'blog without likes property',
            author: 'Like-Free',
            url: 'nolikesblogurl.com',
        };

        await helper.createValidBlog(newBlog, token);

        const blogsAtEnd = await helper.blogsInDb();
        const addedBlog = blogsAtEnd.find(
            (b) => b.title === 'blog without likes property'
        );
        assert.strictEqual(
            addedBlog.likes,
            0,
            'likes should default to 0 when not specified'
        );
    });

    test('blog without title is not added', async () => {
        const newBlog = {
            author: 'no title',
            url: 'http://notitle.com',
            likes: 2,
        };

        await helper.createInvalidBlog(newBlog, token);

        const blogsAtEnd = await helper.blogsInDb();
        assert.strictEqual(
            blogsAtEnd.length,
            helper.initialBlogs.length,
            'No new blog should be added'
        );
    });

    test('blog without url is not added', async () => {
        const newBlog = {
            title: 'no url',
            author: 'url hater',
            likes: 3,
        };

        await helper.createInvalidBlog(newBlog, token);

        const blogsAtEnd = await helper.blogsInDb();
        assert.strictEqual(
            blogsAtEnd.length,
            helper.initialBlogs.length,
            'No new blog should be added'
        );
    });

    test('a blog can be deleted', async () => {
        const newBlog = {
            title: 'this is a test blog',
            author: 'test blogger',
            url: 'testblogurl.com',
            likes: 7,
        };

        await helper.createValidBlog(newBlog, token);

        const blogsAtStart = await helper.blogsInDb();

        const blogToDelete = blogsAtStart[2];

        await api
            .delete(`/api/blogs/${blogToDelete.id}`)
            .set('Authorization', `Bearer ${token}`)
            .expect(204);

        const blogsAtEnd = await helper.blogsInDb();
        assert.strictEqual(blogsAtEnd.length, blogsAtStart.length - 1);

        const titles = blogsAtEnd.map((r) => r.title);
        assert(!titles.includes(blogToDelete.title));
    });

    test('updating the likes of a blog', async () => {
        const blogsAtStart = await helper.blogsInDb();
        const blogToUpdate = blogsAtStart[0];

        const updatedBlogData = {
            likes: blogToUpdate.likes + 1,
        };

        await api
            .put(`/api/blogs/${blogToUpdate.id}`)
            .send(updatedBlogData)
            .expect(200)
            .expect('Content-Type', /application\/json/);

        const blogsAtEnd = await helper.blogsInDb();
        const updatedBlog = blogsAtEnd.find((b) => b.id === blogToUpdate.id);

        assert.strictEqual(
            updatedBlog.likes,
            blogToUpdate.likes + 1,
            'Likes should be incremented by 1'
        );
    });
});

describe('when there is initially one user in db', () => {
    beforeEach(async () => {
        await User.deleteMany({});

        const passwordHash = await bcrypt.hash('sekret', 10);
        const user = new User({ username: 'root', passwordHash });

        await user.save();
    });

    test('creation succeeds with a fresh username', async () => {
        const usersAtStart = await helper.usersInDb();

        const newUser = {
            username: 'sasdevn',
            name: 'Devon Sasaki',
            password: 'sde123',
        };

        await api
            .post('/api/users')
            .send(newUser)
            .expect(201)
            .expect('Content-Type', /application\/json/);

        const usersAtEnd = await helper.usersInDb();
        assert.strictEqual(usersAtEnd.length, usersAtStart.length + 1);

        const usernames = usersAtEnd.map((u) => u.username);
        assert(usernames.includes(newUser.username));
    });

    test('fails with status code 400 if username is missing', async () => {
        const usersAtStart = await helper.usersInDb();

        const newUser = {
            name: 'Devon Sasaki',
            password: 'sde123',
        };

        const result = await api
            .post('/api/users')
            .send(newUser)
            .expect(400)
            .expect('Content-Type', /application\/json/);

        const usersAtEnd = await helper.usersInDb();
        assert(
            result.body.error,
            'username of at least 3 characters must be provided'
        );

        assert.strictEqual(usersAtEnd.length, usersAtStart.length);
    });

    test('fails with status code 400 if password is too short', async () => {
        const usersAtStart = await helper.usersInDb();

        const newUser = {
            username: 'sasdevn',
            name: 'Devon Sasaki',
            password: 'sd',
        };

        const result = await api
            .post('/api/users')
            .send(newUser)
            .expect(400)
            .expect('Content-Type', /application\/json/);

        const usersAtEnd = await helper.usersInDb();
        assert(
            result.body.error,
            'password must be at least 3 characters long'
        );

        assert.strictEqual(usersAtEnd.length, usersAtStart.length);
    });

    test('fails with status code 400 if username is already taken', async () => {
        const usersAtStart = await helper.usersInDb();

        const newUser = {
            username: 'root',
            name: 'Superuser',
            password: 'sde123',
        };

        const result = await api
            .post('/api/users')
            .send(newUser)
            .expect(400)
            .expect('Content-Type', /application\/json/);

        const usersAtEnd = await helper.usersInDb();
        assert(result.body.error.includes('expected `username` to be unique'));

        assert.strictEqual(usersAtEnd.length, usersAtStart.length);
    });
});

after(async () => {
    await mongoose.connection.close();
});
