import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/' className='fw-bolder'>BIKER'S WAREHOUSE</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link className='link' as={Link} to="/about-me">About Me</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='contact-us'>Contact Us</Nav.Link>
                        {
                            user
                                ?
                                <>

                                    <Nav.Link className='link' as={Link} to="/manageItems" >
                                        Manage-Bikes
                                    </Nav.Link>
                                    <Nav.Link className='link' as={Link} to="/addItems" >
                                        Add Bikes
                                    </Nav.Link>
                                    <Nav.Link className='link' as={Link} to="/myItems" >
                                        My-Items
                                    </Nav.Link>
                                    <button className='btn btn-outline-danger text-decoration-none  fs-4' onClick={handleSignOut}>Sign Out</button>
                                </>
                                :
                                <Nav.Link className='link' as={Link} to="/login" >
                                    Login
                                </Nav.Link>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;