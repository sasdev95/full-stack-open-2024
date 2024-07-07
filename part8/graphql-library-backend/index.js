const { ApolloServer, AuthenticationError } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const { GraphQLError } = require('graphql')
const jwt = require('jsonwebtoken')

const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const Author = require('./models/author')
const Book = require('./models/book')
const User = require('./models/user')
require('dotenv').config()


const MONGODB_URI = process.env.MONGODB_URI
console.log('connecting to', MONGODB_URI)

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

let authors = [
  {
    name: 'Robert Martin',
    id: "afa51ab0-344d-11e9-a414-719c6709cf3e",
    born: 1952,
  },
  {
    name: 'Martin Fowler',
    id: "afa5b6f0-344d-11e9-a414-719c6709cf3e",
    born: 1963
  },
  {
    name: 'Fyodor Dostoevsky',
    id: "afa5b6f1-344d-11e9-a414-719c6709cf3e",
    born: 1821
  },
  { 
    name: 'Joshua Kerievsky',  // birthyear not known
    id: "afa5b6f2-344d-11e9-a414-719c6709cf3e",
  },
  { 
    name: 'Sandi Metz',  // birthyear not known
    id: "afa5b6f3-344d-11e9-a414-719c6709cf3e",
  },
]

let books = [
  {
    title: 'Clean Code',
    published: 2008,
    author: 'Robert Martin',
    id: "afa5b6f4-344d-11e9-a414-719c6709cf3e",
    genres: ['refactoring']
  },
  {
    title: 'Agile software development',
    published: 2002,
    author: 'Robert Martin',
    id: "afa5b6f5-344d-11e9-a414-719c6709cf3e",
    genres: ['agile', 'patterns', 'design']
  },
  {
    title: 'Refactoring, edition 2',
    published: 2018,
    author: 'Martin Fowler',
    id: "afa5de00-344d-11e9-a414-719c6709cf3e",
    genres: ['refactoring']
  },
  {
    title: 'Refactoring to patterns',
    published: 2008,
    author: 'Joshua Kerievsky',
    id: "afa5de01-344d-11e9-a414-719c6709cf3e",
    genres: ['refactoring', 'patterns']
  },  
  {
    title: 'Practical Object-Oriented Design, An Agile Primer Using Ruby',
    published: 2012,
    author: 'Sandi Metz',
    id: "afa5de02-344d-11e9-a414-719c6709cf3e",
    genres: ['refactoring', 'design']
  },
  {
    title: 'Crime and punishment',
    published: 1866,
    author: 'Fyodor Dostoevsky',
    id: "afa5de03-344d-11e9-a414-719c6709cf3e",
    genres: ['classic', 'crime']
  },
  {
    title: 'Demons',
    published: 1872,
    author: 'Fyodor Dostoevsky',
    id: "afa5de04-344d-11e9-a414-719c6709cf3e",
    genres: ['classic', 'revolution']
  },
]

const typeDefs = `
    type Author {
        name: String!
        born: Int
        bookCount: Int!
    }

    type Book {
        title: String!
        published: Int!
        author: Author!
        genres: [String!]!
        id: ID!
    }

    type User {
        username: String!
        favoriteGenre: String!
        id: ID!
    }

    type Token {
        value: String!
    }

    type Query {
        allBooks(author: String, genre: String): [Book!]!
        allAuthors: [Author!]!
        me: User
        recommendedBooks: [Book!]!
    }

    type Mutation {
        addBook(
            title: String!
            author: String!
            published: Int!
            genres: [String!]!
        ): Book!
        editAuthor(name: String!, setBornTo: Int!): Author
        createUser(username: String!, favoriteGenre: String!): User
        login(username: String!, password: String!): Token
    }
`

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

            const token = jwt.sign(userForToken, process.env.JWT_SECRET)
            return { value: token }
        },

    },
    Book: {
        author: async (root) => {
            return Author.findById(root.author)
        }
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }) => {
        const auth = req ? req.headers.authorization : null
        if (auth && auth.startsWith('Bearer ')) {
            try {
                const decodedToken = jwt.verify(auth.substring(7), process.env.JWT_SECRET)
                const currentUser = await User.findById(decodedToken.id)
                if (!currentUser) {
                    throw new GraphQLError('User not found', {
                        extensions: { code: 'UNAUTHENTICATED'}
                    })
                }
                return { currentUser }
            } catch (error) {
                throw new GraphQLError('Invalid or expired token', {
                    extensions: { code: 'UNAUTHENTICATED' }
                })
            }
        }
    }
}).then(({ url }) => {
    console.log(`Server ready at ${url}`)
})