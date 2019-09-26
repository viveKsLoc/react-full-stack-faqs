import React from "react";
import { Card, CardBody, CardTitle, CardText, Badge } from "reactstrap";
import Gist from "react-gist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faQuora, faStackOverflow, faFreeCodeCamp, faGithub, faFirefox, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

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
            : <CardText>{content.answer}</CardText> }

          <CardText>
            {content.tags.map(tag =>  <Badge color="dark" key={tag.id}  className="m-1">{tag}</Badge>)}

            <hr></hr>
            {content.sources.map(source => (
              <div className="m-2" key={source.name}>
                <Badge color="dark">
                  {source.site === "youtube" && <FontAwesomeIcon icon={faYoutube} size="lg" />}
                  {source.site === "quora" && <FontAwesomeIcon icon={faQuora} size="lg" />}
                  {source.site === "stack-overflow" && <FontAwesomeIcon icon={faStackOverflow} size="lg" />}
                  {source.site === "free-code-camp" && <FontAwesomeIcon icon={faFreeCodeCamp} size="lg" />}
                  {source.site === "globe" && <FontAwesomeIcon icon={faGlobe} size="lg" />}
                  {source.site === "firefox" && <FontAwesomeIcon icon={faFirefox} size="lg" />}
                  {source.site === "github" && <FontAwesomeIcon icon={faGithub} size="lg" />}
                  {source.site === "medium" && <FontAwesomeIcon icon={faMedium} size="lg" />}
                </Badge>
                <a href={source.link} class="text-dark m-1" target="_blank" rel="noopener noreferrer"> {" "}
                  {source.name}
                </a>
              </div>))}
          </CardText>
        </CardBody>
      </Card>
  );
}
