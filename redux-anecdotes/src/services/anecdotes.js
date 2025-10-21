const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await fetch(baseUrl)

  if (!response.ok) {
    throw new Error ('Failed to fetch anecdotes')
  }

  const data = await response.json()
  console.log('what is data from service', data);
  return data

}


const createNew = async (content) => {

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content, votes: 0 }),
  }

  const response = await fetch(baseUrl, options)

  if (!response.ok) {
    throw new Error('Failed to create note')
  }

  return await response.json()
}

const voteOnServer = async (anecdote) => {

  console.log('what is anecdote from service', anecdote);
  const updatedAnecdote = {
    ...anecdote,
    votes: anecdote.votes + 1
  }

  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedAnecdote)
  }
  const response = await fetch(`${baseUrl}/${anecdote.id}`,options)

  if (!response.ok) {
    throw new Error ('Failed to update anecdote')
  }

  console.log('what is response', response);
  return await response.json()
}



export default { getAll, createNew, voteOnServer }
