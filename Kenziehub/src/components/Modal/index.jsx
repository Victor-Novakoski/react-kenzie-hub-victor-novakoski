import React, { useContext } from 'react'
import { VscClose } from 'react-icons/vsc'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { ModalStyle } from './styled'
import api from '../services/api'
import { UserContext } from '../../contexts/UserContext'

function Modal({ setModalVisible }) {
  const userContext = useContext(UserContext)
  const user = userContext.user

  const formSchema = Yup.object().shape({
    title: Yup.string().required('nome obrigatório'),
    status: Yup.string(),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  })

  const createTech = data => {
    api
      .post('/users/techs', data)
      .then(resp =>
        api
        .get('/profile')
        .then(resp => {
            userContext.setUser(resp.data)
          })
          .catch(err => console.log(err))
      )
      .catch(err => console.log(err))
  }


  return (
    <>
      <ModalStyle>
        <div className="backGround"></div>
        <div className="div_modal">
          <div>
            <p>Cadastrar Tecnologia</p>
            <button onClick={() => setModalVisible(false)}>
              <VscClose />
            </button>
          </div>
          <form action="" onSubmit={handleSubmit(createTech)}>
            <label htmlFor="">Nome</label>
            <input type="text" {...register('title')} />
            <p>{errors.title?.message}</p>
            <label htmlFor="">Selecionar status</label>
            <select name="" id="" {...register('status')}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <button>Cadastrar Tecnologia</button>
          </form>
        </div>
      </ModalStyle>
    </>
  )
}

export default Modal
