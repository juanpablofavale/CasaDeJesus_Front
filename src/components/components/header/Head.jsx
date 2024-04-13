import NAVIGATOR from '../../../data/Navigator.jsx'
import NavLnk from '../navlnk/NavLnk.jsx'
import './Head.css'

const Head = () => {
  return (
    <header>
      <div>
        <img src="../../../assets/img/Logo.png" alt="logo" />
      </div>
      <nav>
        {
          NAVIGATOR.length && NAVIGATOR.map((lnk) => <NavLnk key={lnk.name} lnk={lnk} />)
        }
      </nav>
    </header>
  )
}

export default Head