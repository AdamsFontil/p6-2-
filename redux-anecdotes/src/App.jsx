import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

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

  return (
    <div>
      <h2>Anecdotes Testg</h2>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form>
        <div>
          <input />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App
