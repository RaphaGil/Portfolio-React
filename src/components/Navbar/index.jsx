import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CV from "../../assets/RaphaeladoAmaralGil.pdf"
import './index.css'
function MyNavBar() {
  return (
    <>
      <Navbar className='col-sm-12' style={{ width: '100%', backgroundColor: '#ffe7e7', height:'50px' }}>
      <Container style={{ width: '100%' }}>
        <Nav>
          <Nav.Link
            href="./"
            style={{
              margin: "5px",
              borderRadius: "5px",
              color: '#ea5555',
            }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="./about"
                style={{
                  margin: "5px",
                  borderRadius: "5px",
                  color: '#ea5555',
                }}
              >
                About me
              </Nav.Link>
              <Nav.Link
                href="./projects"
                style={{
                  margin: "5px",
                  borderRadius: "5px",
                  color: '#ea5555',
                }}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="./contact"
                style={{
                  margin: "5px",
                  borderRadius: "5px",
                  color: '#ea5555',
                }}
              >
                Contacts
              </Nav.Link>
              <Nav.Link
                 href={CV}
                style={{
                  margin: "5px",
                  borderRadius: "5px",
                  color: '#ea5555',
                }}
              >
                Resume
              </Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      <div style={{ height: "50px" }}></div>
    </>
  );
}

export default MyNavBar;