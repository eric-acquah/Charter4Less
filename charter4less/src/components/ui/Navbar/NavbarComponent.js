import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import logo from "../../../assets/images/logo-1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import "./NavbarComponent.css";
import NavDropDown from "../../NavDropDown";

export default function NavbarComponent() {
  return (
    <Navbar
      fixed="top"
      expand="lg"
      className="navbar d-flex justify-content-between"
    >
      <Link to="/">
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
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* <NavDropDown /> */}
      <Row>
        <Navbar.Collapse id="basic-navbar-nav">
          <Row>
            <Col xs md="auto">
              <NavDropDown />
            </Col>
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
                    <FontAwesomeIcon className="icon" name="search" style={{height: "1rem", cursor: "pointer"}} icon={faSearch} />
                  </InputGroup.Text>
                </InputGroup>
              </Form>
            </Col>
            <Col
              style={{ marginRight: "1rem" }}
              xs
              md="auto"
              className="d-flex align-items-center"
            >
              <Nav className="mr-auto" style={{ marginRight: "1rem" }}>
                <Link className="navlink" to="/howitworks">How It Works</Link>
              </Nav>
              <Link to='/login'>
                <Button
                  style={{ marginRight: "7px" }}
                  className="btn-action"
                  variant="outline-primary"
                >
                  Log In
                </Button>
              </Link>
             <Link to='/signup'>
                <Button className="btn-action" variant="primary">
                  Sign Up
                </Button>
             </Link>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Row>
    </Navbar>
  );
}
