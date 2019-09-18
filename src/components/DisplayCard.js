import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import Gist from "react-gist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileDownload,
  faUser,
} from "@fortawesome/free-solid-svg-icons";


import tagsData from "../data/tags";

import "../styles.css";

export default function SetCard({ content }) {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>
            <a
              href={`https://8snib.sse.codesandbox.io/faq/${content.id}`}
              style={{ color: "black" }}
            >
              <b>{content.question}</b>
            </a>
          </CardTitle>
          {content.type === "Code" ? (
            <Gist id={content.answer.slice(-32)} />
          ) : (
            <CardText>{content.answer}</CardText>
          )}

          <CardText>
            {content.tags.map(tag => (
              <a
                href={`https://8snib.sse.codesandbox.io/tag/${tag}`}
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
             {content.sources.map(source => (
               <a href={source.url}>
              {" "}<FontAwesomeIcon icon={faUser} />{" "}
               </a>
             ))}
          </CardText>
         
        </CardBody>
      </Card>
    </div>
  );
}
