import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../services/anecdotes'
import { useNotification } from '../NotificationContext'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const { dispatch } = useNotification()
  
  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      if (anecdotes) {
        queryClient.setQueryData(['anecdotes'], [...anecdotes, newAnecdote])
        dispatch({
          type: 'SET_NOTIFICATION',
          message: `Anecdote '${newAnecdote.content}' added`,
          notificationType: 'info'
        })
        setTimeout(() => dispatch({ type: 'CLEAR_NOTIFICATION'}), 5000)
      }
    },
    onError: (error) => {
      dispatch({
        type: 'SET_NOTIFICATION',
        message: `Error adding anecdote:'${error.message}`,
        notificationType: 'error'
      })
      setTimeout(() => dispatch({ type: 'CLEAR_NOTIFICATION'}), 5000)
    }
  })

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value.trim()
    if (content.length >= 5) {
      newAnecdoteMutation.mutate({ content })
      event.target.anecdote.value = ''
    } else {
      dispatch({
        type: 'SET_NOTIFICATION',
        message: 'Anecdote must be at least 5 characters long.',
        notificationType: 'error'
      })
      setTimeout(() => dispatch({ type: 'CLEAR_NOTIFICATION'}), 5000)
    }
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={addAnecdote}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
      {newAnecdoteMutation.isError && <p>Error: {newAnecdoteMutation.error.message}</p>}
      {newAnecdoteMutation.isLoading && <p>Adding anecdote...</p>}
    </div>
  )
}

export default AnecdoteForm
