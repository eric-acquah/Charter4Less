import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";


export default function HeroSection() {
  return (
    <section className="hero-section">
      <Container>
        <Row>
          <Col md={6}>
            <h1>Charter4Less</h1>
            <p>Book your next charter bus with Charter4Less. We offer the best prices and the best service.</p>
            <Button variant="primary">Book Now</Button>
          </Col>
          <Col md={6}>
            <img src="https://via.placeholder.com/500" alt="Charter Bus" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}