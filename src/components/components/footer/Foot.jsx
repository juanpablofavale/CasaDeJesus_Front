import './Foot.css'

const Foot = () => {
  return (
    <footer>
      <div className='nav-foot container'>
        <div className='logos'>
          <img src="/img/Logo2.png" alt="logo" />
          <img src="/img/Logo3.png" alt="logo" />
        </div>
        <nav>
          <a href="">Inicio</a>
          <a href="">Acerca de</a>
          <a href="">Obras</a>
          <a href="">Contacto</a>
        </nav>
        <div className='redes'>
          <a href=""><img className='red' src="/img/facebook-icon.png" alt="facebook" /></a>
          <a href=""><img className='red' src="/img/instagram-icon.png" alt="instagram" /></a>
          <a href=""><img className='red' src="/img/twitter-icon.png" alt="twitter" /></a>
          <a href=""><img className='red' src="/img/tiktok-icon.png" alt="tiktok" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Foot