import React from 'react';
import { Row, Col, Breadcrumb, Container } from 'react-bootstrap';
import './Pagetitle.css';

function PageHeader({ text }) {
  return <h1 className="page-heading">{text}</h1>;
}
export default function Pagetitle() {
  return (
    <div className="pagetitle-wrapper">  {/* New class for styling */}
      <Container className="pagetitle-container">  {/* New class for styling */}
        <Row className='pagetitle-row'>
          <Col>
            <PageHeader text="Pagetitle" />
          </Col>
        </Row>
      </Container>
      <Container fluid className="breadcrumb-container">  {/* New class for styling */}
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Tab 1</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Tab 2</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Tab 3</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
