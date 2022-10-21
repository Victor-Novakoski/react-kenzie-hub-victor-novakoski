import React, { useEffect, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Cabecalho from '../../Cabecalho'
import { AuthContext } from '../../../Providers/UserContextProvider'
import { HomePage } from './style'
import TodoList from '../../TodoList'

function Home() {
  const { user1, loading } = useContext(AuthContext)

  if (loading) {
    return null
  }

  return (
    <>
      <HomePage>
        {user1 ? (
          <>
            <Cabecalho />
            <section className="section_Name">
              <h1>olá, {user1.name}</h1>
              <span>{user1.course_module}</span>
            </section>
            <TodoList />
          </>
        ) : (
          <Navigate to="/" replace={true} />
        )}
      </HomePage>
    </>
  )
}

export default Home
