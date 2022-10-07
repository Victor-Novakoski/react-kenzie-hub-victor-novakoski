import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import Error from './components/Pages/Error'
import Login from './components/Pages/Login'
import Registrar from './components/Pages/Registrar'
import { Container } from './style'

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registrar />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Container>
  )
}

export default App
