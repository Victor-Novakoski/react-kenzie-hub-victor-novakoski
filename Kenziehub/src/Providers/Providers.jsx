import React from 'react'
import { TechProvider } from './TechContext'
import { UserContextProvider } from './UserContextProvider'

function Providers({ children }) {
  return (
    <UserContextProvider>
      <TechProvider>{children}</TechProvider>
    </UserContextProvider>
  )
}

export default Providers
