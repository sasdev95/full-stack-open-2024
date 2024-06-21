import { useDispatch } from 'react-redux'
import { createAnecdoteAndNotify } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
  
    const addAnecdote = (event) => {
      event.preventDefault()
      const content = event.target.anecdote.value
      dispatch(createAnecdoteAndNotify(content))
      event.target.anecdote.value = ''
    }
  
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
          <div><input name="anecdote" /></div>
          <button type="submit">create</button>
        </form>
      </div>
    )
  }
  
export default AnecdoteForm