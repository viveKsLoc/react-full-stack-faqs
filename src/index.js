import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import OptionsBar from "./components/OptionsBar";
import ReactDOM from "react-dom";
import { Container, Row, Col, Collapse, Alert } from "reactstrap";


import "./styles.css";

import OptionCard from "./components/OptionCard";
import FAQCard from "./components/FAQCard";
import sets from "./data/sets";
function App() {
  const [selectedOptionBar, setSelectedOptionBar] = useState("Sets");
  const [selectedOptionCard, setSelectedOptionCard] = useState(sets[3].faqs);

  function handleOptionBarClick(bar) {
    setSelectedOptionBar(bar);
  }

  function handleOptionCardClick(card) {
    setSelectedOptionCard(card);
  }
  return (
    <>
      <NavBar />
      <br />
      <Container style={{ background: "white", padding: "0"}} >
        <Row>
        <Col>
         <Alert color="warning">WARNING: This is a work in progress React App. All data is loaded on the client until I figure out how to host <a href="https://codesandbox.io/s/full-stack-faqs-back-end-8snib">the backend</a> on firebase.</Alert>
          </Col>
          </Row>
          <Row>
          <Col xs="4">
            <Collapse isOpen={selectedOptionBar === "Sets"}>
              {sets.map(set => (
                <OptionCard set={set} clickHandler={handleOptionCardClick} className={selectedOptionCard === set.faqs ? "element": "active-element"} />
              ))}
            </Collapse>
          </Col>
          <Col xs="8">
          {selectedOptionCard.map(faq => <FAQCard faq={faq} />)}
          </Col>
        </Row>
      </Container>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
