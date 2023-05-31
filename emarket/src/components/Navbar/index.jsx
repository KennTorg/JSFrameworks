import React from "react";
import { Nav, Ul, Li, NavLink } from "./Navbar.styles";

function Navbar() {
  return (
    <Nav>
      <Ul>
        <Li>
          <NavLink to='/'>Home</NavLink>
        </Li>
        <Li>
          <NavLink to='/contact'>Contact</NavLink>
        </Li>
      </Ul>
    </Nav>
  );
}

export default Navbar;
