import React from "react";
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

export default function OptionCard({set, clickHandler}) {
  return (
    <Card onClick={() => clickHandler(set.faqs)} className="element">
    <CardBody>
      <CardTitle>{set.emoji} <b>{set.name}</b></CardTitle>
      <CardText>{set.desc}</CardText>
      <CardText>
        <small className="text-muted">{set.faqs.length} FAQs</small>
      </CardText>
    </CardBody>
  </Card>
    )
}