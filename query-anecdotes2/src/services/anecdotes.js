const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = async () => {
  const response = await fetch(baseUrl)
  if (!response.ok) {
    throw new Error('Failed at retrieving anecdotes')
  }
  return response.json()
}

export const createAnecdote = async (anecdote) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(anecdote)
  }
  const response = await fetch(baseUrl, options)

  if (!response.ok) {
    throw new Error ('Failed to create new anecdote')
  }
  return await response.json()
}

export const updateAnecdote = async (changedAnecdote) => {
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(changedAnecdote)
  }
  console.log('changed anecdote received---', changedAnecdote);

  const response = await fetch(`${baseUrl}/${changedAnecdote.id}`, options)
  console.log('what is the response---', response);
  return response.json()
}
