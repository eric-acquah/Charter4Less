import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import Header from '../../components/ui/Header/Header';
import Footer from '../../components/ui/Footer/FooterComponent';

import pageNotFound from '../../assets/images/page-not-found.jpg';

import './Errorpage.css';

export default function Errorpage() {
    return (
        <div>
            <Header />
            <div className="error-page">
            <Container>
                <Row className="error-page-row">
                    <Col className="error-msg">
                        {/* <h1>404 Page Not Found</h1> */}
                      <img className="error-img" src={pageNotFound} alt="404 img"/>
                    </Col>
                </Row>
            </Container>
            </div>
            <Footer />
        </div>
    );
}