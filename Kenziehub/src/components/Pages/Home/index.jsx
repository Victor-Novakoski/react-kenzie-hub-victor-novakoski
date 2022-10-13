import React, { useEffect, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Cabecalho from '../../Cabecalho'
import { useLocalStorage } from 'use-hooks'
import { UserContext } from '../../../contexts/UserContext'

import { HomePage } from './style'

function Home() {
  const userContext = useContext(UserContext)
  const user = userContext.user

  console.log(userContext)
  useEffect(() => {
    console.log(user?.length != 0)
  }, [user])

  return (
    <HomePage>
      {!user && <Navigate to="/" replace={true} />}
      <>
        <Cabecalho />
        <section>
          <h1>olá, {user.name}</h1>
          <span>{user.course_module}</span>
        </section>
      </>
    </HomePage>
  )
}

export default Home
