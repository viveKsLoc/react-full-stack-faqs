import React from "react";
import { Navbar, Button, Badge } from "reactstrap";
import setsData from "../data/setsData";
import tagsData from "../data/tagsData";
import typesData from "../data/typesData";

export default function OptionBar({ activeTab, setActiveTab }) {
  const options = [{name: "Sets", data: setsData},{name: "Types", data: typesData}, {name: "Tags", data:tagsData}]
  return (
    <Navbar color="light" light expand="md">
      {options.map(option =>
        <Button
          style={{
            color: activeTab === option.name ? "white" : "black",
            textDecoration: "none"
          }}
          color= {activeTab === option.name ? "dark" : "link"}
          onClick= {() => setActiveTab(option.name)}
        >
          <Badge
            color={activeTab === option.name ? "light" : "dark"}
            className="m-1"
          >
            {option.data.length}
          </Badge>
          {option.name}
        </Button>)}
    </Navbar>
  );
}
