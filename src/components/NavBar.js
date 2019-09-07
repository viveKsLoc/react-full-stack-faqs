import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload, faUser, faServer } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">Full-Stack FAQs</NavbarBrand>
      <Nav className="ml-auto" navbar >
        <NavItem >
          <NavLink style={{color: "white"}}  href="https://raw.githubusercontent.com/masautt/full-stack-faqs-back-end/master/src/data/faqs.js">
            Faqs.json  <FontAwesomeIcon icon={faFileDownload} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color: "white"}}  href="https://codesandbox.io/s/full-stack-faqs-back-end-8snib">
            Backend  <FontAwesomeIcon icon={faServer} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color: "white"}} href="https://github.com/masautt">
            @masautt  <FontAwesomeIcon icon={faUser} />
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
