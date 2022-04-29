import React from 'react';
import { Nav } from 'react-bootstrap';
const NavStyle = () => {
  return (
    <>
      <div>
        <nav className='navbar navbar-expand-lg bg-dark navbar-dark  navbar-fixed-top'>
          <div className='container'>
            <a href='#sss' className='navbar-brand'>
              Logo {/*Any Logo You want*/}
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navmenu'
            >
              <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navmenu'>
              <ul className='nav  ms-auto'>
                <li className='nav-item p-2'>
                  <NavLink to='/' className='nav-link btn-info txt-light'>
                    Home
                  </NavLink>
                </li>
                <li className='nav-item p-2'>
                  <NavLink to='/About' className='nav-link btn-info'>
                    About
                  </NavLink>
                </li>
                <li className='nav-item p-2'>
                  <NavLink to='/Portfolio' className='nav-link'>
                    Portfolio
                  </NavLink>
                </li>
                <li className='nav-item p-2'>
                  <NavLink to='/Service' className='nav-link'>
                    Service
                  </NavLink>
                </li>
                <li className='nav-item p-2'>
                  <NavLink to='/Products' className='nav-link'>
                    Product
                  </NavLink>
                </li>
                <li className='nav-item p-2'>
                  <NavLink to='/Contact' className='nav-link'>
                    Contact
                  </NavLink>
                </li>
                <li className='nav-item p-2'>
                  <NavLink to='/Contact' className='nav-link'>
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <Nav justify variant='tabs' defaultActiveKey='/home'>
          <Nav.Item>
            <Nav.Link href='/home'>Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='link-1'>Loooonger NavLink</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='link-2'>Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='disabled' disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
};

export default NavStyle;
