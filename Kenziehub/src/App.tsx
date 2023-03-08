import { Container } from './style'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Providers from './Providers/Providers'
import Router from './Router'

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
        <Router />
      </Container>
    </Providers>
  )
}

export default App
