import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

const App = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)
  console.log('anecdotes---', anecdotes);

  const vote = id => {
    console.log('voting', id)
    dispatch({
      type: 'VOTE',
      payload: { id }
    })
  }
  const addAnecdote = event => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = 'sent'
    dispatch({
      type: 'NEW_ANECDOTE',
      payload: {
        content,
        id: generateId(),
        votes: 0
      }

    })
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
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App
