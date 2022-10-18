import { useLocalStorage } from 'use-hooks'
import React, { createContext, useState } from 'react'

export const AuthContext = createContext({})

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', '')
  const [token, setToken] = useLocalStorage('@token', '')

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}
export default UserContextProvider
