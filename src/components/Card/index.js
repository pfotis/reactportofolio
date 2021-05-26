import React from "react";
import Col from "../Col";
import "./style.css";

function Card(props) {
  return (
    <Col size="lg-4 md-6 sm-12">
      <div className="project-container">
        <h3 className="project-header">{props.name}</h3>
        <img
          className="project-img"
          src={props.imgPath}
          alt={props.name}
        />
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block deployedBtn"
          onClick={() => window.open(props.linkDeployed)}
        >
          (Deployed)
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block githubBtn"
          onClick={() => window.open(props.linkGithub)}
        >
          (Github)
        </button>
      </div>
    </Col>
  );
}

export default Card;
