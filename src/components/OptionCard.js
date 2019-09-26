import React from "react";
import { Badge, Button } from "reactstrap";
import faqsHelper from "../helpers/faqsHelper";

import "../styles.css";

export default function OptionCard({
  content,
  clickHandler,
  activeOption,
  activeTab,
  type
}) {
  return (
    <Button
      className="element p-1 m-1 border border-3-dark"
      onClick={() => {
        activeTab === "Sets" && clickHandler(content)
        activeTab === "Types" && clickHandler(faqsHelper.getFaqsByType(content.name))
        activeTab === "Tags" && clickHandler(faqsHelper.getFaqsByTag(content.id)) }}
      style={{
        background: activeOption.name === content.name ? "#343a40" : "white",
        color: activeOption.name === content.name ? "white" : "black"
      }}
    >
      <Badge
        color={activeOption.name === content.name ? "light" : "dark"}
        className="element m-1"
      >
        {content.faqs && content.faqs.length}
        {content.total && content.total}
      </Badge>
      {content.name}
    </Button>
  );
}
