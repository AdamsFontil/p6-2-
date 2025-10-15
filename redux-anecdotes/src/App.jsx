import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { vote, addAnecdote } from './reducers/anecdoteReducer'


const App = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)
  console.log('anecdotes---', anecdotes);

  const handlevote = id => {
    console.log('voting', id)
    dispatch(vote(id))
  }
  const handleAddAnecdote = event => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(addAnecdote(content))

  }

  return (
    <div>
      <h2>Anecdotes Testg</h2>
      {anecdotes
      .sort((a, b) => b.votes - a.votes)
      .map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handlevote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
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

export default App
