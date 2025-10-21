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



export const setNotification = (message, timeout) => {
  return (dispatch) => {
    dispatch(messageSlice.actions.addMessage(message))
    setTimeout(() => {
      dispatch(messageSlice.actions.removeMessage())
    }, timeout*1000);
  }
}

export const { addMessage, removeMessage } = messageSlice.actions
export default messageSlice.reducer
