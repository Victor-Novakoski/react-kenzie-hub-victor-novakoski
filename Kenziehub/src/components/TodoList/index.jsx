import React, { useContext, useEffect, useState } from 'react'
import { BsTrash, BsPlusLg } from 'react-icons/bs'
import { UserContext } from '../../contexts/UserContext'
import Modal from '../Modal'
import api from '../services/api'
import { ListTecnologias } from './styles'

function TodoList() {
  const [modalVisible, setModalVisible] = useState(false)
  const userContext = useContext(UserContext)
  const user = userContext.user
  

  function deleteTech(elem) {
    api
      .delete(`/users/techs/${elem}`)
      .then(resp => {
        window.location.reload()
        console.log(resp)})
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
          {user.techs.map(elem => {
            return (
              <li>
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
          })}
        </ul>
      </ListTecnologias>
    </>
  )
}

export default TodoList
