import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vuk Jurišić </span>
            from <span className="purple"> Belgrade, Serbia.</span>. However, I'm situated in 
            <span className="purple"> Delft, Netherlands </span> due to university.
            <br />I am working on establishing a nice foundation for learning new Skills and 
            building a succesful career.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports (Table Tennis, Rowing)
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(224, 187, 0)" }}>
            "What doesn't kill you, makes you stronger."{" "}
          </p>
          <footer className="blockquote-footer">Friedrich Nietzsche</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
