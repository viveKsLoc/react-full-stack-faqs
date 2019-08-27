import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Marquee from "./components/Marquee";
import Appbar from "./components/Appbar";
import Welcome from "./components/Welcome";
import faqs from "./data/faqs";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <Appbar />
      <div>
        <div style={{ width: "100%", position: "absolute" }}>
          <br />
          <br />
          <Marquee content={faqs} tag={"JavaScript"} />
          <br />
          <Marquee content={faqs} tag={"Software-Engineering"} />
          <br />
          <Marquee content={faqs} tag={"Security"} />
          <br />
          <Marquee content={faqs} tag={"Design-Patterns"} />
          <br />
          <Marquee content={faqs} tag={"HTML"} />
        </div>
        <Welcome />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
