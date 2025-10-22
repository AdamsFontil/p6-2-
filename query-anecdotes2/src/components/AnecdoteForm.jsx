import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createAnecdote } from "../services/anecdotes"
import { useContext } from "react"
import NotificationContext from "../NotificationContext"

const AnecdoteForm = () => {
const queryClient = useQueryClient()
const { messageDispatch } = useContext(NotificationContext)

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (newAnecdote) => {
      console.log('revalidating');
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      console.log('what are anecdotes', anecdotes);
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote))
    },
  })


  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('new anecdote', content)
    newAnecdoteMutation.mutate({content, votes: 0})
    messageDispatch({type: 'ADD_MESSAGE', payload: `successfully added '${content}' to anecdotes`})
    setTimeout(() => {
      messageDispatch({type: 'REMOVE_MESSAGE'})
    }, 5000)
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
