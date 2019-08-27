import React from "react";
import { Jumbotron, Button } from "reactstrap";
import {Link} from "react-router-dom";

const Welcome = props => {
  return (
    <div
      style={{
        left: "50%",
        marginLeft: "-350px",
        marginTop: "40px",
        width: "700px",
        position: "absolute",
        zIndex: 1
      }}
    >
      <Jumbotron>
        <h1 className="display-4">Full-Stack FAQs</h1>
        <p className="lead">
          Answers to all your full-stack questions in 500 characters or less!
        </p>
        <hr className="my-2" />
        <p />
        <p className="lead">
          <Button color="primary" style={{ width: "125px", margin: "5px" }}>
            <Link to="/api" style={{color: "white"}}>swagger</Link>
          </Button>
          <Button color="primary" style={{ width: "125px", margin: "5px" }}>
          faqs.json
          </Button>
          <Button color="primary" style={{ width: "125px", margin: "5px" }}>
          <Link to="/bot" style={{color: "white"}}>docs</Link>
          </Button>
          <Button color="primary" style={{ width: "125px", margin: "5px" }}>
          <Link to="/bot" style={{color: "white"}}>Chatbot</Link>
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Welcome;
