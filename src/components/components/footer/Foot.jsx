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
        <div className="mapa">
          <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.390590591876!2d-58.6251648!3d-34.6448375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb92a8aab6979%3A0x5e8435a0e0fcc9bc!2sFundaci%C3%B3n%20Casa%20de%20Jes%C3%BAs!5e0!3m2!1ses-419!2sar!4v1715813108321!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div>
            Adolfo Saldias 351
          </div>
        </div>
        <div className='redes'>
          <a href="tel:+5491140715733" target='_blank'><img className='red' src="/img/telefono.png" alt="telefono" /> 011-154071-5733</a>
          <a href="mailto:info@casadejesus.org" target='_blank'><img className='red' src="/img/mail.png" alt="mail" /> info@casadejesus.org</a>
          <a href="https://wa.me/+5491140715733" target='_blank'><img className='red' src="/img/whatsapp.png" alt="whatsapp" /> +54 9 11-4071-5733</a>
        </div>
        <div className='redes'>
          <a href="https://www.facebook.com/fundacioncasadejesus" target='_blank'><img className='red' src="/img/facebook-icon.png" alt="facebook" /> /fundacioncasadejesus</a>
          <a href="https://www.instagram.com/fcasadejesus/?hl=es-la" target='_blank'><img className='red' src="/img/instagram-icon.png" alt="instagram" /> @fcasadejesus</a>
          <a href="https://twitter.com/fcasadejesus" target='_blank'><img className='red' src="/img/twitter-icon.png" alt="twitter" /> /fcasadejesus</a>
        </div>
      </div>
      <p id="jpf">Desarrollado por <a href="https://juanpablofavale.github.io/Maqueta-Portfolio-2/" target="_blank">JPF</a></p>
    </footer>
  )
}

export default Foot