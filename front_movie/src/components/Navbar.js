import React from "react";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import { Link } from 'react-router-dom'
 
const Navbarstyle = {
  display: "flex",
}
const AppNavbar = props => {
  return (
    <Navbar style={{Navbarstyle}}color="secondary" dark expand="md" style={{marginTop: 22}}>
      <NavbarBrand  style={{ margin: "auto"}} href="/">Bucket List</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink style={{ margin: "auto"}} tag={Link} to="/home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ margin: "auto"}} tag={Link} to="/bucket-list">Bucket list</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ margin: "auto"}} tag={Link} to="/login">Sign in</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
 
export default AppNavbar;