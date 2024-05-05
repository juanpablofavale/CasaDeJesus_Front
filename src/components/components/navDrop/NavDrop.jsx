import { Nav, NavDropdown } from 'react-bootstrap'
import NavLnk from '../navlnk/NavLnk'

export default function NavDrop({item}) {
    return (
        <>
            { 
                !item.sub && <Nav.Link href={item.link}>{item.name}</Nav.Link>
            }
            {
                item.sub &&
                    <NavDropdown title={item.name} id="basic-nav-dropdown">
                        {
                            item.sub && item.sub.map(it => <NavDropdown.Item href={it.link}>{it.name}</NavDropdown.Item>)            
                        }
                    </NavDropdown>
            }
        </>
    )
}
