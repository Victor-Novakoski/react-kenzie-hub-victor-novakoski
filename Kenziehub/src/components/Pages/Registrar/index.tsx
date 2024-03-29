import logo from '../../../assets/Logo.svg'
import { Container, Form, DivInput } from './style'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import 'animate.css'
import { useUserContext } from '../../../Providers/UserContextProvider'

export interface IUserRegister {
  name: string
  email: string
  password: string
  confirm_password: string
  bio: string
  contact: string
  course_module: string
}

function Registrar() {
  const { registerSubmit } = useUserContext()

  const formSchema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    email: Yup.string().required('Email obrigatório').email('Email inválido'),
    password: Yup.string().min(6).required('senha obrigatório'),
    confirm_password: Yup.string().oneOf(
      [Yup.ref('password')],
      'Confirmação de senha deve ser igual a senha'
    ),
    bio: Yup.string().required('biografia obrigatória'),
    contact: Yup.string().required('contato obrigatório'),
    course_module: Yup.string().required('módulo obrigatório'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(formSchema),
  })

  return (
    <Container className="animate__animated animate__fadeIn">
      <div>
        <figure>
          <img src={logo} alt="" />
        </figure>
        <Link to="/">Voltar</Link>
      </div>
      <div className="div_tittle">
        <div>
          <h3>Crie sua conta</h3>
          <span>Rapido e grátis, vamos nessa</span>
        </div>

        <Form onSubmit={handleSubmit(registerSubmit)}>
          <DivInput>
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              placeholder="Digite aqui seu nome"
              {...register('name')}
            />
            <p>{errors.name?.message}</p>
          </DivInput>

          <DivInput>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="Digite aqui seu email"
              {...register('email')}
            />
            <p>{errors.email?.message}</p>
          </DivInput>

          <DivInput>
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              placeholder="Digite aqui sua senha"
              type="password"
              {...register('password')}
            />
            <p>{errors.password?.message}</p>
          </DivInput>

          <DivInput>
            <label htmlFor="confirmar senha">Confirmar Senha</label>
            <input
              id="confirmar-senha"
              placeholder="Digite novamente sua senha"
              type="password"
              {...register('confirm_password')}
            />
            <p>{errors.confirm_password?.message}</p>
          </DivInput>

          <DivInput>
            <label htmlFor="bio">Bio</label>
            <input
              id="bio"
              placeholder="Fale sobre você"
              {...register('bio')}
            />
            <p>{errors.bio?.message}</p>
          </DivInput>

          <DivInput>
            <label htmlFor="contato">Contato</label>
            <input
              id="contato"
              placeholder="Opção de contato"
              {...register('contact')}
            />
            <p>{errors.contact?.message}</p>
          </DivInput>

          <DivInput>
            <label htmlFor="Selecionar módulo">Selecionar Módulo</label>
            <select
              id="selecionar-modulo"
              placeholder="Primeiro Módulo"
              {...register('course_module')}
            >
              <option value="M1">Módulo 1</option>
              <option value="M2">Módulo 2</option>
              <option value="M3">Módulo 3</option>
              <option value="M4">Módulo 4</option>
              <option value="M5">Módulo 5</option>
              <option value="M6">Módulo 6</option>
            </select>
          </DivInput>

          <button type="submit">Cadastrar</button>
        </Form>
      </div>
    </Container>
  )
}

export default Registrar
