import React from "react";
import {
  Card,
  CardTitle,
  Container,
  Row,
  Col,
  CardBody,
  CardText,
  Button
} from "reactstrap";

function SetsCards({ content }) {
  return (
    <>
      <Container
        fluid
        centered
        className="mx-auto"
        style={{ width: "90%", padding: "1em", borderRadius: "10px" }}
      >
        <Row>
          <Button
            style={{
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "20px"
            }}
          >
            <h3>
              Sets{"   "}({content.length})
            </h3>
          </Button>
          {content.map(item => (
            <Col xs="2" className="mx-auto">
              <Card
                style={{
                  height: "200px",
                  margin: "5px"
                }}
              >
                <CardBody>
                  <CardTitle style={{ textAlign: "center" }}>
                    <h3>{item.emoji} </h3>
                    <h6>{item.name}</h6>
                    <CardText>{item.desc}</CardText>
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default SetsCards;
