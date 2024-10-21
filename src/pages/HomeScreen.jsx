import React from "react";
import Layout from "../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LandingSerum from "../assets/serum.png";
import LandingMask from "../assets/mask.png";
import Serums from "../assets/serum2.png";
import EyeMasks from "../assets/eye mask2.png";
import FaceCream from "../assets/face creams.png";
import FaceMasks from "../assets/face masks.png";

function Home() {
  return (
    <Layout>
      <section className="home">
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
      </section>
      <section className="category">
        <Container>
          <h2 className="raleway-h2 text-center">Essence of Elegance</h2>
          <p className="col-xl-6 col-lg-10 col-10 raleway-body text-center m-auto">
            Indulge in the epitome of skincare luxury with LuxeGlow. Elevate
            your routine with our meticulously crafted serums, rejuvenating eye
            masks, sumptuous face creams, and enchanting masks. Experience
            timeless beauty, refined.
          </p>
          <Row xs={2} md={2} lg={4} className="g-4 scroll">
            <Col>
              <Link to="/products" className="card opacity-75">
                <img src={Serums} alt="face serum" />
                <h3 className="raleway-h3 opacity-75">Serums</h3>
                <div className="glow-effect"></div>
              </Link>
            </Col>
            <Col>
              <Link to="/products" className="card opacity-75">
                <img src={EyeMasks} alt="eye mask" />
                <h3 className="raleway-h3 opacity-75">Eye Masks</h3>
                <div className="glow-effect"></div>
              </Link>
            </Col>
            <Col>
              <Link to="/products" className="card opacity-75">
                <img src={FaceCream} alt="face cream" />
                <h3 className="raleway-h3 opacity-75">Face Cream</h3>
                <div className="glow-effect"></div>
              </Link>
            </Col>
            <Col>
              <Link to="/products" className="card opacity-75">
                <img src={FaceMasks} alt="face mask" />
                <h3 className="raleway-h3 opacity-75">Face Masks</h3>
                <div className="glow-effect"></div>
              </Link>
            </Col>
          </Row>
          <div className="button-container d-flex justify-content-center">
            <Link to="/products" className="button raleway-button">
              See all
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
export default Home;
