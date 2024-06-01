import React from "react";
import { Col, Row, Button, Container, Carousel } from "react-bootstrap";
import GoogleMapReact from 'google-map-react';

import "./ItemPageSection.css";
import ImgPlaceholder from "../../assets/images/explore-image.jpeg";
import ImgPlaceholder1 from "../../assets/images/thumbnail-1.jpg";
import { ReviewStars } from "../Landingpage/ReviewSection";

const reviewData = [
  {reviewerName: "Kweku", reviewerPic: ImgPlaceholder, starCount: 5, date: "10/11/2021", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {reviewerName: "Ama", reviewerPic: ImgPlaceholder, starCount: 5, date: "21/11/2021", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec velit auctor, ultrices odio."},
  {reviewerName: "Esi", reviewerPic: ImgPlaceholder1, starCount: 3, date: "12/12/2021", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec velit auctor, dictum justo sit amet, ultrices odio."},
  {reviewerName: "Ekua", reviewerPic: ImgPlaceholder1, starCount: 5, date: "12/12/2021", review: "Lorem ipsum dolor sit ame"},
  {reviewerName: "Kwabena", reviewerPic: ImgPlaceholder, starCount: 4, date: "12/12/2021", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec velit auctor ultrices odio."},
  {reviewerName: "Fiifi", reviewerPic: ImgPlaceholder1, starCount: 1, date: "12/12/2021", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec velit."},
]


function ItemImg() {
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <img className="item-imgs" src={ImgPlaceholder} alt=""/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="item-imgs" src={ImgPlaceholder1} alt=""/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="item-imgs" src={ImgPlaceholder} alt=""/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="item-imgs" src={ImgPlaceholder1} alt=""/>
      </Carousel.Item>
    </Carousel>
  )
}


function ReviewSection({ reviewData = [] }) {
  return (
    <>
      {
        reviewData.length > 0 ? (
          reviewData.map((review, index) => {
            return (
              <div key={index} className="usr-reviews">
            <Row className="reviewer-info-sec">
              <Row className="img-sec" >
                <img className="img-sec-img"  src={review.reviewerPic} alt="" />
              </Row>
              <Row className="name-stars-sec">
                <Col className="name-date">
                  <div className="name-date-name">{review.reviewerName}</div>
                  <div className="name-date-date">{review.date}</div>
                </Col>
                <Col>
                  <ReviewStars  starCount={review.starCount}/>
                </Col>
              </Row>
            </Row>
            <Row className="review-txt-sec">
              {review.review}
            </Row>
            <hr />
          </div>
            )  
          })): (
          <div className="usr-reviews">
      <Row className="reviewer-info-sec">
        <Row className="img-sec" >
          <img className="img-sec-img"  src={ImgPlaceholder} alt="" />
        </Row>
        <Row className="name-stars-sec">
          <Col className="name-date">
            <div className="name-date-name">reviewer-name</div>
            <div className="name-date-date">Date</div>
          </Col>
          <Col>
            <ReviewStars  starCount={4}/>
          </Col>
        </Row>
      </Row>
      <Row className="review-txt-sec">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
      </Row>
      <hr />
    </div>
        )
      }
    </>
  )
}


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
            <ItemImg />
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
          <Col>User</Col>
        </Row>
      </Container>
    </section>
  )
}