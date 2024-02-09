import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import reziser from "../../Assets/Projects/reziserWebsite.png";
import taskTracker from "../../Assets/Projects/taskTracker.png";
import patientManager from "../../Assets/Projects/PatientManager.png";
import musicPromoter from "../../Assets/Projects/music-promoter.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on. I'm not super proud of most of these, biggest my biggest projects rarely end up finished.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musicPromoter}
              isBlog={false}
              title="Teezer"
              description="This is the app i am currently working on. In future users will be able to listen to 5 seconds of a sing for free and buy the full track if wanted."
              ghLink="https://github.com/Chevuu/MusicPromoter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={patientManager}
              isBlog={false}
              title="Patient Manager"
              description="An application that will help easily manage patients and store them in a database. The basic front‑end is done in Angular which I have to learn more about, while back‑end architecture is already done in Spring Boot. The application is not yet finished or deployed."
              ghLink="https://github.com/Chevuu/Patient-Manager"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskTracker}
              isBlog={false}
              title="Task Tracker"
              description="This is my first project using React. App uses JSON Server which I didn't host on Glitch or Heroku yet. In future some more attention will be given to this project."
              ghLink="https://github.com/Chevuu/Task-tracker"
              demoLink="https://competent-curran-b84101.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reziser}
              isBlog={false}
              title="Caffe Website"
              description="This is my first web-dev project ever. It was meant to be sold as the official website of a caffe. It was a great practice, experience, and an introduction to my computer science journey. Many things I would change, now that i gained experience, but we all started somewhere. I am putting this here cause it shows how much I progressed in a year."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://stalwart-kheer-5e67e2.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
