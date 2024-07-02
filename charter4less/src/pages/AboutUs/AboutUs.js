import React from "react";
import "./AboutUs.css";
import { Card, Col, Row, Button, Container } from "react-bootstrap";

export default function AboutUs() {
  return (
    <section>
      <Container className="about-us-container">
        {/* Row for Card 1 and Card 2 */}
        <Row>
          <Col md={6} className="card-col-1">
            <Card className="card-custom">
              <Card.Body>
                <Card.Title className="card-title-1">
                  WHAT IS Charter4less?
                </Card.Title>
                <Card.Text>
                  Charter4Less is your local rental hub that connects you with
                  your community, enabling you to borrow and lend items with
                  ease. Whether you need something for a one-time event or want
                  to make extra income by renting out your belongings, our
                  platform simplifies the process. Join us in fostering a
                  sharing economy where everyone benefits!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="card-col-2">
            <Card className="card-custom">
              <Card.Body>
                <Card.Title className="card-title-2">HOW IT WORKS?</Card.Title>
                <Card.Text>
                  Getting started with Charter4Less is simple. For owners, list
                  the items you want to rent out by creating a detailed
                  description and uploading photos. For renters, browse the
                  available items, send a rental request, and arrange a pick-up
                  or delivery with the owner. It’s that easy to save money, earn
                  extra income, and connect with your community!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Row for Card 3 */}
        <Row className="justify-content-md-center">
          <Col md={4} className="card-col-3">
            <Card className="card-custom">
              <Card.Body>
                <Card.Title className="card-title-3">MADE FOR WHO?</Card.Title>
                <Card.Text>
                  Charter4Less is made for everyone in the community!
                  Homeowners, event planners, DIY enthusiasts, and anyone
                  looking to save money or make extra income can benefit from
                  our platform. By sharing resources, we not only help each
                  other but also contribute to a more sustainable and
                  eco-friendly society.
                </Card.Text>
                <Button className="card-title-3-button">Button</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
