import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMicrophoneLines } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import UserLoginForm from '../features/user/UserLoginForm';
import '../index.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <>
        <div className='header'></div>
        <Navbar className='navbar d-flex me-5' fixed='top' expand='xxl' id='nav'>
                <NavbarBrand id='logo' href='/'>
                    <FontAwesomeIcon icon={faMicrophoneLines} /> onStage.
                </NavbarBrand>
                <div className='col d-lg-block pe-5'>
                    <h2>a <strong>better</strong> live experience</h2>
                </div>
            <Button className='btn btn-dark btn-lg text-nowrap me-5'
                style={{backgroundColor: "black", color: "white"}}>
                BUY TICKETS
            </Button>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} className='ms-2 me-5' />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='ms-auto p-2 flex-shrink-2 ' navbar>
                        <NavItem>
                            <NavLink className='nav-link' to=''>
                                EVENT CALENDAR
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to=''>
                                ABOUT
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to=''>
                                CONTACT
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to=''>
                                FAN CLUB
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to=''>
                                BUY TICKETS
                            </NavLink>
                        </NavItem>
                    </Nav>
                    
                </Collapse>
                <UserLoginForm className=' ms-2 me-5' />
        </Navbar>
        </>
    );
};

export default Header;