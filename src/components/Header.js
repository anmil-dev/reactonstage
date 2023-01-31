import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        Hello
        <Navbar dark color='primary' sticky='top' expand='md' >
            <NavbarBrand>ONSTAGE. A Better Live Experience</NavbarBrand>
            <NavbarToggler />
            <Collapse>
                <Nav>
                    <NavItem><NavLink>Buy Tickets Button</NavLink></NavItem>
                    <NavItem><NavLink>Our Venue Dropdown</NavLink></NavItem>
                    <NavItem><NavLink>Fan Club Link</NavLink></NavItem> 
                </Nav>
                {/* <UserLoginForm />  */}
            </Collapse>
        </Navbar>
        </>
    );
};

export default Header;