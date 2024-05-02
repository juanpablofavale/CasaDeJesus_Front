import { Link } from 'react-router-dom'
import './NavLnk.css'

const NavLnk = ({lnk, name}) => {
  return (
    <>
      <Link to={lnk}>{name}</Link>
    </>
  )
}

export default NavLnk