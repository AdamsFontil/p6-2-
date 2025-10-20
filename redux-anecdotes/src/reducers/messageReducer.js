import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice ({
  name: 'message',
  initialState: '',
  reducers: {
    addMessage(state, action) {
      return action.payload
    },
    removeMessage() {
      return ''
    }
  }
})


export const { addMessage, removeMessage } = messageSlice.actions
export default messageSlice.reducer
