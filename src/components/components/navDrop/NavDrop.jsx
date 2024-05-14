import { Nav, NavDropdown } from 'react-bootstrap'
import NavLnk from '../../components/navlnk/NavLnk'

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
                            item.sub && item.sub.map(it => <NavLnk lnk={it.link} key={it.link} name={it.name}/>)
                        }
                    </NavDropdown>
            }
        </>
    )
}
