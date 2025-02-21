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
  className="mt-5 position-relative shadow-lg border-none"
  style={{
    borderRadius: "25px",
    border: "none",
    width: "100%",
    height: "100%", // Ensure the card takes full height
    display: "flex",
    flexDirection: "column",
  }}
  onMouseEnter={() => handleMouseEnter(project.id)}
  onMouseLeave={handleMouseLeave}
>
  <Card.Img
    className="d-block border-none"
    src={project.image}
    style={{
      borderBlockColor: "white",
      borderRadius: "25px",
      height: "100%", // Ensure the image fills the card
      objectFit: "cover", // Keeps image proportional
    }}
  />

                {hoveredCard && hoveredCard.id === project.id && (
                  <div
                    className="position-absolute w-100 d-flex justify-content-center align-items-center  border-none"
                    style={{ backgroundColor: "white", borderRadius: "25px", height:'100%' }}
                  >
                    <Card.Body
                      className="text-center"
                    >
                      <Card.Title
                        style={{
                          color: "#ea5555",
                          fontWeight: "bold",
                          borderBlockColor:'white',
                        }}
                      >
                        {project.title}
                      </Card.Title>

                      <Card.Text
                        style={{
                          color: "black"
                        }}
                      >
                        {project.pitch}
                      </Card.Text>
                      <div
                        style={{display: "flex", justifyContent: "center", padding:'10px' }}
                      >
                        <Button
                          href={project.deployedLink}
                          style={{
                            marginRight: "10px",
                            backgroundColor: "white",
                            border: "none",
                            // width: '10%'
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faGlobe}
                            style={{ color: "#ea5555", height: "100%", paddingRight: '5px',}}
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
                            style={{ color: "#ea5555", height: "100%", padding: 'px'}}
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
