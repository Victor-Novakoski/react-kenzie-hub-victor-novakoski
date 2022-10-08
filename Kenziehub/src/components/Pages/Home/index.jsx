import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import Cabecalho from '../../Cabecalho'
import { useLocalStorage } from 'use-hooks'

import { HomePage } from './style'

function Home() {
  const [user, setUser] = useLocalStorage('user')
  useEffect(() => {
    console.log(user?.length != 0)
  }, [user])

  return (
    <HomePage>
      {!user && <Navigate to="/login" replace={true} />}
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
