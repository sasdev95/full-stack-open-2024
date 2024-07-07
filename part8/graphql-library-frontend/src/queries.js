import { gql } from '@apollo/client'

export const GET_AUTHORS = gql`
    query {
        allAuthors {
            name
            born
            bookCount
        }
    }
`

export const GET_BOOKS = gql`
    query allBooks($genre: String) {
        allBooks(genre: $genre) {
            title
            published
            genres
            author {
                name
                born
            }
        }
    }
`

export const GET_RECOMMENDED_BOOKS = gql`
    query {
        me {
            favoriteGenre
        }
        recommendedBooks {
            title
            author {
                name
            }
            published
        }
    }
`

export const ADD_BOOK = gql`
    mutation AddBook($title: String!, $author: String!, $published: Int!, $genres: [String!]!) {
        addBook(
            title: $title,
            author: $author,
            published: $published,
            genres: $genres
        ) {
            title
            published
            genres
            author {
                name
                born
            }
        }
    }
`

export const SET_AUTHOR_BIRTHYEAR = gql`
    mutation SetAuthorBirthYear($name: String!, $born: Int!) {
        editAuthor(name: $name, setBornTo: $born) {
            name
            born
            bookCount
        }
    }
`

export const LOGIN = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password)  {
            value
        }
    }
`