import { Navbar, NavbarBrand, NavItem, Collapse, NavbarToggler, Card, CardImg, CardBody, Nav } from "reactstrap";
import aladdin from "../images/aladdin.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import UserLoginForm from "../user/LoginForm";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <Navbar sticky="top" expand="md" style={{ backgroundColor: "burlywood" }}>
        <NavbarBrand href="/">
          <img src={aladdin} style={{ height: 40 }} /> Puppy Love
        </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse navbar isOpen={menuOpen}>
          <Nav className="ms-auto" navbar>
            <UserLoginForm />
            <NavLink to="/" className="nav-link">
              About The Developer
            </NavLink>
            <NavLink to="/" className="nav-link">
              FAQ
            </NavLink>
            <NavLink to='/' className='nav-link'>Resources</NavLink>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default HomePage;
