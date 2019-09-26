import React from "react";
import { Navbar, Button, Badge } from "reactstrap";
import setsData from "../data/setsData";
import tagsData from "../data/tagsData";
import typesData from "../data/typesData";

export default function OptionBar({ activeTab, setActiveTab }) {
  const options = ["Sets", "Types", "Tags"]
  return (
    <Navbar color="light" light expand="md">
      {options.map(elem =>
        <Button
          style={{
            color: activeTab === elem ? "white" : "black",
            textDecoration: "none"
          }}
          color= {activeTab === elem ? "dark" : "link"}
          onClick= {() => setActiveTab(elem)}
        >
          <Badge
            color={activeTab === elem ? "light" : "dark"}
            className="m-1"
          >
            {elem === "Sets" && setsData.length}
            {elem === "Tags" && tagsData.length}
            {elem === "Types" && typesData.length}
          </Badge>
          {elem}
        </Button>)}
    </Navbar>
  );
}
