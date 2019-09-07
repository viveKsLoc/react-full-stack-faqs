import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import "../styles.css";
export default function NavBar({ title, selected, clickHanlder }) {
  return (
    <div  onClick={() => clickHanlder({title})} className="element">
      <Navbar 
        color="light"
        light
        expand="md"
      >
        <NavbarBrand>{title} </NavbarBrand>
        <Nav className="ml-auto element" navbar >
          {selected ? (
            <FontAwesomeIcon icon={faCaretDown} />
          ) : (
            <FontAwesomeIcon icon={faCaretUp} />
          )}
        </Nav>
      </Navbar>
    </div>
  );
}
