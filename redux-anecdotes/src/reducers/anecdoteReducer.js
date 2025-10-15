const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = anecdote => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'VOTE': {
      const id = action.payload.id
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      console.log('target to change', anecdoteToChange);
      console.log('changedAnecdote single---', changedAnecdote);
      const changedAnecdotes = state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
      console.log('changed anecdotes', changedAnecdotes);
      return changedAnecdotes
    }
    case 'NEW_ANECDOTE': {
      console.log('action.payload', action.payload);
      const newAnecdote = [...state, action.payload]
      console.log('newAnecdote', newAnecdote);
      return newAnecdote
    }
  }

  return state
}


// const noteReducer = (state = [], action) => {
//   switch (action.type) {
//     case 'NEW_NOTE':
//       return [...state, action.payload]
//     case 'TOGGLE_IMPORTANCE': {
//       const id = action.payload.id
//       const noteToChange = state.find(n => n.id === id)
//       const changedNote = {
//         ...noteToChange,
//         important: !noteToChange.important
//       }
//       return state.map(note => (note.id !== id ? note : changedNote))
//     }
//     default:
//       return state
//   }
// }




export default reducer
