import './Foot.css'

const Foot = () => {
  return (
    <footer>
      <div className='content'>
        <div className='nav-foot'>
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
        </div>
        <div className='redes'>
          <a href=""><img src="/img/facebook-icon.png" alt="" /></a>
          <a href=""><img src="/img/instagram-icon.png" alt="" /></a>
          <a href=""><img src="/img/twitter-icon.png" alt="" /></a>
          <a href=""><img src="/img/tiktok-icon.png" alt="" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Foot