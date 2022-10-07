import React from 'react'
import logo from '../../assets/Logo.svg'
import { Header } from './styles'

function Cabecalho() {
  return (
    <Header>
      <figure>
        <img src={logo} alt="Kenzie Hub" />
      </figure>
      <button>Sair</button>
    </Header>
  )
}

export default Cabecalho
