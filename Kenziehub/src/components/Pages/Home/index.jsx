import React from 'react'
import Cabecalho from '../../Cabecalho'

import { HomePage } from './style'

function Home() {
  return (
    <HomePage>
      <Cabecalho />
      <section>
        <h1>olá, Samuel leão</h1>
        <span>Primeiro módulo (Introdução ao Frontend)</span>
      </section>
    </HomePage>
  )
}

export default Home
