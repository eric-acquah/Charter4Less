import React from 'react';
import './AboutUs.css';
import { Container, Row, Col, Button, ThemeProvider } from 'react-bootstrap';

function AboutUsHeader({ text }) {
    return <h3 className="aboutus-heading">{text}</h3>
}

export default function AboutUs() {
    return (
        <div>
            <div className="aboutus-users">
                <Container className="aboutus-users-container">
                    <Row>
                        <Col>
                            <ThemeProvider prefixes={{ btn: 'my-btn' }}>
                                <Button variant="primary">For Renters</Button>
                            </ThemeProvider>
                            <Button bsPrefix="super-btn" variant="primary">
                                For Owners
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="aboutus">
                <Container className="aboutus-container">
                    <Row>
                        <Col>
                            <AboutUsHeader text="Step 1" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                                maximus placerat laoreet. Nunc pretium et magna eu interdum. Duis
                                risus odio, malesuada vel ullamcorper non, luctus at nisl. Morbi
                                facilisis fermentum risus. Fusce fermentum erat.
                            </p>
                        </Col>
                        <Col>
                            <AboutUsHeader text="Step 2" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                                maximus placerat laoreet. Nunc pretium et magna eu interdum. Duis
                                risus odio, malesuada vel ullamcorper non, luctus at nisl.
                            </p>
                        </Col>
                        <Col>
                            <AboutUsHeader text="Step 3" />
                            <p>
                                malesuada vel ullamcorper non, luctus at nisl. Morbi facilisis
                                fermentum risus. Fusce fermentum erat elementum, auctor ligula a,
                                cursus diam. Nullam volutpat mi velit. Proin ut euismod orci.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Button className="button" style={{ position: 'fixed', bottom: '10px' }}>
                    Button
                </Button>
            </div>
        </div>
    );
}
