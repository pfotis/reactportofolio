import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Project from "../components/Projects";

function Portfolio() {
  return (
    <Container>
      <section className="content">
        <Row>
          <div className="col-md-12 midsection">
            <br/>
            <br/>
            <h2>Portfolio</h2>
            <hr/>
            <br/>
            <Row>
              <Project
                name="Code Refactor"
                imgPath="./assets/images/portofolio/cssFile1.png"
                linkDeployed="https://pfotis.github.io/code-refactor/"
                linkGithub="https://github.com/pfotis/code-refactor"
              />
              <Project
                name="Password Generator"
                imgPath="./assets/images/portofolio/first_look.png"
                linkDeployed="https://pfotis.github.io/generator-password/"
                linkGithub="https://github.com/pfotis/generator-password"
              />
              <Project
                name="Code Quiz"
                imgPath="./assets/images/portofolio/startQuiz.png"
                linkDeployed="https://pfotis.github.io/Code-Quiz/"
                linkGithub="https://github.com/pfotis/Code-Quiz"
              />
            </Row>
            <Row>
              <Project
                name="Day Planner"
                imgPath="./assets/images/portofolio/in_the_begin.png"
                linkDeployed="https://pfotis.github.io/Day-Planner/"
                linkGithub="https://github.com/pfotis/Day-Planner"
              />
              <Project
                name="Weather Dashboard"
                imgPath="./assets/images/portofolio/add_cities.png"
                linkDeployed="https://pfotis.github.io/Weather-Dashboard/"
                linkGithub="https://github.com/pfotis/Weather-Dashboard"
              />
              <Project
                name="employee-directory"
                imgPath="./assets/images/portofolio/first_impressd.png"
                linkDeployed="https://pfotis.github.io/employee-directory/"
                linkGithub="https://github.com/pfotis/employee-directory"
              />
            </Row>
            <Row>
              <Project
                name="burger"
                imgPath="./assets/images/portofolio/first_impress.png"
                linkDeployed="https://secret-garden-47035.herokuapp.com/"
                linkGithub="https://github.com/pfotis/Day-Planner"
              />
              <Project
                name="readMe-Generator"
                imgPath="./assets/images/portofolio/readme1.png"
                linkDeployed="https://drive.google.com/file/d/1W41klD2MLD-vAK8Abcu3CTzQpkCfHNL0/view"
                linkGithub="https://github.com/pfotis/readMe-Generator"
              />
              <Project
                name="Portofolio"
                imgPath="./assets/images/portofolio/aboutMe.png"
                linkDeployed="https://pfotis.github.io/portofolio/"
                linkGithub="https://github.com/pfotis/portofolio"
              />
            </Row>
            <Row>
              <Project
                name="employee-tracker"
                imgPath="./assets/images/portofolio/employeeList.png"
                linkDeployed="https://drive.google.com/file/d/1mQIzJpGsT2iBNYjOlvrsvdQfpXXiyIcy/view"
                linkGithub="https://github.com/pfotis/employee-tracker"
              />
              <Project
                name="note-taker"
                imgPath="./assets/images/portofolio/index.png"
                linkDeployed="https://arcane-hamlet-40149.herokuapp.com/"
                linkGithub="https://github.com/pfotis/note-taker"
              />
              <Project
                name="team-profile-generator"
                imgPath="./assets/images/portofolio/teamPhoto.png"
                linkDeployed="https://github.com/pfotis/team-profile-generator"
                linkGithub="https://github.com/pfotis/team-profile-generator"
              />
            </Row>
          </div>
        </Row>
      </section>
    </Container>
  );
}

export default Portfolio;