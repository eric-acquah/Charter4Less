import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './CountDisplaySection.css'


export default function CountDisplaySection({ totalCount = [0, 0] }) {

  return (
    <Container className='count-container'>
      <Row className='count-row'>
        <Col className='count-ppl'>
          <h3>{totalCount[0]}</h3>
          <p>People</p>
        </Col>
        <Col className='count-items'>
        <h3>{totalCount[1]}</h3>
          <p>items</p>
        </Col>
      </Row>
    </Container>
  )
}