import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className='header fixed-top'>
      <div className="header-area">
        <Navbar expand="lg" className="main-header">
          <Container fluid>
            <Navbar.Brand>
              <Link to="/">
                <img src={`${process.env.PUBLIC_URL}/images/logo-agile.png`} alt="logo" width="110px" height="90px"/>
              </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft:'70px'}}>
              <Nav className="ml-auto navigation-item" >
                <NavItem path="/" text="Home" />
                <NavItem path="/call for papers" text="call for papers"/>
                <NavItem path="/submission" text="submission"/>
                <NavItem path="/keynote speakers" text="keynote speakers"/>
                <NavItem path="/committees" text="commitees" />
                <NavItem path="/registration" text="registration" />
                <NavItem path="/program" text="program" />
                <NavItem path="/venue" text="venue" />
                <NavItem path="/contact" text="Contact" />
                <div className="header-right-btn ml-30">
                  <Link to="/search" className="btn header-btn">
                    <FontAwesomeIcon icon={faSearch} />
                  </Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="col-12">
          <div className="mobile_menu d-block d-lg-none"></div>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ path, text }) => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Nav.Item style={{ marginRight: '12px' }}>
      <Nav.Link
        as={Link}
        to={path}
        style={{
          color: (path === location.pathname || isHovered) ? 'red' : '#6f42c1',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
      </Nav.Link>
    </Nav.Item>
  );
};

export default Header;
