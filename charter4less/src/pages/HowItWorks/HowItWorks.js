import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./HowItWorks.css";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";

function HowItWorksHeader({ text }) {
  return <h3 className="howitworks-heading">{text}</h3>;
}

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("owners");

  return (
    <section className="how-it-works-section">
      <Nav
        variant="tabs"
        activeKey={activeTab}
        onSelect={(selectedKey) => setActiveTab(selectedKey)}
      >
        <Nav.Item>
          <Nav.Link className="nav-link-btn" eventKey="owners">
            For Owners
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-link-btn" eventKey="renters">
            For Renters
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="howitworks">
        <Container className="howitworks-container">
          {activeTab === "owners" && (
            <Row>
              <Col>
                <HowItWorksHeader text="Step 1" />
                <p>
                  Sign up for an account on Charter4Less. Fill in your basic
                  information and verify your email to get started.
                </p>
              </Col>
              <Col>
                <HowItWorksHeader text="Step 2" />
                <p>
                  Navigate to the "List Item" section. Fill in the details of
                  the item you want to rent out, including a title, description,
                  and high-quality photos. Set your rental price and the item
                  category.
                </p>
              </Col>
              <Col>
                <HowItWorksHeader text="Step 3" />
                <p>
                  Review the details you've entered to ensure everything is
                  accurate. Once satisfied, click "Submit" to make your item
                  live on the platform. You’ll will be called or messaged when
                  someone is interested in renting your item.
                </p>
              </Col>
            </Row>
          )}
          {activeTab === "renters" && (
            <Row>
              <Col>
                <HowItWorksHeader text="Step 1" />
                <p>
                  Use the search bar to find the item you need. You can also
                  filter results by category, on the categories page to find the
                  perfect match.
                </p>
              </Col>
              <Col>
                <HowItWorksHeader text="Step 2" />
                <p>
                  Click on the item you’re interested in and read the details
                  provided by the owner. If it suits your needs, hover on the
                  contacts icons on the owner profile section to view the
                  owner's contact to engage.
                </p>
              </Col>
              <Col>
                <HowItWorksHeader text="Step 3" />
                <p>
                  Once the owner approves your request, arrange a time for
                  pickup or delivery with the owner. After using the item,
                  return it as agreed, and leave a review for the owner.
                </p>
              </Col>
            </Row>
          )}
          <Link to={activeTab === "owners" ? "/listitem" : "/categories"}>
            <Button className="how-it-works-btn button">
              {activeTab === "owners" ? "List Item" : "Rent Item"}
            </Button>
          </Link>
        </Container>
      </div>
    </section>
  );
}
