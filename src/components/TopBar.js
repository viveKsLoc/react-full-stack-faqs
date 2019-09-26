import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Badge } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileDownload,
  faUser,
  faServer
} from "@fortawesome/free-solid-svg-icons";
import faqsData from "../data/faqsData";

export default function TopBar() {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="https://github.com/masautt/react-full-stack-faqs">Full-Stack FAQs {" "}<Badge color="light">{faqsData.length}</Badge></NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink
            style={{ color: "white" }}
            href="https://raw.githubusercontent.com/masautt/react-full-stack-faqs/master/src/data/faqsData.js"
          >
            Faqs.json 251 KB <FontAwesomeIcon icon={faFileDownload} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={{ color: "white" }}
            href="https://github.com/masautt/express-full-stack-faqs"
          >
            Backend <FontAwesomeIcon icon={faServer} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ color: "white" }} href="https://github.com/masautt">
            @masautt <FontAwesomeIcon icon={faUser} />
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
