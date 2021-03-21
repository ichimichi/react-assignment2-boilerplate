import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router";

const Header = ({ history }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#">News App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link
          onClick={() => {
            history.push("/dashboard");
          }}
        >
          Home
        </Nav.Link>
        <Nav.Link
          onClick={() => {
            history.push("/readlater");
          }}
        >
          Read Later
        </Nav.Link>
        {!isLoggedIn && (
          <Nav.Link
            onClick={() => {
              history.push("/login");
            }}
          >
            Login
          </Nav.Link>
        )}

        {isLoggedIn && (
          <Nav.Link
            onClick={() => {
              setIsLoggedIn(false);
              localStorage.removeItem("username");
              localStorage.removeItem("token");
              history.push("/login");
            }}
          >
            Logout
          </Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
};

export default withRouter(Header);
