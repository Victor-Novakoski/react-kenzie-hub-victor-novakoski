import React from 'react'
import logo from '../../../assets/Logo.svg'
import { LoginPage } from './style'
import 'animate.css'

function Login() {
  return (
    <LoginPage className='animate__animated animate__fadeIn'>
      <figure>
        <img src={logo} alt="" />
      </figure>
      <div>
        <h3>Login</h3>
        <form action="">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Digite aqui seu email" />

          <label htmlFor="">Senha</label>
          <input type="text" placeholder="Digite aqui sua senha" />

          <button>Entrar</button>
        </form>

        <span>Ainda não possui uma conta?</span>
        <button >Cadastre-se</button>
      </div>
    </LoginPage>
  )
}

export default Login
