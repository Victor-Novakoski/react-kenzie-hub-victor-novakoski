import { useState } from 'react'
import logo from '../../../assets/Logo.svg'
import { Container, Form } from './style'
import { useNavigate } from 'react-router-dom'
import 'animate.css'

function Registrar() {
  const navigate = useNavigate()

  const handleForm = event => {
    event.preventdefault()

    navigate('/login')
  }

  return (
    <Container className="animate__animated animate__fadeIn">
      <div>
        <figure>
          <img src={logo} alt="" />
        </figure>
        <button type="button">Voltar</button>
      </div>
      <div>
        <div>
          <h3>Crie sua conta</h3>
          <span>Rapido e grátis, vamos nessa</span>
        </div>

        <Form onSubmit={handleForm}>
          <label htmlFor="nome">Nome</label>
          <input id="nome" placeholder="Digite aqui seu nome" />

          <label htmlFor="email">Email</label>
          <input id="email" placeholder="Digite aqui seu email" />

          <label htmlFor="senha">Senha</label>
          <input id="senha" placeholder="Digite aqui sua senha" />

          <label htmlFor="confirmar senha">Confirmar Senha</label>
          <input
            id="confirmar-senha"
            placeholder="Digite novamente sua senha"
          />

          <label htmlFor="bio">Bio</label>
          <input id="bio" placeholder="Fale sobre você" />

          <label htmlFor="contato">Contato</label>
          <input id="contato" placeholder="Opção de contato" />

          <label htmlFor="Selecionar módulo">Selecionar módulo</label>
          <select
            id="selecionar-modulo"
            t
            name=""
            placeholder="Primeiro Módulo"
          >
            <option value="">M1</option>
            <option value="">M2</option>
            <option value="">M3</option>
          </select>

          <button type="submit">Cadastrar</button>
        </Form>
      </div>
    </Container>
  )
}

export default Registrar
