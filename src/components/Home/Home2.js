import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
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
              I got introduced to programming through <b className="purple"> web development</b> projects 2 years ago.
              Since than I learned a lot more in that field and I'm striving to learn more. I am a 2nd year Computer 
              Science student at TU Delft. Now, I'm focusing on extending my knowledge of <b className="purple"> low
              level languages (VHDL)</b> and working on fully moving to Linux.
              <br /><br />
              I am most comfortable with <i><b className="purple"> Java and its frameworks.</b></i>. However, I can 
              confidently manage working with classics like <i><b className="purple"> C++, Javascript and Python</b></i>.
              <br /><br />
              Whenever possible, I also apply my passion for developing products with <b className="purple">Node.js</b> and
              <i><b className="purple">{" "}Modern Javascript Library and Frameworks</b></i>&nbsp; like<i><b className="purple">
              React.js and Next.js</b></i>
              <br /><br />
              I am open for work. I'd be glad to work with some of yall on a project. If you have any ideas or questions for me,
              don't hesitate to <i><b className="purple"> contact me</b></i>. Peace 🤙
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
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
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
