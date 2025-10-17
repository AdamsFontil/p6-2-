import { useDispatch, useSelector } from "react-redux"
import { vote } from "../reducers/anecdoteReducer"

const AnecdoteList = () => {
  const dispatch = useDispatch()
const anecdotes = useSelector(state => {
  const allAnecdotes = state.anecdotes
  const filterText = state.filter.toLowerCase()

  if (filterText === '') {
    return allAnecdotes
  } else {
    const filteredAnecdotes = allAnecdotes.filter(anecdote =>
      anecdote.content.toLowerCase().includes(filterText)
    )
    return filteredAnecdotes
  }
})



    const handlevote = id => {
    console.log('voting', id)
    dispatch(vote(id))
  }

    console.log('anecdotes---', anecdotes);

  return (
    <div>
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
    </div>
  )
}

export default AnecdoteList
