import { useState, useEffect } from "react";
import { ArrowUpCircle } from "react-bootstrap-icons";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Add empty dependency array to run the effect only once

  return (
    <>
      <div style={{ height: "50px" }}></div>

      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          color: "white",
          backgroundColor: '#7b681c',
          padding: "10px",
          display: "flex",
          justifyContent: "center", // Center items horizontally
          alignItems: "center", // Center items vertically
        }}
      >
        <Container>
          <Row style={{ alignItems: "center", justifyContent: "center" }}>
            <Col xs="auto">
              <span style={{ fontSize: "smaller" }}>
                © 2024 Made with love ❤️ by Raphaela Gil
              </span>
            </Col>
            <Col xs="auto">
              <ArrowUpCircle
                size={24}
                onClick={scrollToTop}
                style={{ display: showButton ? "block" : "none" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;

