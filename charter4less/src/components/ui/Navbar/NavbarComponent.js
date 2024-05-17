import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../../assets/images/logo-1.png";
import search from "../../../assets/images/search-icon.png";
import "./NavbarComponent.css";

export default function NavbarComponent() {
  return (
    <Navbar fixed="top"  expand="lg" className="navbar d-flex justify-content-between">
      <Navbar.Brand href="#home">
        <img
          style={{
            marginLeft: "1rem",
            marginBottom: "0.5rem",
            objectFit: "contain",
            width: "40%",
          }}
          src={logo}
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Row >
        <Navbar.Collapse id="basic-navbar-nav">
          <Row>
            <Col xs md="auto">
              <Form>
                <InputGroup>
                  <FormControl
                    style={{
                      display: "flex",
                      flex: "2 1 auto",
                    }}
                    placeholder="Search..."
                    aria-label="Search..."
                    aria-describedby="basic-addon1"
                  />
                  <InputGroup.Text>
                    <img
                      src={search}
                      alt="search-icon"
                      style={{cursor: "pointer"}}
                      width="20px"
                    />
                  </InputGroup.Text>
                </InputGroup>
              </Form>
            </Col>
            <Col style={{marginRight: "1rem"}} xs md="auto" className="d-flex align-items-center">
              <Nav className="mr-auto" style={{marginRight: "1rem"}}>
                <Nav.Link className="navlink" href="#home">How it works</Nav.Link>
              </Nav>
              <Button style={{marginRight: "7px"}} className="btn-action" variant="outline-primary">
                Log In
              </Button>
              <Button className="btn-action" variant="primary">Sign Up</Button>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Row>
    </Navbar>
  );
}
