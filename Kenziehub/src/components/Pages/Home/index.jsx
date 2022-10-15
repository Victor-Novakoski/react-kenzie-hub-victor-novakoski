import React, { useEffect, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Cabecalho from '../../Cabecalho'
import { UserContext } from '../../../contexts/UserContext'

import { HomePage } from './style'
import TodoList from '../../TodoList'
import api from '../../services/api'

function Home() {
  const userContext = useContext(UserContext)
  const user = userContext.user

  useEffect(() => {
    api
      .get('/profile')
      .then(resp => {
        userContext.setUser(resp.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <HomePage>
      {!user && <Navigate to="/" replace={true} />}
      <>
        <Cabecalho />
        <section className="section_Name">
          <h1>olá, {user.name}</h1>
          <span>{user.course_module}</span>
        </section>
        <TodoList />
      </>
    </HomePage>
  )
}

export default Home
