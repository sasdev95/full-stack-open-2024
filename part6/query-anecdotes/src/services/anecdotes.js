import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = async () => {
    const response = await axios.get(baseUrl)
    return response.data.sort((a, b) => b.votes - a.votes)
}

export const createAnecdote = async (anecdote) => {
    const response = await axios.post(baseUrl, { content: anecdote.content, votes: 0 })
    return response.data
}

export const voteAnecdote = async (anecdote) => {
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    const response = await axios.put(`${baseUrl}/${updatedAnecdote.id}`, updatedAnecdote)
    return response.data
}