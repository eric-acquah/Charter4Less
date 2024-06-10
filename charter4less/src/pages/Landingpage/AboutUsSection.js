import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './AboutUsSection.css';

import aboutUsImg1 from '../../assets/images/about-us-img-1.png';



export default function AboutUsSection() {
  return (
    <section className="about-us-section">
      <Container className="about-us-container-1">
        <Row className="about-us-row1">
          <Col>
            <h2 className="about-us-title">About Us</h2>
          </Col>
          <Col>
            <p className="about-us-text">
            At <strong>Charter4Less</strong>, our mission is to bring our community closer by offering a platform where you can easily share the items you own to earn extra income <span className="cut-out">or find exactly what you need for that special occasion. Whether you want to lend or borrow, we make the process seamless and straightforward.</span>
              {/* Lorem ipsum dolor sit amet, consectetur  Donec nec interdum tellus. adipiscing elit. Cras fringilla enim in tellus porttitor, vehicula venenatis justo posuere. Cras dictum aliquet est in tincidunt. <span className="cut-out">Suspendisse pharetra diam nisl, ut venenatis elit molestie ut. Nulla non venenatis risus, vitae lobortis lectus. Quisque ultricies ex et convallis luctus. Cras pulvinar efficitur lectus, nec sollicitudin libero malesuada non. Donec sollicitudin.</span> */}
            </p>
          </Col>
          <Col className="about-us-row2">
            <p className="about-us-text-1">
            {/* If you care about the environment, you'll love being part of our community. By sharing items, we collectively reduce the production of unnecessary goods, helping to minimize waste and protect our planet. Imagine if just 20% of items were shared among us—together, we can make a significant impact in reducing society's waste. */}
            Joining our platform helps reduce waste and protect the environment by minimizing the need for new products, contributing to a healthier planet through community sharing.
            </p>
            <Link to="/aboutus">
              <Button className="about-us-btn" variant="primary" size="lg">
                Learn More
              </Button>
            </Link>
          </Col>
        </Row>
        <Row className="about-us-row3">
          <Col>
            <img className="about-us-img" src={aboutUsImg1} style={{width: "20rem"}} alt="About Us" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}