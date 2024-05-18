import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./FooterComponent.css";
import logo from "../../../assets/images/logo-1.png";
import getYear from "../../../utils/dates";
import { ReactComponent as Facebook } from "../../../assets/icons/icons8-facebook-1.svg";
import { ReactComponent as Whatsapp } from "../../../assets/icons/icons8-whatsapp.svg";
import { ReactComponent as Twitter } from "../../../assets/icons/icons8-twitterx.svg";
import { ReactComponent as Linkedin } from "../../../assets/icons/icons8-linkedin.svg";

function FooterHeader({ text }) {
  return <h3 className="footer-heading">{text}</h3>;
}

function Copyright() {
  return <p>Copyright &#169;{getYear()} All rights reserved</p>;
}

function SocialMedia() {
  return (
    <div>
      <Facebook className="icons" />
      <Whatsapp className="icons" />
      <Twitter className="icons" />
      <Linkedin className="icons" />
    </div>
  );
}

export default function FooterComponent() {
  return (
    <footer className="footer">
      <Container className="footer-container" fixed="bottom">
        <Row>
          <Col>
            <FooterHeader text="About Us" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            maximus placerat laoreet. Nunc pretium et magna eu interdum. Duis
            risus odio, malesuada vel ullamcorper non, luctus at nisl. Morbi
            facilisis fermentum risus. Fusce fermentum erat
            <img src={logo} alt="logo" className="footer-logo" />
          </Col>
          <Col>
            <FooterHeader text="Contact Info" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            maximus placerat laoreet. Nunc pretium et magna eu interdum. Duis
            risus odio, malesuada vel ullamcorper non, luctus at nisl.
          </Col>
          <Col>
            <FooterHeader text="Address" />
            malesuada vel ullamcorper non, luctus at nisl. Morbi facilisis
            fermentum risus. Fusce fermentum erat elementum, auctor ligula a,
            cursus diam. Nullam volutpat mi velit. Proin ut euismod orci.
          </Col>
          <Col>
            <FooterHeader text="Newsletter" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            maximus placerat laoreet. Nunc pretium et magna eu interdum. Duis
            risus odio, malesuada vel ullamcorper
            <Form className="footer-email">
              <Form.Control placeholder="Email" />
            </Form>
          </Col>
          <hr
            className="hr-rule"
            style={{
              color: "#0C0C0C",
              backgroundColor: "#0C0C0C",
              height: "2px",
            }}
          />
          <Row className="copyright-social">
            <Col>
              <Copyright />
            </Col>
            <Col className="social-icons">
              <SocialMedia />
            </Col>
          </Row>
        </Row>
      </Container>
    </footer>
  );
}
