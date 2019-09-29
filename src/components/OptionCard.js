import React from "react";
import { Badge, Button } from "reactstrap";
import { getFaqsByTag, getFaqsByType } from "../helpers/faqsHelper";
import "../styles.css";

const cleanStr = (str) => str.toLowerCase().replace(/ /g, "-").replace(/\./g, "-")
const compStrs = (str1,str2,attr) => cleanStr(str1[attr]) === cleanStr(str2[attr])
export default function OptionCard({ content, clickHandler, activeOption, activeTab,}) {
  return (
    <Button
      className="element p-1 m-1 border border-3-dark"
      onClick={() => {
        activeTab === "Sets" && clickHandler(content)
        activeTab === "Types" && clickHandler(getFaqsByType(content.name))
        activeTab === "Tags" && clickHandler(getFaqsByTag(content.id)) 
      }}
      style={{
        background: compStrs(activeOption,content,"name") ? "#343a40" : "white",
        color:  compStrs(activeOption,content,"name") ? "white" : "black"
      }}
    >
      <Badge
        color={compStrs(activeOption,content,"name") ? "light" : "dark"}
        className="element m-1"
      >
        {content.faqs && content.faqs.length}
        {content.total && content.total}
      </Badge>
      {content.name}
    </Button>
  );
}
