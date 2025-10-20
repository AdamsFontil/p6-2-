const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await fetch(baseUrl)

  if (!response.ok) {
    throw new Error ('Failed to fetch anecdotes')
  }

  const data = await response.json
  console.log('what is data from service', data);
  return await response.json()

}


export default { getAll }
