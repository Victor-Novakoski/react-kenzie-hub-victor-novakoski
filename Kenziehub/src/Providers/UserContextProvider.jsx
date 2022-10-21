import React, { createContext, useContext, useEffect, useState } from 'react'
import api from '../components/services/api'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const AuthContext = createContext({})

export const UserContextProvider = ({ children }) => {
  const [techs, setTechs] = useState([])
  const [user1, setUser1] = useState(null)
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem('@token')
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`
          const { data } = await api.get('/profile')
          setUser1(data)
          setTechs(data.techs)
          setLoading(false)
        } catch (error) {
          console.log(error)
        }
      }
      setLoading(false)
      api.defaults.headers.authorization = `Bearer ${token}`
    }
    loadUser()
  }, [])

  const loginFunction = data => {
    api
      .post('/sessions', data)
      .then(resp => {
        localStorage.setItem('@token', resp.data.token)
        setUser1(resp.data.user)
        navigate('/dashboard', { replace: true })
      })
      .catch(err => console.log(err))
  }

  const registerSubmit = data => {
    api
      .post('/users', data)
      .then(resp => toast.success('conta criada com sucesso'))
      .catch(err => toast.error('Ops! Algo deu errado'))
  }

  const logout = () => {
    window.localStorage.removeItem('@token')
    setUser1(null)
    navigate('/')
  }

  return (
    <AuthContext.Provider
      value={{
        user1,
        setUser1,
        loading,
        loginFunction,
        registerSubmit,
        logout,
        setTechs,
        techs,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
// export default UserContextProvider
