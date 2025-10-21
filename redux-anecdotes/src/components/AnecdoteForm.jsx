import { useDispatch } from "react-redux"
import { appendAnecdote } from "../reducers/anecdoteReducer"


const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const handleAddAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(appendAnecdote(content))
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
