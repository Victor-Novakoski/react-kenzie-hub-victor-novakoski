import axios from 'axios'

const api = axios.create({
  baseURL: 'https://kenziehub.herokuapp.com',
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem('@token').replaceAll('"', '')}`,
  },
})
export default api
