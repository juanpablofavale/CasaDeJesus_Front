import { Link } from 'react-router-dom'
import './NavLnk.css'
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavLnk = ({lnk, name}) => {
  return (
    <>
      <NavDropdown.Item href=''>
        <Link to={lnk}>{name}</Link>
      </NavDropdown.Item>
    </>
  )
}

export default NavLnk