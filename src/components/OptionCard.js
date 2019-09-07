import React from "react";
import { Card, CardBody, CardTitle, CardText, Badge } from 'reactstrap';

export default function OptionCard({content, clickHandler, activeOption, type}) {
  return (
    <Card onClick={() => clickHandler(content)} className="element"
    style = {{ background: activeOption.name === content.name ? "lightgray": "white"}}>
    <CardBody>
      <CardTitle>{content.emoji} <Badge color={activeOption.name === content.name ? "light": "secondary"}>{content.faqs &&  content.faqs.length}
        {content.total &&  content.total} </Badge>{" "}<b>{content.name}</b>        </CardTitle>
      {type !=="Tags" && <CardText><small>{content.desc}</small></CardText>}
    </CardBody>
  </Card>
    )
}