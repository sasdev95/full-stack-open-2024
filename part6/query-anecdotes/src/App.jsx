import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useNotification } from './NotificationContext'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, voteAnecdote } from './services/anecdotes'

const App = () => {
  const queryClient = useQueryClient()
  const { dispatch } = useNotification()
  const { data: anecdotes, error, isLoading, isError } = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: false
  })

  const voteMutation = useMutation({
    mutationFn: voteAnecdote,
    onSuccess: (updatedAnecdote) => {
      const prevAnecdotes = queryClient.getQueryData(['anecdotes'])
      const newAnecdotes = prevAnecdotes.map(anecdote => 
        anecdote.id === updatedAnecdote.id ? updatedAnecdote : anecdote
      )
      queryClient.setQueryData(['anecdotes'], newAnecdotes.sort((a, b) => b.votes - a.votes))

      dispatch({ 
        type: 'SET_NOTIFICATION', 
        message: `Anecdote '${updatedAnecdote.content}' voted for`, 
        notificationType: 'info' 
      })
      setTimeout(() => dispatch({ type: 'CLEAR_NOTIFICATION'}), 5000)
    }
  })

  const handleVote = (anecdote) => {
    voteMutation.mutate(anecdote)
  }

  if (isLoading) {
    return <div>Loading anecdotes...</div>
  }
  if (isError) {
    return <div>Anecdote service not available due to problems on localhost server</div>
  }

  return (
    <div>
      <h3>Anecdote app</h3>
      <Notification />
      <AnecdoteForm />
      {anecdotes && anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
