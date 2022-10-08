import React, { useState } from 'react'
import { Icon } from 'react-icons-kit'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { eye } from 'react-icons-kit/feather/eye'
import { useForm } from 'react-hook-form'
import logo from '../../../assets/Logo.svg'
import { LoginPage } from './style'
import { Link, Navigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import 'animate.css'
import api from '../../services/api'
import { useLocalStorage } from 'use-hooks'

function Login() {
  const [passwordShow, setPasswordShow] = useState(true)

  const [user, setUser] = useLocalStorage('user', '')

  const formSchema = Yup.object().shape({
    email: Yup.string().required('email obrigatório'),
    password: Yup.string().min(6).required('senha obrigatória'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  })

  const onSubmitFunction = data => {
    console.log(data)
    api
      .post('/sessions', data)
      .then(resp => {
        setUser(resp['data']['user'])
      })
      .catch(err => console.log(err))
  }

  return (
    <LoginPage className="animate__animated animate__fadeIn">
      <figure>
        <img src={logo} alt="" />
      </figure>
      <div>
        <h3>Login</h3>
        {user.length != 0 && <Navigate to="/dashboard" replace={true} />}
        <form action="" onSubmit={handleSubmit(onSubmitFunction)}>
          <label htmlFor="">
            Email
            <input
              type="text"
              placeholder="Digite aqui seu email"
              {...register('email')}
            />
            <p>{errors.email?.message}</p>
          </label>

          <label htmlFor="">
            Senha
            <input
              type={passwordShow ? 'password' : 'text'}
              placeholder="Digite aqui sua senha"
              {...register('password')}
            />
            <Icon
              icon={passwordShow ? eyeOff : eye}
              onClick={() => {
                setPasswordShow(!passwordShow)
              }}
            />
            <p>{errors.password?.message}</p>
          </label>

          <button type="submit">Entrar</button>
        </form>

        <span>Ainda não possui uma conta?</span>
        <Link to="/register">Cadastre-se</Link>
      </div>
    </LoginPage>
  )
}

export default Login
