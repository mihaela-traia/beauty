import React from "react";
import Layout from "../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LandingSerum from "../assets/serum.png";
import LandingMask from "../assets/mask.png";

function Home() {
  return (
    <section className="home">
      <Layout>
        <Container>
          <Row>
            <Col lg={4} xs={12} px={1} className="branding">
              <h1 className="raleway-h1">Radiance Redifined</h1>
              <p className="col-11 col-lg-12 raleway-body">
                Experience the epitome of luxury with our skincare essentials
                for timeless beauty. Unleash your radiant glow with LuxeGlow's
                transformative formulations.
              </p>
              <Link to="/products" className="shop-button raleway-button">
                Shop Now
              </Link>
            </Col>
            <Col lg={4} xs={6} className="pe-0">
              <img
                src={LandingSerum}
                alt="face serum"
                className="landing-img"
              />
            </Col>
            <Col lg={4} xs={6} className="ps-0">
              <img src={LandingMask} alt="face mask" className="landing-img" />
            </Col>
          </Row>
        </Container>
      </Layout>
    </section>
  );
}
export default Home;
