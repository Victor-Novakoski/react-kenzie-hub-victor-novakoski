// import axios from 'axios'

// export const api = axios.create({
//   baseURL: 'https://kenziehub.herokuapp.com',
//   timeout: 5000,
// })

// export const apiAuthorization = axios.create({
//   baseURL: 'https://kenziehub.herokuapp.com',
//   timeout: 5000,
//   ...(window.localStorage?.getItem('@token') && {
//     headers: {
//       Authorization: `Bearer ${window.localStorage
//         .getItem('@token')
//         .replaceAll('"', '')}`,
//     },
//   })
// })
import axios from 'axios'

 const api = axios.create({
  baseURL: 'https://kenziehub.herokuapp.com',
  timeout: 5000,
  ...(window.localStorage?.getItem('@token') && {
    headers: {
      Authorization: `Bearer ${window.localStorage
        .getItem('@token')
        .replaceAll('"', '')}`,
    },
  })
})

export default api;