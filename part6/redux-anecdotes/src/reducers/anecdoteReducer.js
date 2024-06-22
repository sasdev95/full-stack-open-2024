import { createSlice } from '@reduxjs/toolkit'
import { setNotificationWithTimeout } from './notificationReducer'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
        voteAnecdote(state, action) {
            const updatedAnecdote = action.payload
            return state.map(anecdote =>
                anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote
            ).sort((a, b) => b.votes - a.votes)
        },
        appendAnecdote(state, action) {
            state.push(action.payload)
        },
        setAnecdotes(state, action) {
            return action.payload
        }
    }
})

export const { voteAnecdote, appendAnecdote, setAnecdotes } = 
anecdoteSlice.actions

export const voteAndNotify = id => async (dispatch, getState) => {
    const anecdote = getState().anecdotes.find(a => a.id === id)
    if (anecdote) {
        const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
        try {
            const returnedAnecdote = await anecdoteService.update(id, updatedAnecdote)
            dispatch(voteAnecdote(returnedAnecdote))
            dispatch(setNotificationWithTimeout(`You voted '${anecdote.content}'`, 5))
        } catch (error) {
            console.error('Failed to update anecdote votes:', error)
        }
    }
}

export const createAnecdoteAndNotify = content => {
    return async dispatch => {
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch(appendAnecdote(newAnecdote))
        dispatch(setNotificationWithTimeout(`You added '${content}'`, 5))
    }
}

export const initializeAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()
        dispatch(setAnecdotes(anecdotes))
    }
}

export default anecdoteSlice.reducer