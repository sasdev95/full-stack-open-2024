const { GraphQLError } = require('graphql')
const jwt = require('jsonwebtoken')
const { PubSub } = require('graphql-subscriptions')
const pubsub = new PubSub()

const Author = require('./models/author')
const Book = require('./models/book')
const User = require('./models/user')

const resolvers = {
    Query: {
        allBooks: async (_, { author, genre }) => {
            let query = {}

            if (author) {
                const authorDoc = await Author.findOne({ name: author })
                if (authorDoc) {
                    query.author = authorDoc._id
                } else {
                    return []
                }
            }

            if (genre) {
                query.genres = { $in: [genre] }
            }

            return Book.find(query).populate('author')
        },
        allAuthors: async () =>  {
            const authors = await Author.find({})
            const books = await Book.find({})
            return authors.map(author => {
                const authorBooks = books.filter(book => book.author.toString() === author.id.toString())
                return {
                    ...author.toObject(),
                    bookCount: authorBooks.length
                }
            })
        },
        me: (_, args, { currentUser }) => {
            if (!currentUser) {
                throw new GraphQLError('You must be logged in to perform this action', {
                    extensions: {
                        code: 'UNAUTHENTICATED'
                    }
                })
            }
            return currentUser
        },
        recommendedBooks: async (_, args, { currentUser }) => {
            if (!currentUser) {
                throw new GraphQLError('You must be logged in to see book recommendations', {
                    extensions: {
                        code: 'UNAUTHENTICATED'
                    }
                })
            }
            return Book.find({ genres: currentUser.favoriteGenre }).populate('author')
        }
    },
    Mutation: {
        addBook: async (_,  { title, author, published, genres }, { currentUser }) => {
            try {
                if (!currentUser) {
                    throw new GraphQLError('You must be logged in to perform this action', {
                        extensions: {
                            code: 'UNAUTHENTICATED'
                        }
                    })
                }
                console.log(currentUser)
                let authorDoc = await Author.findOne({ name: author })
                if (!authorDoc) {
                    authorDoc = new Author({ name: author })
                    await authorDoc.save()
                }

                const book = new Book({ 
                    title,
                    author: authorDoc._id,
                    published,
                    genres
                })
                await book.save()
                pubsub.publish('BOOK_ADDED', { bookAdded: book })
                return book.populate('author')
            } catch (error) {
                if (error.name === 'ValidationError') {
                    const messages = Object.values(error.errors).map(val => val.message)
                    throw new GraphQLError('Failed to add book due to validation errors: ' + messages.join(', '), {
                        extensions: {
                            code: 'BAD_USER_INPUT',
                            errors: error.errors,
                            validation: true
                        }
                    })
                }
                throw new GraphQLError('Internal server error', {
                   extensions: { code: 'INTERNAL_SERVER_ERROR' }
                })
            }
        },
        editAuthor: async (_, { name, setBornTo }, { currentUser }) => {
            try {
                if (!currentUser) {
                    throw new GraphQLError('You must be logged in to perform this action', {
                        extensions: {
                            code: 'UNAUTHENTICATED'
                        }
                    })
                }
                const author = await Author.findOneAndUpdate(
                    { name },
                    { born: setBornTo },
                    { new: true, runValidators: true }
                )
                if (!author) {
                    throw new GraphQLError("Author not found", {
                        extensions: {
                            code: 'NOT_FOUND',
                            detail: "The author you are trying to update does not exist."
                        }
                    })
                }

                const bookCount = await Book.countDocuments({ author: author._id })

                return {
                    ...author.toObject(),
                    bookCount
                }
            } catch (error) {
                if (error.name === 'ValidationError') {
                    const messages = Object.values(error.errors).map(val => val.message)
                    throw new GraphQLError('Failed to update author due to validation errors: ' + messages.join(', '), {
                        extensions: {
                            code: 'BAD_USER_INPUT',
                            error: error.errors
                        }
                    })
                }
                throw new GraphQLError('Internal server error', {
                    extensions: { code: 'INTERNAL_SERVER_ERROR' }
                })
            }
        },
        createUser: async (_, { username, favoriteGenre }) => {
            try {
                const newUser = new User({ username, favoriteGenre })
                await newUser.save()
                return newUser
            } catch (error) {
                throw new GraphQLError('Error creating user: ' + error.message, {
                    extensions: {
                        code: 'DATABASE_ERROR'
                    }
                })
            }
        },
        login: async (_, { username, password }) => {
            const user = await User.findOne({ username })
            if (!user || password !== 'secret') {
                throw new GraphQLError('Invalid username or password', {
                    extensions: {
                        code: 'UNAUTHENTICATED'
                    }
                })
            }

            const userForToken = {
                username: user.username,
                id: user._id
            }

            const token = jwt.sign(userForToken, process.env.JWT_SECRET, { expiresIn: '1h' })
            return { value: token }
        },

    },
    Book: {
        author: async (root) => {
            return Author.findById(root.author)
        }
    },
    Subscription: {
        bookAdded: {
            subscribe: () => pubsub.asyncIterator('BOOK_ADDED')
        }
    }
}

module.exports = resolvers