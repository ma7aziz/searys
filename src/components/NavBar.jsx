// src/components/NavBar.js
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import { Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import '../styles/NavBar.scss'; // Ensure correct path to your NavBar.scss file

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Adjust 56 to match your navbar height
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" expand="md" className={`navbar ${isSticky ? 'sticky' : ''}`} aria-label="main-navigation">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img loading="lazy" src={logo} alt="Logo" className="nav-logo d-inline-block align-top" />
          </Navbar.Brand>
          <Button variant="outline-primary" onClick={handleShow} className="ms-auto d-md-none">
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex">
            <Nav className="ms-auto nav-links">
              <Nav.Link as={NavLink} className="nav-link" to="/">{t('Home')}</Nav.Link>
              <Nav.Link as={NavLink} className="nav-link" to="/services">{t('Services')}</Nav.Link>
              <Nav.Link as={NavLink} className="nav-link" to="/about">{t('About')}</Nav.Link>
              <Nav.Link as={NavLink} className="nav-link" to="/contact">{t('Contact')}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img loading="lazy" src={logo} alt="Logo" className="nav-logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column nav-links">
            <Nav.Link as={NavLink} className="nav-link" to="/" onClick={handleClose}>{t('Home')}</Nav.Link>
            <Nav.Link as={NavLink} className="nav-link" to="/services" onClick={handleClose}>{t('Services')}</Nav.Link>
            <Nav.Link as={NavLink} className="nav-link" to="/about" onClick={handleClose}>{t('About')}</Nav.Link>
            <Nav.Link as={NavLink} className="nav-link" to="/contact" onClick={handleClose}>{t('Contact')}</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavBar;
