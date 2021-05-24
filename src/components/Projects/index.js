import React from "react";
import Col from "../Col";
import "./style.css";

function Project(props) {

    console.log("image", props.imgPath);
  return (
    <Col size="md-4 sm-12">
      <div className="project-container">
        <h2 className="project-header">{props.name}</h2>
        <img
          className="img-fluid portfolio-pic"
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

export default Project;
