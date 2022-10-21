import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import api from '../components/services/api'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ReactNode } from 'react'
import { IUserRegister } from '../components/Pages/Registrar'
import { useContext } from 'react'
import { IUserLogin } from '../components/Pages/Login'

export interface IUserProviderProps {
  children: ReactNode
}

export interface ITech {
  id: string
  title: string
  status: string
}

interface IUser {
  id: string
  name: string
  email: string
  course_module: string
  bio: string
  contact: string
  techs: ITech[]
}

interface IUserContext {
  user1: IUser | null
  setUser1: Dispatch<SetStateAction<IUser | null>>
  techs: ITech[]
  setTechs: Dispatch<SetStateAction<ITech[]>>
  loading: boolean
  registerSubmit(formRegister: IUserRegister): void
  loginFunction(formLogin: IUserLogin): void
  logout(): void
}

export const AuthContext = createContext<IUserContext>({} as IUserContext)

export const UserContextProvider = ({ children }: IUserProviderProps) => {
  const [techs, setTechs] = useState<ITech[]>([])
  const [user1, setUser1] = useState<IUser | null>(null)
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem('@token')
      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`
          const { data } = await api.get('/profile')
          setUser1(data)
          setTechs(data.techs)
          setLoading(false)
        } catch (error) {
          console.log(error)
        }
      }
      setLoading(false)
      api.defaults.headers.common.authorization = `Bearer ${token}`
    }
    loadUser()
  }, [])

  const loginFunction = (formLogin: IUserLogin): void => {
    api
      .post('/sessions', formLogin)
      .then(resp => {
        localStorage.setItem('@token', resp.data.token)
        setUser1(resp.data.user)
        navigate('/dashboard', { replace: true })
      })
      .catch(err => console.log(err))
  }

  const registerSubmit = (formRegister: IUserRegister): void => {
    api
      .post('/users', formRegister)
      .then(resp => toast.success('conta criada com sucesso'))
      .catch(err => toast.error('Ops! Algo deu errado'))
  }

  const logout = (): void => {
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
        setTechs,
        techs,
        loginFunction,
        registerSubmit,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useUserContext(): IUserContext {
  const context = useContext(AuthContext)

  return context
}
