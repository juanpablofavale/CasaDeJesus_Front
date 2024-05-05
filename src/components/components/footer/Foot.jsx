import { Link } from 'react-router-dom'
import './Foot.css'

const Foot = () => {
  return (
    <footer>
      <div className='nav-foot container'>
        <Link to="/">
          <div className='logos'>
            <img src="/img/Logo2.png" alt="logo" />
            <img src="/img/Logo3.png" alt="logo" />
          </div>
        </Link>
        <nav>
          <a href="">Inicio</a>
          <a href="">Acerca de</a>
          <a href="">Obras</a>
          <a href="">Contacto</a>
        </nav>
        <div className='redes'>
          <a href="https://www.facebook.com/fundacioncasadejesus" target='_blank'><img className='red' src="/img/facebook-icon.png" alt="facebook" /></a>
          <a href="https://www.instagram.com/fcasadejesus/?hl=es-la" target='_blank'><img className='red' src="/img/instagram-icon.png" alt="instagram" /></a>
          <a href="https://twitter.com/fcasadejesus" target='_blank'><img className='red' src="/img/twitter-icon.png" alt="twitter" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Foot