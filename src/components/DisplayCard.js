import React from "react";
import { Card, CardBody, CardTitle, CardText, Tooltip } from "reactstrap";
import Gist from "react-gist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faYoutube, faQuora, faStackOverflow, faFreeCodeCamp, faGithub, faFirefox, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import tagsData from "../data/tagsData";

import "../styles.css";

export default function SetCard({ content }) {
  return (
    <div style={{marginTop: "2rem", marginRight: "0.5rem",  marginLeft: "0.5rem"}}>
      <Card className="shadow-lg p-3 mb-5 bg-white rounded">
        <CardBody>
          <CardTitle>
            <h5>#{content.number} <a
              // href={`https://8snib.sse.codesandbox.io/faq/${content.id}`}
              style={{ color: "black" }}
            >
              <b>{content.question}</b>
            </a></h5>
          </CardTitle>
          {content.type === "code" ? (
            <Gist id={content.answer.slice(-32)} />
          ) : (
              <CardText>{content.answer}</CardText>
            )}

          <CardText>
            {content.tags.map(tag => (
              <a
                // href={`https://8snib.sse.codesandbox.io/tag/${tag}`}
                style={{ color: "black" }}
              >
                <b>
                  {tagsData.find(tagData => tagData.id === tag) === undefined
                    ? ""
                    : tagsData.find(tagData => tagData.id === tag).emoji}{" "}
                  {tag}{" "}
                </b>
              </a>
            ))}
            <hr></hr>
            {content.sources.map(source => (
              <div>
                {source.site === "youtube" && <FontAwesomeIcon icon={faYoutube} size="lg" />}
                {source.site === "quora" && <FontAwesomeIcon icon={faQuora} size="lg" />}
                {source.site === "stack-overflow" && <FontAwesomeIcon icon={faStackOverflow} size="lg" />}
                {source.site === "free-code-camp" && <FontAwesomeIcon icon={faFreeCodeCamp} size="lg" />}
                {source.site === "globe" && <FontAwesomeIcon icon={faGlobe} size="lg" />}
                {source.site === "firefox" && <FontAwesomeIcon icon={faFirefox} size="lg" />}
                {source.site === "github" && <FontAwesomeIcon icon={faGithub} size="lg" />}
                {source.site === "medium" && <FontAwesomeIcon icon={faMedium} size="lg" />}
                <a href={source.url} class="text-dark m-1" target="_blank">
                  {" "}
                  {source.name}
                </a>
              </div>
            ))}
          </CardText>

        </CardBody>
      </Card>
    </div>
  );
}
