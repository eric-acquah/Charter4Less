import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as Rastar } from "@fortawesome/free-regular-svg-icons";
import useRetrieveFeedback from "../../hooks/useRetrieveFeedback";

import "./ReviewSection.css";
import "swiper/css"; // core Swiper
import "swiper/css/navigation"; // Navigation module
import "swiper/css/pagination"; // Pagination module

import profile from "../../assets/images/placeholder-profile.jpg";

const reviewsData = [
  {
    reviewerName: "John Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla enim in tellus porttitor, vehicula venenatis justo posuere.elit molestie ut. Nulla",
    reviwerPic: profile,
    starCount: 5,
  },
  {
    reviewerName: "John Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla enim in tellus porttitor, vehicula venenatis justo posuere.elit molestie ut. Nulla",
    reviwerPic: profile,
    starCount: 5,
  },
  {
    reviewerName: "John Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla enim in tellus porttitor, vehicula venenatis justo posuere.elit molestie ut. Nulla",
    reviwerPic: profile,
    starCount: 3,
  },
  {
    reviewerName: "John Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla enim in tellus porttitor, vehicula venenatis justo posuere.elit molestie ut. Nulla",
    reviwerPic: profile,
    starCount: 2,
  },
  {
    reviewerName: "John Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla enim in tellus porttitor, vehicula venenatis justo posuere.elit molestie ut. Nulla",
    reviwerPic: profile,
    starCount: 4,
  },
  {
    reviewerName: "John Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla enim in tellus porttitor, vehicula venenatis justo posuere.elit molestie ut. Nulla",
    reviwerPic: profile,
    starCount: 1,
  },
  {
    reviewerName: "John Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla enim in tellus porttitor, vehicula venenatis justo posuere.elit molestie ut. Nulla",
    reviwerPic: profile,
    starCount: 4,
  },
];

export function ReviewStars({ starCount = 1 }) {

  return (
    <>
      {Array(starCount)
        .fill(0)
        .map((_, index) => {
          return (
            <FontAwesomeIcon
              key={index}
              icon={Rastar}
              style={{ color: "#FEB941" }}
            />
          );
        })}
    </>
  );
}

function ReviewCard({ reviewsData = [] }) {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={120}
      centeredSlides={true}
      loop={true}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="reviewSwiper"
    >
      {reviewsData.map((review, index) => {
        return (
          <SwiperSlide key={index}>
            <Card className="review-card-container" style={{ width: "18rem", height: "25rem" }}>
              <Card.Title className="review-stars">
                <ReviewStars starCount={review.starCount} />
              </Card.Title>
              <Card.Body className="review-card">
                { review.reviwerPic ? 
                  <Card.Img
                  className="reviewer-img"
                  src={review.reviwerPic}
                  alt="review card"
                /> : <Card.Img
                className="reviewer-img"
                src={profile}
                alt="review card"
              />
                }
                <Card.Text className="reviewer-name">
                  {review.name}
                </Card.Text>
                <hr />
                <Card.Text className="reviewer-msg">{review.review}</Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default function ReviewSection() {
  const { feedback } = useRetrieveFeedback();

  return (
    <section className="review-section">
      <Container>
        <Row>
          <Col>
            <h2 className="review-title">From Our Users!</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <ReviewCard reviewsData={feedback ? feedback : reviewsData} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
