import React, { useContext, useEffect, useState } from 'react'
import { BsTrash, BsPlusLg } from 'react-icons/bs'
import { AuthContext } from '../../Providers/UserContextProvider'
import Modal from '../Modal'
import api from '../services/api'
import { ListTecnologias } from './styles'

function TodoList() {
  const [modalVisible, setModalVisible] = useState(false)
  const { user, setUser } = useContext(AuthContext)

  function deleteTech(elem) {
    api
      .delete(`/users/techs/${elem}`)
      .then(resp => {
        api
          .get('/profile')
          .then(resp => {
            setUser(resp.data)
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      {modalVisible ? <Modal setModalVisible={setModalVisible} /> : null}
      <ListTecnologias>
        <div className="tecnologias">
          <h3>Tecnologias</h3>
          <button className="plus" onClick={() => setModalVisible(true)}>
            <BsPlusLg />
          </button>
        </div>

        <ul>
          {user.techs.length == 0 ? (
            <li>
              <p>você tem que adicionar uma nova tecnologia</p>
            </li>
          ) : (
            user.techs.map(elem => {
              return (
                <li key={elem.id}>
                  <p>{elem.title}</p>
                  <div>
                    <p>{elem.status}</p>
                    <button
                      onClick={() => {
                        if (elem.id === elem.id) {
                          return deleteTech(elem.id)
                        } else {
                          console.log('erro')
                        }
                      }}
                    >
                      <BsTrash />
                    </button>
                  </div>
                </li>
              )
            })
          )}
        </ul>
      </ListTecnologias>
    </>
  )
}

export default TodoList
