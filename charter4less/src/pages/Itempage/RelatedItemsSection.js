import React from "react";
import { Col, Row, Button, Container } from "react-bootstrap";
import ItemCardComponent from "../../components/ItemCardComponent";
import "./RelatedItemsSection.css";

import ImgPlaceholder from "../../assets/images/explore-image.jpeg";
import ImgPlaceholder1 from "../../assets/images/thumbnail-1.jpg";


const cardData = [
  {ownerFirstName: "Kwame", ownerRating: 14, type: "tools", title: "Something X900 Pro-Max | Dark Gray", location: "Kumasi", price: 20, imgList: [ImgPlaceholder, ImgPlaceholder1]},
  {ownerFirstName: "Kofi", ownerRating: 12, type: "tools", title: "Otherthing 200 Pro-Max", location: "Kumasi", price: 10, imgList: [ImgPlaceholder]},
  {ownerFirstName: "Adjoa", ownerRating: 8, type: "tools", title: "Thing", location: "Accra", price: 15, imgList: [ImgPlaceholder1]},
]

export default function RelatedItemsSection() {
  return (
    <Container className="related-items-container">
      <Row className="related-items-row1">
        <Col className="related-items-col1">
          <h2>Related Items</h2>
        </Col>
      </Row>
      <Row className="related-items-row2">
        <Col className="related-items-col2">
          <ItemCardComponent cardData={cardData} />
        </Col>
      </Row>
    </Container>
  );
}