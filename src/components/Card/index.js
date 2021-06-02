import React from "react";
import { Col, Row, Container } from "../Grid";
import { SiGithub } from 'react-icons/si';
import { GiWorld } from 'react-icons/gi';
import "./style.css";

function Card({name, imgPath, about, technologies, linkDeployed, linkGithub}) {
  if(!technologies) {
    return null;
}
  return (
    <Container>
      <Row>
        <Col size="lg-12 md-12 sm-12">
          <div className="project-container" style ={ { backgroundImage: "url('./assets/images/pattern.png')" } }>
            {/* <img className="background" src="./assets/images/pattern.png" alt="background card"/> */}
            <h3 className="project-header">{name}</h3>
            <Row>
              <Col size="lg-4 md-4 sm-12">
                <img
                  className="project-img"
                  src={imgPath}
                  alt={name}
                />
              </Col>
              <Col size="lg-5 md-4 sm-12">
                <p>
                  {about}
                </p>
              </Col>
              <Col size="lg-3 md-4 sm-12">
                <ul>
                  {technologies.map((technology) => (
                    <li>{technology}</li>
                  ))}
                </ul>
              </Col>
            </Row>
            <Row>
              <div className="buttons">
                <a href={linkDeployed} target="_blank" rel="noreferrer">
                  <GiWorld size={30} style={{ fill: 'black' }}/>
                </a>
              
                <a href={linkGithub} target="_blank" rel="noreferrer">
                  <SiGithub size={30} style={{ fill: 'black' }}/>
                </a>
              </div>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Card;
