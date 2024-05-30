import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import './HeroSection.css';
import SearchboxComponent from "../../components/SearchboxComponent";
import heroImage from "../../assets/images/hero-image-8.jpg";


export default function HeroSection() {
  return (
    <section className="hero-section">
      <Container className="hero-container">
        <Row className="content-row">
          <Col className="text-col" md={6}>
            <h1>Borrow, Lend, Share: Your Local Rental Hub!</h1>
            <p>Need something? Find it here. Got something? Rent it out. Join your neighbors in making sharing simple and fun!</p>
            <Button className="btn action" variant="primary">Rent Item</Button>
          </Col>
          <Col className="img-col" md={6}>
            <img src={heroImage} alt="Charter Bus" />
          </Col>
        </Row>
        <Row>
          <Container className="searchbox-container">
          <Col xs={6}>
            <SearchboxComponent placeholder="Search for items" btnText="Search" className="serch-box"/>
          </Col>
          </Container>
        </Row>
      </Container>
    </section>
  )
}