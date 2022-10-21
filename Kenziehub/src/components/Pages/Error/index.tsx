import { ErrorPage } from './style'
import { TbError404 } from 'react-icons/tb'
import 'animate.css'

function Error() {
  return (
    <ErrorPage>
      <TbError404 />
      <div>
        <p className="animate__animated animate__bounce animate__infinite">O</p>
        <p className="animate__animated animate__bounce animate__infinite">P</p>
        <p className="animate__animated animate__bounce animate__infinite">S</p>
        <p className="animate__animated animate__bounce animate__infinite">.</p>
        <p className="animate__animated animate__bounce animate__infinite">.</p>
        <p className="animate__animated animate__bounce animate__infinite">.</p>
      </div>
      <p>Pagina não encontrada</p>
    </ErrorPage>
  )
}

export default Error
