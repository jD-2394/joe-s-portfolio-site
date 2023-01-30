import * as React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.css';
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
 } from '../styleSheets/layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <Container fluid>
      <Navbar bg="primary" variant="dark" expand="lg" fixed="top" >
        
          <Navbar.Brand href="/">Joe's Site</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='me-auto justify-content-left' align>
              <Nav.Link href="/" className='nav-links'>Home</Nav.Link>
              <Nav.Link href="/about" className='nav-links'>About.Me</Nav.Link>
              <Nav.Link href="/experience" className='nav-links'>Experience</Nav.Link>
              <Nav.Link href="/news" className='nav-links'>News</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        
      </Navbar >
      </Container>
        

      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout