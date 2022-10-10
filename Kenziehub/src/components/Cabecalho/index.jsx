import React from 'react'
import logo from '../../assets/Logo.svg'
import { Header } from './styles'
import { useLocalStorage } from 'use-hooks'
import { useNavigate } from 'react-router-dom'

function Cabecalho() {
  const [user, setUser] = useLocalStorage('user')
  const navigate = useNavigate()

  const logout = () => {
    setUser('')
    navigate('/')
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
