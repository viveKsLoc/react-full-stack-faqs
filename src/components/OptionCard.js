import React from "react";
import { Card, CardBody, CardTitle, CardText, Badge } from "reactstrap";
import faqsHelper from "../helpers/faqsHelper";
export default function OptionCard({
  content,
  clickHandler,
  activeOption,
  activeTab,
  type
}) {
  return (
    <Card 
    className="shadow-lg p-3 mb-5 bg-white rounded"
      onClick={() => {
        activeTab === "Sets" && clickHandler(content)
        activeTab === "Types" && clickHandler(faqsHelper.getFaqsByType(content.name))
        activeTab === "Tags" && clickHandler(faqsHelper.getFaqsByTag(content.id))
      }}
      className="element"
      style={{
        marginTop: "1rem",
        background: activeOption.name === content.name ? "lightgray" : "white",
        height: type !== "Tags" ? "auto" : "4em"
      }}
    >
      <CardBody>
        <CardTitle>
          {content.emoji}{" "}
          <Badge
            color={activeOption.name === content.name ? "light" : "secondary"}
          >
            {content.faqs && content.faqs.length}
            {content.total && content.total}
          </Badge>{" "}
          <b>{content.name}</b>
        </CardTitle>
        {type !== "Tags" && (
          <CardText>
            <small>{content.desc}</small>
          </CardText>
        )}
      </CardBody>
    </Card>
  );
}
