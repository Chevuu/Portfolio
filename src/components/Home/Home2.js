import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm in my third year at TU Delft, diving deep into Computer
              Science and Engineering, with an expected <b className="purple">graduation date</b> in
              January 2025. My academic journey has been enriched by an Erasmus+
              exchange at Instituto Tecnico Lisboa and a hands-on <b className="purple">internship</b> at
              Payaut, Amsterdam, where I improved my skills but more importantly,
              <b className="purple">developed a passion</b>.
              <br />
              <br />
              When I'm not busy with university assignments, I enjoy developing
              <b className="purple">personal projects</b> that sharpen my skills and challenge my
              creativity. Recently, I've been <b className="purple">exploring the intricacies of
              deployment</b> and the nuances of long-term application
              maintenance.
              <br />
              <br />
              I’m currently searching for a <b className="purple">5,6 month opportunity starting 
              around 1st July</b> where I can
              contribute to a team that values innovation and agile development.
              If you’re looking for someone who can blend analytical thinking
              with effective problem-solving, let’s connect. I’m always eager to
              discuss technology, potential collaborations, or the latest industry trends.
              <br />
              <br />
              If you’re on the lookout for a developer with a proven track
              record and a slightly offbeat sense of humor to keep things
              interesting, feel free to reach out. Let’s make work enjoyable and
              productive. <b className="purple">Peace</b> 🤙
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Chevuu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vukjurisic/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vuk_jurisic/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
