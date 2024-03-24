import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CV from "../../assets/RaphaeladoAmaralGil.pdf";
import "./index.css";

function MyNavBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        className="navbar flex row p-2"
        style={{ backgroundColor: "#ffe7e7"}}
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="./" className="NavLink">
                Home
              </Nav.Link>
              <Nav.Link href="./about" className="NavLink">
                About me
              </Nav.Link>
              <Nav.Link href="./projects" className="NavLink">
                Projects
              </Nav.Link>
              <Nav.Link href="./contact" className="NavLink">
                Contacts
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
