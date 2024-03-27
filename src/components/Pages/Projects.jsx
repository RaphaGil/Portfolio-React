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
    setHoveredCard({ id: projectId});
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <>
      <PageWrapper>
        <h3 className="text-center text-light-emphasis mt-4">
          P R O J E C T S <br /> G A L L E R Y{" "}
        </h3>
        <div className="text-center m-3 p-4" style={{ fontSize: "20px" }}>
          <p className="text-light-emphasis">
            Discover my projects, meticulously crafted with React, React , JSON,
            JSX, JavaScript, HTML, CSS, and Bootstrap.
          </p>
        </div>
        <Row>
          {projects.map((project) => (
            <Col lg={6} key={project.id}>
              <Card
                className="mb-4 position-relative shadow"
                style={{ backgroundColor: "none", borderRadius: "25px"}}
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={handleMouseLeave}
              >
                <Card.Img
                  className="d-block"
                  variant="top"
                  src={project.image}
                  style={{
                    width: "100%",
                    height: 'auto',
                    borderRadius: "25px",
                  }}
                />
                {hoveredCard &&
                  hoveredCard.id === project.id && (
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                      style={{ backgroundColor: "white", borderRadius: "25px" }}
                    >
                      <Card.Body className="text-center" style={{width: '100%'}}>
                        <Card.Title
                          style={{
                            padding: "5px",
                            color: "darkgray",
                            borderRadius: "15px",
                            fontWeight: "bold",
                            fontSize: "4wv",
                          }}
                        >
                          {project.title}
                        </Card.Title>
                        <Card.Text
                          style={{
                            color: "darkgray",
                            fontSize: "4wv",
                          }}
                        >
                          {project.pitch}
                        </Card.Text>
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <Button
                            href={project.deployedLink}
                            style={{ marginRight: "10px", 
                            backgroundColor: 'white', 
                            border: 'none',
                            }}
                          >
                            <FontAwesomeIcon icon={faGlobe} style={{color:'pink', height: '40wv'}}/>
                          </Button>
                          <Button
                            href={project.repoLink}
                            style={{ marginRight: "10px", 
                            backgroundColor: 'white', 
                            border: 'none', }}
                            className="github-link"
                          >
                          <FontAwesomeIcon icon={faGithub} style={{ color:'pink', height:'40wv' }} />
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
