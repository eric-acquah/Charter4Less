import { React, useState, useEffect } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as Rastar,
  faCircleArrowRight,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import ImgPlaceholder from "../assets/images/explore-image.jpeg";

import "./itemCardComponent.css";
import "swiper/css"; // core Swiper
import "swiper/css/navigation"; // Navigation module
import "swiper/css/pagination"; // Pagination module


function CardImage({ imgList = [] }) {
  const [showNavBtn, setShowNavBtn] = useState(true);

  useEffect(() => {
    setShowNavBtn(imgList.length > 1);
  }, [imgList]);

  return (
    <Container className="img-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="cardSwiper"
      >
        {imgList.length > 0 ? (
          imgList.map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={img} className="card-img-img" alt="card img" />
              </SwiperSlide>
            );
          })
        ) : (
          <>
            <SwiperSlide>
              <img
                src={ImgPlaceholder}
                className="card-img-img"
                alt="card img"
              />
            </SwiperSlide>
          </>
        )}

        <div
          id="swiper-btn-nxt"
          className={`swiper-button-next custom-icon ${
            showNavBtn ? "" : "btn-hidden"
          }`}
        >
          <FontAwesomeIcon className="swiper-icon" icon={faCircleArrowRight} />
        </div>
        <div
          id="swiper-btn-prev"
          className={`swiper-button-prev custom-icon ${
            showNavBtn ? "" : "btn-hidden"
          }`}
        >
          <FontAwesomeIcon className="swiper-icon" icon={faCircleArrowLeft} />
        </div>
      </Swiper>
    </Container>
  );
}

export default function ItemCardComponent({ cardData = [] }) {
  return (
    <div>
      <Row xs={1} md={3} lg={4} className="g-4 card-row-wrapper">
        {cardData.length > 0 ? (
          cardData.map((card, index) => {
            return (
              <Col key={index}>
                <Card className="card-main">
                  <CardImage imgList={card.imgList} />
                  <Card.Body className="card-body">
                    <Card.Title className="card-text-title">
                      {card.title}
                    </Card.Title>
                    <div className="text-wrapper">
                      <Card.Text className="card-text">
                        {card.location}
                      </Card.Text>
                      <Card.Text className="card-text owner-name">
                        {card.ownerFirstName}{" "}
                        <FontAwesomeIcon
                          icon={Rastar}
                          style={{ color: "#FEB941" }}
                        />{" "}
                        ({card.ownerRating})
                      </Card.Text>
                    </div>
                    <Card.Text className="card-text price">
                      ${card.price}/day
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <Col>
            <Card className="card-main">
              <CardImage imgList={[]} />
              <Card.Body className="card-body">
                <Card.Title className="card-text-title">
                  Something X900 Pro-Max | Dark Gray
                </Card.Title>
                <div className="text-wrapper">
                  <Card.Text className="card-text">Kumasi</Card.Text>
                  <Card.Text className="card-text owner-name">
                    Owner{" "}
                    <FontAwesomeIcon
                      icon={Rastar}
                      style={{ color: "#FEB941" }}
                    />{" "}
                    (14)
                  </Card.Text>
                </div>
                <Card.Text className="card-text price">$20/day</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </div>
  );
}
