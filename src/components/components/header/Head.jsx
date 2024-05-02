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
          <Navbar.Brand className='nav-logo' href="/">
            <img className='logo' src="/img/Icono.png" alt="logo" />
            <h1>La Casa de Jesus</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {
                NAVIGATOR.main.map(item => <NavDrop key={item.name} item={item}/>)
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Head