import React from "react";
import { Navbar, Nav, NavbarBrand, NavItem, NavLink } from "reactstrap";

export default function DisplayBar({ activeOption }) {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="">
        {activeOption.emoji} {activeOption.name}
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href={activeOption.url}>API Call</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
