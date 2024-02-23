import React from "react";
import { Card, Row, Col, Button, Carousel } from "react-bootstrap";
import projects from "../../projects.json";
import { useState } from "react"; // Import useState hook
import PageWrapper from "../PageWrapper/Index";

const Projects = () => {
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
        <h3 className="text-center text-light-emphasis">P R O J E C T S <br />G A L L E R Y </h3>
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
        <Carousel>
          {projects.map((project) => (
            <Carousel.Item key={project.id}>
                <Col>
                  <Card className="h-100" style={{ backgroundColor: "#ea5555" }}>
                  <Card.Img className='d-block w-70' variant="top" src={project.image} style={{ height: "70%", objectFit: "fill" }} />
                      <Card.Title style={{ padding: "5px", color: "#ffe7e7", borderRadius: "15px" }}>{project.title}</Card.Title>                    
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        variant="success"
                        href={project.deployedLink}
                        style={{
                          border: "none",
                          margin: "10px",
                          color: hoverStates[`deployedLink_${project.id}`] ? "white" : "#ea5555",
                          backgroundColor: hoverStates[`deployedLink_${project.id}`] ? "#f6c6c2" : "#f6c6c2",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={() => handleMouseEnter(`deployedLink_${project.id}`)}
                        onMouseLeave={() => handleMouseLeave(`deployedLink_${project.id}`)}
                      >
                        Deployed app
                      </Button>
                      <Button
                        variant="success"
                        href={project.repoLink}
                        style={{
                          border: "none",
                          margin: "10px",
                          color: hoverStates[`repoLink_${project.id}`] ? "white" : "#ea5555",
                          backgroundColor: hoverStates[`repoLink_${project.id}`] ? "#f6c6c2" : "#f6c6c2",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={() => handleMouseEnter(`repoLink_${project.id}`)}
                        onMouseLeave={() => handleMouseLeave(`repoLink_${project.id}`)}
                      >
                        GitHub repo
                      </Button>
                    </div>
                  </Card>
                </Col>
      
            </Carousel.Item>
          ))}
        </Carousel>
      </PageWrapper>
    </>
  );
};

export default Projects;
