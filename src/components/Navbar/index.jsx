import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CV from "../../assets/RaphaeladoAmaralGil.pdf";
import Logo from "../../assets/img/Logo.png"; 
import "./index.css";

function MyNavBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        className="navbar"
        style={{ backgroundColor: "#ffe7e7"}}
      >
        <Container>
          {/* Logo on the left side */}
          <Navbar.Brand href="./">
            <img
              src={Logo} // Set the source of the logo image
              height="55"
              className="d-inline-block align-top"
              alt="Your Logo"
            />
          </Navbar.Brand>
          
          {/* Button on the right side */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end font">
            <Nav className="mr-auto" style={{ fontSize: '18px' }}>
              <Nav.Link href="./" className="NavLink">
                Home
              </Nav.Link>
              <Nav.Link href="./about" className="NavLink">
                About
              </Nav.Link>
              <Nav.Link href="./projects" className="NavLink">
                Projects
              </Nav.Link>
              <Nav.Link href="./contact" className="NavLink">
                Contact
              </Nav.Link>
              <Nav.Link href={CV} className="NavLink">
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavBar;
