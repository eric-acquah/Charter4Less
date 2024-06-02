import React from "react";
import { Col, Row, Button, Container, Carousel, Popover, OverlayTrigger } from "react-bootstrap";
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import ReviewSection from "./ReviewSection";

import "./ItemPageSection.css";
import ImgPlaceholder from "../../assets/images/explore-image.jpeg";
import ImgPlaceholder1 from "../../assets/images/thumbnail-1.jpg";
import RelatedItemsSection from "./RelatedItemsSection";

const reviewData = [
  {reviewerName: "Kweku", reviewerPic: ImgPlaceholder, starCount: 5, date: "10/11/2021", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {reviewerName: "Ama", reviewerPic: ImgPlaceholder, starCount: 5, date: "21/11/2021", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec velit auctor, ultrices odio."},
  {reviewerName: "Esi", reviewerPic: ImgPlaceholder1, starCount: 3, date: "12/12/2021", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec velit auctor, dictum justo sit amet, ultrices odio."},
  {reviewerName: "Ekua", reviewerPic: ImgPlaceholder1, starCount: 5, date: "12/12/2021", review: "Lorem ipsum dolor sit ame"},
  {reviewerName: "Kwabena", reviewerPic: ImgPlaceholder, starCount: 4, date: "12/12/2021", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec velit auctor ultrices odio."},
  {reviewerName: "Fiifi", reviewerPic: ImgPlaceholder1, starCount: 1, date: "12/12/2021", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec velit."},
]

const itemImgData = [
  {itemImage: ImgPlaceholder},
  {itemImage: ImgPlaceholder1},
  {itemImage: ImgPlaceholder},
  {itemImage: ImgPlaceholder1}
]


function ItemImg({ itemImg = [] }) {
  return (
      <Carousel interval={null} controls={itemImg.length > 1} indicators={itemImg.length > 1}>
          {
            itemImg.length > 0 ? (
              itemImg.map((img, idx) => {
                return (
                  <Carousel.Item key={idx}>
                    <img className="item-imgs" src={img.itemImage} alt=""/>
                  </Carousel.Item>
                )
              })
            ): (
              <Carousel.Item>
                <img className="item-imgs" src={ImgPlaceholder} alt=""/>
              </Carousel.Item>
            )
          }
      </Carousel>
 )
}


function ContactInfo({ targetElement = {}, info = "" }) {

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h4">Contact info</Popover.Header>
      <Popover.Body>
        {info ? info : "Not Available"}
      </Popover.Body>
    </Popover>
  );
  return (
    <OverlayTrigger  placement="bottom" overlay={popover}>
       {targetElement ? targetElement : <FontAwesomeIcon icon={faPhone} />}
    </OverlayTrigger>
  )
}


const phoneIconTarget = <FontAwesomeIcon icon={faPhone} />;
const whatsappIconTarget = <FontAwesomeIcon icon={faWhatsapp} />;
const MapChildComponent = ({ text }) => <div>{text}</div>;

export default function ItemPageSection() {

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <section className="item-page-section">
      <Container className="item-des-container">
        <Row className="desc-section">
          <Col>
            <ItemImg itemImg={itemImgData} />
          </Col>
          <Col>
            <div className="item-des">
              <div className="item-des-head">
              <h2>Description</h2>
              <small>category</small>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec velit auctor, dictum justo sit amet, ultrices odio. Nullam
                eget metus nec libero ultricies scelerisque. Nulla facilisi.
                Donec nec velit auctor, dictum justo sit amet, ultrices odio.
                Nullam eget metus nec libero ultricies scelerisque. Nulla
                facilisi.
              </p>
            </div>
          </Col>
          <Col>
          <div className="item-loc">
            <div className="item-loc-text">
            <h2>Location</h2>
            <small>Ghana (<span>Kumasi</span>)</small>
            </div>
              <div className="map-wrapper">
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                className="map-container"
              >
              <MapChildComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
                
              />
              </GoogleMapReact>
              </div>
          </div>
          </Col>
          <Col className="review-container">
          <h3>User's Review</h3>
            <div className="item-des-review-section">
              <ReviewSection reviewData={reviewData}/>
            </div>
          </Col>
        </Row>
        <Row className="profile-section">
          <Col className="item-name-price">
            <div>
              <h2>Item Name X900</h2>
            </div>
            <div className="item-price-tag">$70<span className="per-day-tag">/day</span></div>
          </Col>
          <Col className="profile-wrapper">
            <div className="owner-profile-bio">
              <h3>Owner Name <span><FontAwesomeIcon icon={faStar} /></span><small>(14)</small></h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec velit auctor, dictum justo sit amet, ultrices odio. Nullam
                eget metus nec libero ultricies scelerisque. Nulla facilisi.
              </p>
              <Button size="md" variant="primary">See More</Button>
            </div>
            <div className="owner-profile-pic">
              <img src={ImgPlaceholder} alt="profile img" />
            <span>
              <ContactInfo targetElement={phoneIconTarget} info="+233 036 746 6799" />
              <ContactInfo targetElement={whatsappIconTarget} />
            </span>
            </div>
          </Col>
        </Row>
      </Container>
      <RelatedItemsSection />
    </section>
  )
}