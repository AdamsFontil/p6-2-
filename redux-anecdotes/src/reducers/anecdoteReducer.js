import { createSlice } from "@reduxjs/toolkit"


const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: '',
  reducers: {
    vote(state, action ) {
      console.log('what is payload', action.payload);
      console.log('state at start', state);
      const id = action.payload
      const anecdoteToChange = state.find(n => n.id === id)
      console.log('target to change', anecdoteToChange);
      anecdoteToChange.votes += 1
      console.log('stateafter', state);
    },
    addAnecdote(state, action) {
      console.log('action.payload', action.payload);
      console.log('state', state);
      const newAnecdote = { content: action.payload, id: getId(), votes: 0}
      console.log('newAnecdote', newAnecdote);
      state.push(newAnecdote)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { addAnecdote, vote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer
