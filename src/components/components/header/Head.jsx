import NAVIGATOR from '../../../data/Navigator.jsx'
import NavLnk from '../navlnk/NavLnk.jsx'
import './Head.css'

const Head = () => {
  return (
    <header>
      <img className='logo' src="/img/Logo - copia.png" alt="logo" />
      <nav>
        {
          NAVIGATOR.length && NAVIGATOR.map((lnk) => <NavLnk key={lnk.name} lnk={lnk} />)
        }
      </nav>
    </header>
  )
}

export default Head