import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { Container, Row, Col } from "react-bootstrap";
import X from "../assets/x.png";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
import Pintrest from "../assets/pinterest.png";

function Footer() {
  return (
    <footer>
      <Container className="raleway-footer">
        <Row>
          <Col className="align-content-start col-lg-5 col-md-12 col-sm-12 col-12 pe-md-5">
            <img src={Logo} alt="" className="py-3" />
            <p className="pb-3">
              Experience the epitome of luxury and efficacy with LuxeGlow -
              because your skin deserves nothing but the best. Glow confidently,
              Every day.
            </p>
            <div className="socials pb-3">
              <Link to="https://www.instagram.com/" className="pe-1">
                <img src={Instagram} alt="Instagram" />
              </Link>
              <Link to="https://x.com" className="pe-1">
                <img src={X} alt="X" />
              </Link>
              <Link to="https://www.facebook.com/" className="pe-1">
                <img src={Facebook} alt="Facebook" />
              </Link>
              <Link to="https://pinterest.com/" className="pe-1">
                <img src={Pintrest} alt="Pintrest" />
              </Link>
            </div>
          </Col>
          <Col className="col-lg-2 col-md-4 col-4">
            <h5 className="py-4">Menu</h5>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </Col>
          <Col className="col-lg-3 col-md-4 col-4">
            <h5 className="py-4">Products Categories</h5>
            <ul>
              <li>Serums</li>
              <li>Eye Masks</li>
              <li>Face Creams</li>
              <li>Face Masks</li>
            </ul>
          </Col>
          <Col className="col-lg-2 col-md-4 col-4">
            <h5 className="py-4">Contact</h5>
            <ul>
              <li>+1 (555) 123-4567</li>
              <li>info@luxeglow.com</li>
              <li>456 Radiant Street, Glamourton, Luxeland</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <div className="text-center pb-4">
            ©LuxeGlow 2024. All rights reserved.
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
