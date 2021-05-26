import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Card from "../components/Card";
import data from "../projects.json";


function Portfolio() {
    
  const [projects, setProjects] = useState([])
  useEffect(() => {
    loadProjects()
  }, [])
  function loadProjects() {
    setProjects(data);
  };
  console.log(projects);

  return (
    <Container>
      <section className="content">
        <Row>
            <h2>Portfolio</h2>
            <hr/>
            {projects.map(project => (
              <Card
                name = {project.name}
                imgPath = {project.image}
                linkDeployed = {project.webpage}
                linkGithub = {project.repository}
              />
          ))}
        </Row>
      </section>
    </Container>
  );
}

export default Portfolio;