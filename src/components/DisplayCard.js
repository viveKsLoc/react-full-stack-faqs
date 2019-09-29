import React from "react";
import { Card, CardBody, CardTitle, CardText, Badge } from "reactstrap";
import Gist from "react-gist";
import { getIcon } from "../helpers/iconsHelper";
import "../styles.css";

export default function SetCard({ content }) {
  return (
      <Card className="shadow-lg mb-3 bg-white rounded mt-2 mr-2 ml-2">
        <CardBody>
          <CardTitle>
            <h5>#{content.number}{" "}
              <b><i>{content.question}</i></b>
            </h5>
          </CardTitle>
          
          {content.type === "code"
            ? <Gist id={content.answer.slice(-32)} />
            : <CardText>{content.answer}</CardText> 
          }
          <CardText>
            {content.tags.map(tag =>  <Badge color="dark" key={tag.id}  className="m-1">{tag}</Badge>)}
            <hr></hr>
            {content.sources.map(source => (
              <div className="m-2" key={source.name}>
                <Badge color="dark">
                  {getIcon(source.site)}
                </Badge>
                <a href={source.link} class="text-dark m-1" target="_blank" rel="noopener noreferrer">
                  {" "}{source.name}
                </a>
              </div>
            ))}
          </CardText>
        </CardBody>
      </Card>
  );
}
