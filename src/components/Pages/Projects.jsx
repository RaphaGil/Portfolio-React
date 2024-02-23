import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import projects from "../../projects.json";
import { useState } from "react"; // Import useState hook
import { Button } from "react-bootstrap";
import PageWrapper from "../PageWrapper/Index";

const Projects = () => {
  // Use an object to store hover state for each button
  const [hoverStates, setHoverStates] = useState({});

  const handleMouseEnter = (buttonId) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [buttonId]: true,
    }));
  };

  const handleMouseLeave = (buttonId) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [buttonId]: false,
    }));
  };

  return (
    <>
      <PageWrapper>
        <h3 className="text-center">P R O J E C T S <br></br>G A L L E R Y </h3>
        <p>______________________________</p>        
        <div className="text-center m-3">
          <p>
            Discover my projects, meticulously crafted with React, React Router,
            JSON, JSX, JavaScript, HTML, CSS, and Bootstrap.
          </p>
          <p>
            Simply click on the respective button to experience each project
            online, or delve deeper into its codebase on GitHub for further
            exploration.
          </p>
        </div>
        <Row xs={1} sm={3} md={2} className="g-4">
          {projects.map((project) => (
            <Col key={project.id}>
              <Card
                className="h-100"
                style={{ minWidth: "180px",  }}
              >
                <Card.Body>
                  <Card.Title
                    style={{
                      padding: "5px",
                      color: "black",
                      borderRadius: "15px",
                      backgroundColor: '#fad334'
                    }}
                  >
                    {project.title}
                  </Card.Title>
                  <Card.Text>{project.pitch}</Card.Text>
                </Card.Body>

                <Card.Img
                  variant="top"
                  src={project.image}
                  style={{
                    height: "300px",
                    objectFit: "fill",
                    // borderTop: "2px solid #547258",
                    // borderBottom: "2px solid #547258",
                  }}
                />

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="success"
                    href={project.deployedLink}
                    style={{
                      border: "none",
                      margin: "10px",
                      backgroundColor: "#fad334",
                      color: hoverStates[`deployedLink_${project.id}`] ? "#7b681c" : "white", // Change text color based on hover state
                      transition: "color 0.3s ease"
                    }}
                    onMouseEnter={() => handleMouseEnter(`deployedLink_${project.id}`)} // Set hover state to true on mouse enter
                    onMouseLeave={() => handleMouseLeave(`deployedLink_${project.id}`)} // Set hover state to false on mouse leave
                  >
                    Deployed app
                  </Button>
                  <Button
                    variant="success"
                    href={project.repoLink}
                    style={{
                      border: "none",
                      margin: "10px",
                      backgroundColor: "#fad334",
                      color: hoverStates[`repoLink_${project.id}`] ? "#7b681c" : "white", // Change text color based on hover state
                      transition: "color 0.3s ease"
                    }}
                    onMouseEnter={() => handleMouseEnter(`repoLink_${project.id}`)} // Set hover state to true on mouse enter
                    onMouseLeave={() => handleMouseLeave(`repoLink_${project.id}`)} // Set hover state to false on mouse leave
                  >
                    GitHub repo
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </PageWrapper>
    </>
  );
};

export default Projects;
