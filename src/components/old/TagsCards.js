import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  Collapse,
  Button,
  Col,
  Container,
  Row
} from "reactstrap";

function TagsCards({ content }) {
  return (
    <>
      <Button
        style={{ marginLeft: "125px", marginTop: "20px", marginBottom: "20px" }}
      >
        <h3>
          Tags{"   "}({content.length})
        </h3>
      </Button>
      <Container
        fluid
        centered
        className="mx-auto"
        style={{ width: "90%", padding: "1em", borderRadius: "10px" }}
      >
        <Row>
          {content.map((item, index) => (
            <Col xs="1" className="mx-auto">
              <Card
                style={{
                  height: "115px",
                  width: "115px",
                  margin: "5px",
                  borderRadius: "10px"
                }}
              >
                <CardBody>
                  <CardTitle style={{ textAlign: "center" }}>
                    <h3>{item.emoji} </h3>
                    <a style={{ fontSize: "10px" }}>{item.name}</a>
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Collapse />
    </>
  );
}

export default TagsCards;
