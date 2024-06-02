import React from "react";
import { Col, Row } from "react-bootstrap";
import { ReviewStars } from "../Landingpage/ReviewSection";

import ImgPlaceholder from "../../assets/images/explore-image.jpeg";
import ImgPlaceholder1 from "../../assets/images/thumbnail-1.jpg";


export default function ReviewSection({ reviewData = [] }) {
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