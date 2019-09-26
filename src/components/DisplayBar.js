import React from "react";
import { Navbar, Nav, NavbarBrand, NavItem, NavLink } from "reactstrap";

export default function DisplayBar({ activeOption }) {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="">
       {activeOption.name}
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href={activeOption.url}>	&#123; &#125;</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
