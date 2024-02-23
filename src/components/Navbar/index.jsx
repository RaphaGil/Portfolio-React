import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/img/me.jpeg";
import CV from "../../assets/RaphaeladoAmaralGil.pdf"
function MyNavBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="fixed-top"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="./"
                style={{
                  margin: "5px",
                  borderRadius: "5px",
                  color: "black",
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="./about"
                style={{
                  margin: "5px",

                  borderRadius: "5px",
                  color: "black",
                }}
              >
                About me
              </Nav.Link>
              <Nav.Link
                href="./projects"
                style={{
                  margin: "5px",

                  borderRadius: "5px",
                  color: "black",
                }}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="./contact"
                style={{
                  margin: "5px",
           
                  borderRadius: "5px",
                  color: "black",
                }}
              >
                Contacts
              </Nav.Link>
              <Nav.Link
                src={CV}
                style={{
                  margin: "5px",
                  borderRadius: "5px",
                  color: "black",
                }}
              >
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ height: "50px" }}></div>
    </>
  );
}

export default MyNavBar;