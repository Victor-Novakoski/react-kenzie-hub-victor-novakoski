import { TechProvider } from './TechContext'
import { IUserProviderProps, UserContextProvider } from './UserContextProvider'

function Providers({ children }: IUserProviderProps) {
  return (
    <UserContextProvider>
      <TechProvider>{children}</TechProvider>
    </UserContextProvider>
  )
}

export default Providers
