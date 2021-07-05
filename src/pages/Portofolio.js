import React, { useState, useEffect } from "react";
// import components
import { Container, Row } from "../components/Grid";
import Card from "../components/Card";
//import data
import data from "../data/projects.json";


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
                about = {project.about}
                linkDeployed = {project.webpage}
                linkGithub = {project.repository}
                technologies = {project.technologies}
              />
          ))}
        </Row>
      </section>
    </Container>
  );
}

export default Portfolio;