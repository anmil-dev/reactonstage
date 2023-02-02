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
// import UserLoginForm from '../features/user/UserLoginForm';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
                <NavbarBrand href='/'>
                    <h1>ONSTAGE. A Better Live Experience</h1>
                </NavbarBrand>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='ms-auto' navbar>
                        <NavItem>
                            <NavLink className='nav-link' to='./TicketForm.js'>
                                Buy Tickets Button
                            </NavLink>
                        </NavItem>
                        {/* <NavItem><NavLink>Our Venue Dropdown</NavLink></NavItem>
                        <NavItem><NavLink>Fan Club Link</NavLink></NavItem>  */}
                    </Nav>
                    {/* <UserLoginForm /> */}
                </Collapse>
        </Navbar>
    );
};

export default Header;