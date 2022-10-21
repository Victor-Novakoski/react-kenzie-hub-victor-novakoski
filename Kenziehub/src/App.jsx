import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import Error from './components/Pages/Error'
import Login from './components/Pages/Login'
import Registrar from './components/Pages/Registrar'
import { Container } from './style'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Providers from './Providers/Providers'

function App() {
  return (
    <Providers>
      <Container>
        <ToastContainer
          position="bottom-right"
          autoClose={1500}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
          toastStyle={{ backgroundColor: 'black', color: 'white' }}
        />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/register" element={<Registrar />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Container>
    </Providers>
  )
}

export default App
