import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdotes";

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
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

const { setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const { addAnecdote, vote } = anecdoteSlice.actions

export default anecdoteSlice.reducer
