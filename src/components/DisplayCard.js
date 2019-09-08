import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import Gist from "react-gist";

import tagsData from "../data/tags";

import "../styles.css";

export default function SetCard({ content }) {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>
            <b>{content.question}</b>
          </CardTitle>
          {content.type === "Code" ? (
            <Gist id={content.answer.slice(-32)} />
          ) : (
              <CardText>{content.answer}</CardText>
            )}

          <CardText>{content.tags.map((tag) => <a href={`https://8snib.sse.codesandbox.io/tag/${tag}`} style={{ color: "black" }}>{tag}{" "}</a>)}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
