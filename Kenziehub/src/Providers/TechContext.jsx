import { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import api from '../components/services/api'
import { AuthContext } from './UserContextProvider'

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
  const { techs, setTechs } = useContext(AuthContext)

  const createTech = formData => {
    api
      .post('/users/techs', formData)
      .then(resp => {
        setTechs([...techs, resp.data])
        toast.success('Tecnologia cadastrada com sucesso!')
      })
      .catch(err => toast.error('algo deu errado'))
  }

  const deleteTech = techId => {
    api
      .delete(`/users/techs/${techId}`)
      .then(resp => {
        toast.success('Tecnologia excluida com sucesso')
        const newTechs = techs.filter(currentTech => currentTech.id !== techId)
        setTechs(newTechs)
      })
      .catch(err => toast.error('algo deu errado'))
  }

  return (
    <TechContext.Provider value={{ deleteTech, createTech }}>
      {children}
    </TechContext.Provider>
  )
}
