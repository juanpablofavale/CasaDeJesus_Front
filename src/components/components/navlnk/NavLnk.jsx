import { Link } from 'react-router-dom'
import './NavLnk.css'

const NavLnk = ({lnk}) => {
  return (
    <>
      <Link to={lnk.link}>{lnk.name}</Link>
    </>
  )
}

export default NavLnk