import React from "react";
import { Navbar } from "react-bootstrap";

export const Footer = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      fixed="bottom"
      className="justify-content-center"
    >
      <Navbar.Text>News App @2020</Navbar.Text>
    </Navbar>
  );
};
