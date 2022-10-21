import logo from '../../assets/Logo.svg'
import { Header } from './styles'
import { useUserContext } from '../../Providers/UserContextProvider'

function Cabecalho() {
  const { logout } = useUserContext()

  return (
    <Header>
      <figure>
        <img src={logo} alt="Kenzie Hub" />
      </figure>
      <button type="button" onClick={logout}>
        Sair
      </button>
    </Header>
  )
}

export default Cabecalho
