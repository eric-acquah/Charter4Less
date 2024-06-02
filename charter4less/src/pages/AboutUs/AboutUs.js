import React from 'react';
import './AboutUs.css';
import { Card, Col, Row, Button, Container } from 'react-bootstrap';

export default function AboutUs() {
    return (
        <section>
            <Container className="about-us-container">
                {/* Row for Card 1 and Card 2 */}
                <Row>
                    <Col md={6} className="card-col-1">
                        <Card className="card-custom">
                            <Card.Body>
                                <Card.Title className='card-title-1'>WHAT IS Charter4less?</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="card-col-2">
                        <Card className="card-custom">
                            <Card.Body>
                                <Card.Title className='card-title-2'>HOW IT WORKS?</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
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
                                <Card.Title className='card-title-3'>MADE FOR WHO?</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button className='card-title-3-button'>Button</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
