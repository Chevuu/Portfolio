import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Ay, I am <span className="purple">Vuk Jurišić </span>
            from <span className="purple"> Belgrade, Serbia.</span>. I live in 
            <span className="purple"> Delft, Netherlands </span> for my uni. I am 
            doing a BSc in Computer Science & Engineering. On the side I work for TUD's 
            online education as a developer. I enjoy spending my free time on creating medium 
            quality projects and planning to improve them later.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports (Table Tennis, Rowing, Bouldering)
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning languages (weird passion for <em>Български</em>)
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling (sun chasing to be exact)
            </li>
          </ul>

          <p style={{ color: "rgb(224, 187, 0)" }}>
            "Everything is under <code style={{ fontFamily: 'monospace', color: "#f2ff7d", padding: "2px 4px", fontSize: "22px" }}>ctrl</code>."{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
