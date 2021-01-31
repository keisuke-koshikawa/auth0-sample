import Client from '@/api/client'

export const getChirps = async (token: string) => {
  return await Client.get('/chirps', { headers: { 'Content-Type': 'application/json', Authorization: `bearer ${token}` } })
    .then((response) => {
      debugger
      return response.data
    })
}
