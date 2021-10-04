import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function Navigation(props) {
  return (
    <div className="navigation">
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
        <Container>
          <Nav.Item as="h4">
            <Navbar.Brand href="/">Nathaniel Turcotte</Navbar.Brand>
          </Nav.Item>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav defaultActiveKey="#about" as="ul">
              <Nav.Item as="li">
                <Nav.Link href="#about">About Me</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#resume">Resume</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
