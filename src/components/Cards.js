import React from "react";
import { Card, CardTitle, CardText, CardColumns, CardBody } from "reactstrap";

const Tags = props => (
  <CardColumns style={{ margin: "auto", width: "60%" }}>
    {props.list.map(item => (
      <Card>
        <CardBody>
          <CardTitle>
            <h3>
              {item.emoji} {item.name}
            </h3>
          </CardTitle>
          <CardText>{item.desc}</CardText>
        </CardBody>
      </Card>
    ))}
  </CardColumns>
);

export default Tags;
