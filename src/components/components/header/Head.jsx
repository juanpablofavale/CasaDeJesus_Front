import NAVIGATOR from '../../../data/Navigator.jsx'
import NavLnk from '../navlnk/NavLnk.jsx'
import './Head.css'

const Head = ({subMenu}) => {
  return (
    <header>
      <img className='logo' src="/img/Logo - copia.png" alt="logo" />
      <div className='navs'>
        <nav className='nav'>
          {
            NAVIGATOR.main.length && NAVIGATOR.main.map((lnk) => <NavLnk key={lnk.name} lnk={lnk} />)
          }
        </nav>
        <nav className='sub'>
          {
            subMenu.length != 0 && subMenu.map((lnk) => <NavLnk key={lnk.name} lnk={lnk} />)
          }
        </nav>
      </div>
    </header>
  )
}

export default Head