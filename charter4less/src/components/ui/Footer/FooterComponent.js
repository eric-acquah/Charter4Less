import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
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
            At Charter4Less, our mission is to bring the community closer by offering a platform where you can easily share the items you own to earn extra income or find exactly what you need for that special occasion. Join us in our mission to create a sustainable, connected community. <Link to="/aboutus">[Learn More]</Link>
            <img src={logo} alt="logo" className="footer-logo" />
          </Col>
          <Col>
            <FooterHeader text="Contact Info" />
            <ul className="footer-contact-info">
              <li>Email: @charter4less.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 29 OBONU ST GA-566-8938 Accra-Ghana.</li>
              <li>Follow Us: Facebook, Twitter, Instagram, LinkedIn</li>
            </ul>
          </Col>
          <Col>
            <FooterHeader text="Address" />
            29 OBONU ST Dansoman Control Accra, Ghana
          </Col>
          <Col>
            <FooterHeader text="Newsletter" />
            Stay updated with the latest offers and news. Subscribe to our newsletter!
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
