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
        <h3 className="text-center text-light-emphasis">P R O J E C T S <br></br>G A L L E R Y </h3>
        <p className="text-light-emphasis">______________________________</p>        
        <div className="text-center m-3">
          <p className="text-light-emphasis">
            Discover my projects, meticulously crafted with React, React Router,
            JSON, JSX, JavaScript, HTML, CSS, and Bootstrap.
          </p>
          <p className="text-light-emphasis">
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
                style={{ minWidth: "180px",  backgroundColor: "#ea5555"}}
              >
                <Card.Body>
                  <Card.Title
                    style={{
                      padding: "5px",
                      color: "#ffe7e7",
                      borderRadius: "15px",
                    }}
                  >
                    {project.title}
                  </Card.Title>
                  <Card.Text
                  style={{color:"#ffe7e7"}}
                  >{project.pitch}</Card.Text>
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
                      color: hoverStates[`deployedLink_${project.id}`] ?"white" : "#ea5555",
                      backgroundColor: hoverStates[`deployedLink_${project.id}`] ? "#f6c6c2" : '#f6c6c2',
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
                      color: hoverStates[`repoLink_${project.id}`] ?"white" : "#ea5555",
                      backgroundColor: hoverStates[`repoLink_${project.id}`] ? "#f6c6c2" : '#f6c6c2',
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
