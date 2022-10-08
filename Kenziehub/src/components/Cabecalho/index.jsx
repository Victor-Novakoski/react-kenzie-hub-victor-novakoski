import React from 'react'
import logo from '../../assets/Logo.svg'
import { Header } from './styles'
import { useLocalStorage } from 'use-hooks'

function Cabecalho() {
  const [user, setUser] = useLocalStorage('user')

  const logout = () => {
    setUser('')
    window.location.reload(false);
  }

  return (
    <Header>
      <figure>
        <img src={logo} alt="Kenzie Hub" />
      </figure>
      <button
        type="submit"
        onClick={() => {
          logout()
        }}
      >
        Sair
      </button>
    </Header>
  )
}

export default Cabecalho
