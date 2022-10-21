import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import { toast } from 'react-toastify'
import api from '../components/services/api'
import {
  ITech,
  IUserProviderProps,
  useUserContext,
} from './UserContextProvider'

interface ITechContext {
  deleteTech(techId: string): void
  createTech(formData: ITech): void
  modalVisible: boolean
  setModalVisible: Dispatch<SetStateAction<boolean>>
}

export const TechContext = createContext<ITechContext>({} as ITechContext)

export const TechProvider = ({ children }: IUserProviderProps) => {
  const [modalVisible, setModalVisible] = useState(false)
  const { techs, setTechs } = useUserContext()

  const createTech = (formData: ITech): void => {
    api
      .post('/users/techs', formData)
      .then(resp => {
        setTechs([...techs, resp.data])
        toast.success('Tecnologia cadastrada com sucesso!')
      })
      .catch(err => toast.error('algo deu errado'))
  }

  const deleteTech = (techId: string): void => {
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
    <TechContext.Provider
      value={{ deleteTech, createTech, modalVisible, setModalVisible }}
    >
      {children}
    </TechContext.Provider>
  )
}

export function useTechContext(): ITechContext {
  const context = useContext(TechContext)

  return context
}
