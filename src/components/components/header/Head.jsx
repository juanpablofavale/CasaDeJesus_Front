import NAVIGATOR from '../../../data/Navigator.jsx'
import './Head.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDrop from '../navDrop/NavDrop.jsx';

const Head = ({subMenu}) => {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <div className='navbarLogo'>
            <Navbar.Brand className='nav-logo' href="/">
              <img className='logo' src="/img/LogoH.png" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {
                NAVIGATOR.main.map(item => <NavDrop key={item.name} item={item}/>)
              }
              <Nav.Link className='donar' target='_blank' href="https://donaronline.org/fundacion-casa-de-jesus/manifestemos-nuestra-fe-en-obras">Donar</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Head