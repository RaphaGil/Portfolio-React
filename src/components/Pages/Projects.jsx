import React, { useState } from "react";
import { Card, Col, Button, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import projects from "../../projects.json";
import PageWrapper from "../PageWrapper/Index";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (projectId) => {
    setHoveredCard({ id: projectId });
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <>
      <PageWrapper>
        <div className="text-center " style={{ fontSize: "24px", border:'none' }}>
          <h3 className="text-light-emphasis mt-4">
            P R O J E C T S
          </h3>
        
        </div>
        <Row>
          {projects.map((project) => (
            <Col lg={6} key={project.id}>
              <Card
                className="m-4 position-relative shadow-lg border-none"
                style={{ borderRadius: "25px", border: 'none', borderBlockColor: 'transparent'}}
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={handleMouseLeave}
              >
                <Card.Img
                  className="d-block border-none"
                  src={project.gif}
                  style={{
                    borderBlockColor:'white',
                    borderRadius: "25px",
                    width: '100%',
                    height:'auto'
                  }}
                />
                {hoveredCard && hoveredCard.id === project.id && (
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center  border-none"
                    style={{ backgroundColor: "white", borderRadius: "25px" }}
                  >
                    <Card.Body
                      className="text-center"
                      style={{ width: "50%", height: 'auto'}}
                    >
                      <Card.Title
                        style={{
                          padding: "5px",
                          color: "#ea5555",
                          fontWeight: "bold",
                          fontSize: '90%',
                          borderBlockColor:'white'
                        }}
                      >
                        {project.title}
                      </Card.Title>

                      <Card.Text
                        style={{
                          color: "black",
                          fontSize: '80%',
                        }}
                      >
                        {project.pitch}
                      </Card.Text>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >

                        <Button
                          href={project.deployedLink}
                          style={{
                            marginRight: "10px",
                            backgroundColor: "white",
                            border: "none",
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faGlobe}
                            style={{ color: "#ea5555", height: "100%", padding: '5px',}}
                          />
                        </Button>

                        <Button
                          href={project.repoLink}
                          style={{
                            marginRight: "10px",
                            backgroundColor: "white",
                            border: "none",
                          }}
                          className="github-link"
                        >
                          <FontAwesomeIcon
                            icon={faGithub}
                            style={{ color: "#ea5555", height: "100%", padding: '5px'}}
                          />
                        </Button>
                      </div>
                    </Card.Body>
                  </div>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </PageWrapper>
    </>
  );
};

export default Projects;
