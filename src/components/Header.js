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
import '../App.css' 
import styles from '../mystyles.module.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <Navbar fixed='top' expand='xxl' id='nav' className={styles.navbar}>
                <NavbarBrand href='/' style={{fontSize: 45}}>
                <FontAwesomeIcon icon={faMicrophoneLines} /> onStage.
                </NavbarBrand>
            <h2>a <strong>better</strong> live experience</h2>
            <Button size='lg' outline className='ms-1'
                style={{backgroundColor: "black", color: "white"}}>
                Buy TICKETS
            </Button>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='ms-auto' navbar>
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
                <UserLoginForm />
        </Navbar>
    );
};

export default Header;