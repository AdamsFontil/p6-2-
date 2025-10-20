import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"
import anecdoteService from '../services/anecdotes'


const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const handleAddAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    console.log('created new anecdote', newAnecdote);
    dispatch(addAnecdote(newAnecdote))
  }


  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleAddAnecdote}>
        <div>
          <input name='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}


export default AnecdoteForm
