import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navbars = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' fixed='top'>
        <Container>
          <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <NavLink to='/' className='nav-link txt-light'>
                Home
              </NavLink>
              <NavLink to='/About' className='nav-link '>
                About
              </NavLink>
              <NavLink to='/Portfolio' className='nav-link'>
                Portfolio
              </NavLink>
              <NavLink to='/Service' className='nav-link'>
                Service
              </NavLink>
              <NavLink to='/Products' className='nav-link'>
                Product
              </NavLink>
              <NavLink to='/Contact' className='nav-link'>
                Contact
              </NavLink>
            </Nav>
            <Nav>
              <Nav.Link href='#deets'>Login</Nav.Link>
              <Nav.Link eventKey={2} href='#memes'>
                Setting
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
