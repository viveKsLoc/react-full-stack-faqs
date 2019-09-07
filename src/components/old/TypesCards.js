import React from "react";
import {
  Card,
  CardTitle,
  Col,
  CardBody,
  Container,
  Button,
  Row
} from "reactstrap";

function TypesCards({ content }) {
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
              Types{"   "}({content.length})
            </h3>
          </Button>
          {content.map(item => (
            <Col xs="2" className="mx-auto">
              <Card
                style={{
                  height: "80px",
                  margin: "5px"
                }}
              >
                <CardBody>
                  <CardTitle>
                    <h3 style={{ textAlign: "center" }}>
                      {item.emoji} {item.name}
                    </h3>
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

export default TypesCards;
