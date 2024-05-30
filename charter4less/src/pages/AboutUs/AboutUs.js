import React from 'react';
import './AboutUs.css';
import { Card, Col, Row, Button, Container } from 'react-bootstrap';

export default function AboutUs() {
    return (
        <div>
            <Container>
                {/* Row for Card 1 and Card 2 */}
                <Row>
                    <Col md={6} className="card-col-1">
                        <Card className="card-1" style={{ width: '25rem', height: '15rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title 1</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="card-col-2">
                        <Card className="card-2" style={{ width: '25rem', height: '15rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title 2</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* Row for Card 3 */}
                <Row className="justify-content-md-center">
                    <Col md={4} className="card-col-3">
                        <Card className="card-3" style={{ width: '25rem', height: '15rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title 3</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
