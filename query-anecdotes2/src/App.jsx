import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes } from './services/anecdotes'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { updateAnecdote } from './services/anecdotes'
import { useContext } from 'react'
import NotificationContext from './NotificationContext'

const App = () => {
  const { messageDispatch } = useContext(NotificationContext)
  const queryClient = useQueryClient()

  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: (updatedAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'],
        anecdotes.map(anecdote =>
          anecdote.id === updatedAnecdote.id ? updatedAnecdote : anecdote
        )
      )
    }
  })

    const handleVote = (anecdote) => {
    console.log('unchanged anecdote', anecdote)
    const changedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    updateAnecdoteMutation.mutate(changedAnecdote)
    messageDispatch({type: 'ADD_MESSAGE', payload: `anecdote '${changedAnecdote.content}' voted`})
    setTimeout(() => {
      messageDispatch({type: 'REMOVE_MESSAGE'})
    }, 5000);
  }


const result = useQuery(
  {
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: false,
    refetchOnWindowFocus: false
  }
)

if (result.isLoading) {
    return <div>Loading...</div>
  }

if (result.isError) {
    return <div>anecdote service failed to due problems in the server</div>
  }

const anecdotes = result.data
console.log('what are results', result);
console.log('what are anecdotes', anecdotes);



  return (
    <div>
      <h3>Anecdote app</h3>
      <Notification />
      <AnecdoteForm />

      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
