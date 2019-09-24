import React, {useState} from "react";
import Scrollbar from "react-scrollbars-custom";
import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
} from "reactstrap";

import OptionCard from "./components/OptionCard";
import DisplayCard from "./components/DisplayCard";
import DisplayBar from "./components/DisplayBar";
import OptionBar from "./components/OptionBar";
import TopBar from "./components/TopBar";
import sets from "./data/setsData";
import tags from "./data/tagsData";
import types from "./data/typesData";

const App = () => {
    const [activeTab, setActiveTab] = useState("Sets");
    const [activeOption, setActiveOption] = useState(sets[0]);
  
    function handleOptionClick(content) {
      setActiveOption(content);
    }
    return (
      <>
        <TopBar />
        <Container
          style={{ background: "white", padding: "0", marginTop: "1em" }}
          className="rounded"
        >
          <Row>
            <Col xs="4">
              <OptionBar activeTab={activeTab} setActiveTab={setActiveTab} />
              <TabContent activeTab={activeTab}>
                <TabPane tabId="Sets">
                  <Scrollbar
                    style={{
                      height: "45rem"
                    }}
                  >
                    {!!sets && sets.map(item => (
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
                    {types && types.map(item => (
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
              <DisplayBar activeOption={activeOption}/>
              <Scrollbar
                style={{
                  height: "45rem"
                }}
              >
                {activeOption.faqs.map(item => (
                  <DisplayCard content={item} />
                ))}
              </Scrollbar>
            </Col>
          </Row>
        </Container>
      </>
    );
  }


  export default App;