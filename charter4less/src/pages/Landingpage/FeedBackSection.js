import React from "react";
import { Container, Row, Col, Form, Button, Carousel } from "react-bootstrap";
import thumnail1 from "../../assets/images/thumbnail-1.jpg";
import thumnail2 from "../../assets/images/thumbnail-2.jpg";
import thumnail3 from "../../assets/images/thumbnail-3.jpeg";
import thumnail4 from "../../assets/images/thumbnail-4.jpg";

import "./FeedBackSection.css";



export default function FeedBackSection() {
  return (
    <section className="feedback-section">
      <Container className="feedback-container">
        <Row className="thumbnail-section">
          <Carousel>
            <Carousel.Item>
              <img src={thumnail1} style={{width: "32rem", height: "25rem"}} alt="thumbnail" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={thumnail2} style={{width: "32rem", height: "25rem"}} alt="thumbnail" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={thumnail3} style={{width: "32rem", height: "25rem"}} alt="thumbnail" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={thumnail4} style={{width: "32rem", height: "25rem"}} alt="thumbnail" />
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row className="form-container">
        <Col>
            <h2 className="feedback-heading">Feedback</h2>
          </Col>
          <Col className="form-col">
            <Form className="feedback-form">
              <Form.Group className="mb-3" controlId="id1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="id2">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="id3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
              </Form.Group>
               <div className="form-footer" >
               <small>Kindly share your takes of this platform with us.</small>
                <Button className="form-btn" variant="primary" type="submit">Submit</Button>
               </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}