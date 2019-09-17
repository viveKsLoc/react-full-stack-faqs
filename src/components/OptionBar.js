import React from "react";
import { Navbar, Button, Badge } from "reactstrap";
import sets from "../data/sets";
import tags from "../data/tags";
import types from "../data/types";

export default function OptionBar({activeTab, setActiveTab}) {
  const styles = {
    buttonStyle : {
      color: activeTab === "Sets" ? "white" : "black", 
      textDecoration: "none"
    },
    buttonColorStyle : activeTab === "Sets" ? "secondary" : "link"
  }
  return (
    <Navbar color="light" light expand="md">
      <Button
        style={{
          color: activeTab === "Sets" ? "white" : "black",
          textDecoration: "none"
        }}
        color={activeTab === "Sets" ? "secondary" : "link"}
        onClick={() => setActiveTab("Sets")}
      >
        Sets{" "}
        <Badge color={activeTab === "Sets" ? "light" : "secondary"}>
          {sets.length}
        </Badge>
      </Button>{" "}
      <Button disabled
        style={{
          color: activeTab === "Types" ? "white" : "black",
          textDecoration: "none"
        }}
        color={activeTab === "Types" ? "secondary" : "link"}
        onClick={() => setActiveTab("Types")}
      >
        Types{" "}
        <Badge color={activeTab === "Types" ? "light" : "secondary"}>
          {types.length}
        </Badge>
      </Button>{" "}
      <Button disabled
        style={{
          color: activeTab === "Tags" ? "white" : "black",
          textDecoration: "none"
        }}
        color={activeTab === "Tags" ? "secondary" : "link"}
        onClick={() => setActiveTab("Tags")}
      >
        Tags{" "}
        <Badge color={activeTab === "Tags" ? "light" : "secondary"}>
          {tags.length}
        </Badge>
      </Button>
    </Navbar>
  );
}
