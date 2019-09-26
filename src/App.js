import React, {useState} from "react";
import Scrollbar from "react-scrollbars-custom";
import { Container, Row, Col, TabContent, TabPane } from "reactstrap";

import OptionCard from "./components/OptionCard";
import DisplayCard from "./components/DisplayCard";
import DisplayBar from "./components/DisplayBar";
import OptionBar from "./components/OptionBar";
import TopBar from "./components/TopBar";
import setsData from "./data/setsData";
import tagsData from "./data/tagsData";
import typesData from "./data/typesData";

const App = () => {
    const [activeTab, setActiveTab] = useState("Sets");
    const [activeOption, setActiveOption] = useState(setsData[2]);
    const options = [{name: "Sets", data: setsData}, {name: "Types", data: typesData}, {name:"Tags",data:tagsData}]
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
                  {options.map(option => 
                    <TabPane tabId={option.name}>
                        <br></br>
                        <Scrollbar style={{height: "45rem"}}>
                            <div>
                                {option.data.map(item => 
                                    <OptionCard
                                     key={item.id}
                                     content={item}
                                     clickHandler={handleOptionClick}
                                     activeOption={activeOption}
                                     activeTab={activeTab}
                                     type={option.name}
                                   />
                                )}
                            </div>
                        </Scrollbar>
                    </TabPane>
                    )}
              </TabContent>
            </Col>
            <Col xs="8">
              <DisplayBar activeOption={activeOption}/>
              <Scrollbar
                style={{
                  height: "50rem"
                }}
              >
                {activeOption.faqs.map(item => (
                  <DisplayCard content={item} key={item.id} />
                ))}
              </Scrollbar>
            </Col>
          </Row>
        </Container>
      </>
    );
  }


  export default App;