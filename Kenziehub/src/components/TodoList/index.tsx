import { useState } from 'react'
import { BsTrash, BsPlusLg } from 'react-icons/bs'
import { useTechContext } from '../../Providers/TechContext'
import { useUserContext } from '../../Providers/UserContextProvider'
import Modal from '../Modal'
import { ListTecnologias } from './styles'

function TodoList() {
  const { techs } = useUserContext()
  const { deleteTech, modalVisible, setModalVisible } = useTechContext()

  return (
    <>
      {modalVisible ? <Modal /> : null}
      <ListTecnologias>
        <div className="tecnologias">
          <h3>Tecnologias</h3>
          <button className="plus" onClick={() => setModalVisible(true)}>
            <BsPlusLg />
          </button>
        </div>

        <ul>
          {techs.length === 0 ? (
            <li>
              <p>você tem que adicionar uma nova tecnologia</p>
            </li>
          ) : (
            techs.map(elem => {
              return (
                <li key={elem.id}>
                  <p>{elem.title}</p>
                  <div>
                    <p>{elem.status}</p>
                    <button
                      onClick={() => {
                        if (elem.id === elem.id) {
                          return deleteTech(elem.id)
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
