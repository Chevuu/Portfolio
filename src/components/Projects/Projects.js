import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import reziser from "../../Assets/Projects/reziserWebsite.png";
import luckyLounge from "../../Assets/Projects/lucky-lounge.png";
import cheChat from "../../Assets/Projects/CheChat.png";
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
          Here are some projects I spent my free time on in the past few years.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musicPromoter}
              isBlog={false}
              title="Teezer"
              description="This is the app i am currently working on. In future users will be able to listen to 5 seconds of a song for free and buy the full track if wanted. Customer asked for this, I eblieve they gave up on the idea, but I will finish the project regardless."
              ghLink="https://github.com/Chevuu/MusicPromoter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={patientManager}
              isBlog={false}
              title="Patient Manager"
              description="Started this project to build a managment system for a dental clinic. Not sure why I stopped. Hopefully I can come back to it and finish it."
              ghLink="https://github.com/Chevuu/Patient-Manager"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskTracker}
              isBlog={false}
              title="Task Tracker"
              description="This is my first project using React. App uses JSON Server which I didn't host on Glitch or Heroku yet. In future I might come back to it to host the server."
              ghLink="https://github.com/Chevuu/Task-tracker"
              demoLink="https://competent-curran-b84101.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reziser}
              isBlog={false}
              title="Caffe Website"
              description="My first website ever. A lot of things I would do differently if I started from scratch. This is where it all started."
              ghLink="https://github.com/Chevuu/ReziserWebsite"
              demoLink="https://stalwart-kheer-5e67e2.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={luckyLounge}
              isBlog={false}
              title="Lucky Coder Lounge"
              description="I recommend reading the GitHub README.md if you're interested."
              ghLink="https://github.com/Chevuu/LuckyCoderLounge"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cheChat}
              isBlog={false}
              title="CheChat"
              description="I wanted to try the Golang programming language so I built a very simple chat for fun."
              ghLink="https://github.com/Chevuu/CheChat"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
