import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">conribute to Github</strong>
      </h1>
      <GitHubCalendar
        username="Chevuu"
        blockSize={15}
        blockMargin={8}
        color="#dfff00"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
