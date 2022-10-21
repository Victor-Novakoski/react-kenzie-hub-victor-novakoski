import React, { useContext } from 'react'
import logo from '../../assets/Logo.svg'
import { Header } from './styles'
import { AuthContext } from '../../Providers/UserContextProvider'

function Cabecalho() {
  const { logout } = useContext(AuthContext)

  return (
    <Header>
      <figure>
        <img src={logo} alt="Kenzie Hub" />
      </figure>
      <button type="button" onClick={logout}>
        Sair
      </button>
    </Header>
  )
}

export default Cabecalho
