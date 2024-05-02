import { NavDropdown } from 'react-bootstrap'

export default function NavDrop({item}) {
    return (
        <NavDropdown title={item.name} id="basic-nav-dropdown">
            {
                item.sub.map(it => <NavDropdown.Item href={it.link}>{it.name}</NavDropdown.Item>)            }
        </NavDropdown>
    )
}
