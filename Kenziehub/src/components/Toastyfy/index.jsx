import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import React from 'react'

// import { Container } from './styles';

function Toastyfy() {

  const notify = (message, type) => {
    const config = {
      position: 'bottom-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
    if (type === 'warn') {
      return toast.warn(message, config)
    }
    if (type === 'success') {
      return toast.success(message, config)
    }
    if (type === 'info') {
      return toast.info(message, config)
    } else {
      return toast.error(message, config)
    }
  }

  return (
    <ToastContainer toastStyle={{ backgroundColor: 'black', color: 'white' }} />
  )
}

export default Toastyfy
