import { React, useState, useEffect } from "react";
import { Col, Row, Container, Nav } from "react-bootstrap";
import ItemCardComponent from "../../components/ItemCardComponent";
import filterCategories from "../../utils/categoryFilter";

import "./CategoriesMain.css";

export default function CategoriesMain({ cardData }) {
  const [firterType, setFilterType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("categories");

  const modifiedCardData = filterCategories(cardData, firterType);

  console.log(modifiedCardData)

  console.log(cardData);

  useEffect(() => {}, [cardData, firterType]);

  // Render the CategoriesMain component
  return (
    <section className="categories-section-wrapper">
      <Container className="section-container" fluid>
        <Row>
          <Col className="category-nav-side-panel">
            <Nav className="flex-column nav-wrapper">
              <Nav.Link
                className={`nav-head ${
                  selectedCategory === "categories" ? "selected" : ""
                }`}
                // href="#categories"
                onClick={() => {
                  setFilterType("all");
                  setSelectedCategory("categories");
                }}
              >
                <h2>Categories</h2>
              </Nav.Link>
              <Nav.Link
                className={`${selectedCategory === "tools" ? "selected" : ""}`}
                // href="#tools"
                onClick={() => {
                  setFilterType("tools");
                  setSelectedCategory("tools");
                }}
              >
                Tools
              </Nav.Link>
              <Nav.Link
                className={`${
                  selectedCategory === "equipment" ? "selected" : ""
                }`}
                // href="#equipment"
                onClick={() => {
                  setFilterType("equipment");
                  setSelectedCategory("equipment");
                }}
              >
                Equipment
              </Nav.Link>
              <Nav.Link
                className={`${
                  selectedCategory === "vehicles" ? "selected" : ""
                }`}
                // href="#vehicles"
                onClick={() => {
                  setFilterType("vehicles");
                  setSelectedCategory("vehicles");
                }}
              >
                Vehicles
              </Nav.Link>
              <Nav.Link
                className={`${
                  selectedCategory === "electronics" ? "selected" : ""
                }`}
                // href="#electronics"
                onClick={() => {
                  setFilterType("electronics");
                  setSelectedCategory("electronics");
                }}
              >
                Electronics
              </Nav.Link>
              <Nav.Link
                className={`${
                  selectedCategory === "apparel&accessories" ? "selected" : ""
                }`}
                // href="#apparel&accessories"
                onClick={() => {
                  setFilterType("apparel & accessories");
                  setSelectedCategory("apparel&accessories");
                }}
              >
                Apparel & Accessories
              </Nav.Link>
              <Nav.Link
                className={`${
                  selectedCategory === "event&party-supplies" ? "selected" : ""
                }`}
                // href="#event&party-supplies"
                onClick={() => {
                  setFilterType("event & party supplies");
                  setSelectedCategory("event&party-supplies");
                }}
              >
                {" "}
                Event & Party Supplies
              </Nav.Link>
              <Nav.Link
                className={`${
                  selectedCategory === "utensils" ? "selected" : ""
                }`}
                // href="#utensils"
                onClick={() => {
                  setFilterType("utensils");
                  setSelectedCategory("utensils");
                }}
              >
                Utensils
              </Nav.Link>
              <Nav.Link
                className={`${selectedCategory === "spaces" ? "selected" : ""}`}
                // href="#spaces"
                onClick={() => {
                  setFilterType("spaces");
                  setSelectedCategory("spaces");
                }}
              >
                Spaces
              </Nav.Link>
            </Nav>
          </Col>
          <Col className="category-items-container">
            {modifiedCardData.length < 1 ? (
              <Container className="msg-container">
                <h2>No Items To display Yet</h2>
              </Container>
            ) : (
              <ItemCardComponent cardData={modifiedCardData} />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
