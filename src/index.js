import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import ReactDOM from "react-dom";
import Scrollbar from "react-scrollbars-custom";
import {
  Container,
  Row,
  Col,
  Badge,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Nav,
  Navbar,
  NavbarBrand,
  Button
} from "reactstrap";

import OptionCard from "./components/OptionCard";
import FAQCard from "./components/FAQCard";
import sets from "./data/sets";
import tags from "./data/tags";
import types from "./data/types";
function App() {
  const [activeTab, setActiveTab] = useState("Sets");
  const [activeOption, setActiveOption] = useState(sets[0]);

  function handleOptionClick(content) {
    setActiveOption(content);
  }
  return (
    <>
      <NavBar />
      <Container
        style={{ background: "white", padding: "0", marginTop: "1em" }}
        className="rounded"
      >
        <Row>
          <Col xs="4">
            <Navbar color="light" light expand="md">
              <Button
                style={{
                  color: activeTab === "Sets" ? "white" : "black",
                  textDecoration: "none"
                }}
                color={activeTab === "Sets" ? "secondary" : "link"}
                onClick={() => setActiveTab("Sets")}
              >
                Sets{" "}
                <Badge color={activeTab === "Sets" ? "light" : "secondary"}>
                  {sets.length}
                </Badge>
              </Button>{" "}
              <Button
                style={{
                  color: activeTab === "Types" ? "white" : "black",
                  textDecoration: "none"
                }}
                color={activeTab === "Types" ? "secondary" : "link"}
                onClick={() => setActiveTab("Types")}
              >
                Types{" "}
                <Badge color={activeTab === "Types" ? "light" : "secondary"}>
                  {types.length}
                </Badge>
              </Button>{" "}
              <Button
                style={{
                  color: activeTab === "Tags" ? "white" : "black",
                  textDecoration: "none"
                }}
                color={activeTab === "Tags" ? "secondary" : "link"}
                onClick={() => setActiveTab("Tags")}
              >
                Tags{" "}
                <Badge color={activeTab === "Tags" ? "light" : "secondary"}>
                  {tags.length}
                </Badge>
              </Button>
            </Navbar>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="Sets">
                <Scrollbar
                  style={{
                    height: "45rem"
                  }}
                >
                  {sets.map(item => (
                    <OptionCard
                      content={item}
                      clickHandler={handleOptionClick}
                      activeOption={activeOption}
                      type="Sets"
                    />
                  ))}
                </Scrollbar>
              </TabPane>
              <TabPane tabId="Types">
                <Scrollbar
                  style={{
                    height: "45rem"
                  }}
                >
                  {types.map(item => (
                    <OptionCard
                      content={item}
                      clickHandler={handleOptionClick}
                      activeOption={activeOption}
                      type="Types"
                    />
                  ))}
                </Scrollbar>
              </TabPane>
              <TabPane tabId="Tags">
                <Scrollbar
                  style={{
                    height: "45rem"
                  }}
                >
                  {tags.map(item => (
                    <OptionCard
                      content={item}
                      clickHandler={handleOptionClick}
                      activeOption={activeOption}
                      type="Tags"
                    />
                  ))}
                </Scrollbar>
              </TabPane>
            </TabContent>
          </Col>
          <Col xs="8">
            <Navbar color="light" light expand="md">
              <NavbarBrand href="">
                {activeOption.emoji} {activeOption.name}
              </NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href={activeOption.url}>API Call</NavLink>
                </NavItem>
              </Nav>
            </Navbar>
            <Scrollbar
              style={{
                height: "45rem"
              }}
            >
              {activeOption.faqs.map(faq => (
                <FAQCard faq={faq} />
              ))}
            </Scrollbar>
          </Col>
        </Row>
      </Container>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
