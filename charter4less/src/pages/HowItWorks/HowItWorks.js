import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './HowItWorks.css';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';

function HowItWorksHeader({ text }) {
    return <h3 className="howitworks-heading">{text}</h3>
}

export default function HowItWorks() {
    const [activeTab, setActiveTab] = useState('owners');

    return (
        <section className='how-it-works-section'>
            <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
                <Nav.Item>
                    <Nav.Link className='nav-link-btn' eventKey="owners">For Owners</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='nav-link-btn' eventKey="renters">For Renters</Nav.Link>
                </Nav.Item>
            </Nav>
            <div className="howitworks">
                <Container className="howitworks-container">
                    {activeTab === 'owners' && (
                        <Row>
                            <Col>
                                <HowItWorksHeader text="Step 1" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                                    maximus placerat laoreet. Nunc pretium et magna eu interdum. Duis
                                    risus odio, malesuada vel ullamcorper non, luctus at nisl. Morbi
                                    facilisis fermentum risus. Fusce fermentum erat.
                                </p>
                            </Col>
                            <Col>
                                <HowItWorksHeader text="Step 2" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                                    maximus placerat laoreet. Nunc pretium et magna eu interdum. Duis
                                    risus odio, malesuada vel ullamcorper non, luctus at nisl.
                                </p>
                            </Col>
                            <Col>
                                <HowItWorksHeader text="Step 3" />
                                <p>
                                    malesuada vel ullamcorper non, luctus at nisl. Morbi facilisis
                                    fermentum risus. Fusce fermentum erat elementum, auctor ligula a,
                                    cursus diam. Nullam volutpat mi velit. Proin ut euismod orci.
                                </p>
                            </Col>
                        </Row>
                    )}
                    {activeTab === 'renters' && (
                        <Row>
                            <Col>
                                <HowItWorksHeader text="Step 1" />
                                <p>
                                    Aliquam erat volutpat. Integer sit amet volutpat tortor. Nullam
                                    at elit ac justo cursus consequat. Vestibulum ante ipsum primis
                                    in faucibus orci luctus et ultrices posuere cubilia curae.
                                </p>
                            </Col>
                            <Col>
                                <HowItWorksHeader text="Step 2" />
                                <p>
                                    Curabitur eget leo at velit imperdiet varius. In eu ipsum
                                    vitae velit congue iaculis vitae at risus. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit.
                                </p>
                            </Col>
                            <Col>
                                <HowItWorksHeader text="Step 3" />
                                <p>
                                    Donec tincidunt nunc a nisi tincidunt, a lobortis libero
                                    vestibulum. Proin vel augue nec risus convallis vestibulum.
                                    Nulla facilisi.
                                </p>
                            </Col>
                        </Row>
                    )}
                    <Link to={activeTab === 'owners' ? '/list-item' : '/categories'}>
                        <Button className="how-it-works-btn button" >
                        {activeTab === 'owners' ? 'List Item' : 'Rent Item'}
                        </Button>
                    </Link>
                </Container>
            </div>
        </section>
    );
}
