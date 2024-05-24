import React from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css"; // core Swiper
import "swiper/css/navigation"; // Navigation module
import "swiper/css/pagination"; // Pagination module
import "swiper/css/effect-coverflow"; // EffectCoverflow module
import "./ExploreCategorySection.css";

import exploreImg1 from "../../assets/images/item-category-1.jpg";
import exploreImg2 from "../../assets/images/item-category-2.jpg";
import exploreImg3 from "../../assets/images/item-category-3.jpg";
import exploreImg4 from "../../assets/images/item-category-4.jpg";
import exploreImg5 from "../../assets/images/item-category-5.jpg";
import exploreImg6 from "../../assets/images/item-category-6.jpg";
import exploreImg7 from "../../assets/images/item-category-7.jpg";
import exploreImg8 from "../../assets/images/item-category-8.jpg";

const exploreCard = [
  { cardId: 1, CardImg: exploreImg1, CardTitle: "Tools" },
  { cardId: 2, CardImg: exploreImg2, CardTitle: "Apparel & Accessories " },
  { cardId: 3, CardImg: exploreImg3, CardTitle: "Vehicles" },
  { cardId: 4, CardImg: exploreImg4, CardTitle: "Utensils" },
  { cardId: 5, CardImg: exploreImg5, CardTitle: "Electronics" },
  { cardId: 6, CardImg: exploreImg6, CardTitle: "Event & party supplies" },
  { cardId: 7, CardImg: exploreImg7, CardTitle: "Residential/Commercial spaces" },
  { cardId: 8, CardImg: exploreImg8, CardTitle: "Equipment" },
];

function SwiperSlideComponent({ exploreCard = [] }) {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={"4"}
      spaceBetween={0}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: true,
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper-container"
    >
      {exploreCard.map((card) => {
        return (
          <SwiperSlide key={card.cardId}>
            <Card style={{ width: "20rem", height: "25rem", objectFit: "contain" }}>
              <Card.Img src={card.CardImg} alt="card" />
              <Card.ImgOverlay>
                <Card.Title className="card-title">{card.CardTitle}</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </SwiperSlide>
        );
      })}

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow"></div>
        <div className="swiper-button-next slider-arrow"></div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  );
}


export default function ExploreCategorySection() {
  return (
    <section className="explore-section">
      <Container>
        <Row className="row-container">
          <Col className="col-container">
            <SwiperSlideComponent exploreCard={exploreCard} />
          </Col>
        </Row>
        <Row>
          <Col className="slider-col-btn">
            <Button className="slider-btn" variant="primary" size="lg">
              Explore our categories
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
