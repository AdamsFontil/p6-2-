import { useDispatch, useSelector } from "react-redux"
import { updateVoteOnServer } from "../reducers/anecdoteReducer"
import { addMessage, removeMessage } from "../reducers/messageReducer"


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



    const handlevote = async (anecdote) => {
    console.log('voting', anecdote.id)
    dispatch(updateVoteOnServer(anecdote))
    console.log('what is anecdote', anecdote);
    dispatch(addMessage(`You voted ${anecdote.content}`))
    setTimeout(() => {
    dispatch(removeMessage());
  }, 5000);
  }

    console.log('anecdotes---', anecdotes);




  return (
    <div>
      { [...anecdotes]
      .sort((a, b) => b.votes - a.votes)
      .map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handlevote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
