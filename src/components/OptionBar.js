import React from "react";
import { Navbar, Button, Badge } from "reactstrap";
import sets from "../data/sets";
import tags from "../data/tags";
import types from "../data/types";


export default function OptionBar({ activeTab, setActiveTab }) {
  const styles = {
    getButton: (option) => {
      return {
        color: activeTab === option ? "white" : "black",
        textDecoration: "none"
      }
    },
    getButtonColor: (option) => {
      return activeTab === option ? "secondary" : "link"
    },
    getBadgeColor: (option) => {
      return activeTab === option ? "light" : "secondary"
    }
  }
  return (
    <Navbar color="light" light expand="md">
      <Button
        style={styles.getButton("Sets")}
        color={styles.getButtonColor("Sets")}
        onClick={() => setActiveTab("Sets")}
      >
        Sets{" "}
        <Badge color={styles.getBadgeColor("Sets")}>
          {sets.length}
        </Badge>
      </Button>{" "}
      <Button
        style={styles.getButton("Types")}
        color={styles.getButtonColor("Types")}
        onClick={() => setActiveTab("Types")}
      >
        Types{" "}
        <Badge color={styles.getBadgeColor("Types")}>
          {types.length}
        </Badge>
      </Button>{" "}
      <Button
        style={styles.getButton("Tags")}
        color={styles.getButtonColor("Tags")}
        onClick={() => setActiveTab("Tags")}
      >
        Tags{" "}
        <Badge color={styles.getBadgeColor("Tags")}>
          {tags.length}
        </Badge>
      </Button>
    </Navbar>
  );
}
