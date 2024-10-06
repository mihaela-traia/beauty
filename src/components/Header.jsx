import React from "react";
import "./Header.scss";
import "bootstrap";
import Container from "react-bootstrap/Container";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-transparent
 sticky-top"
    >
      <Container>
        <Link
          to="/"
          className="navbar-brand d-flex col-lg-3 col-md-8 col-sm-8 col-8 justify-content-start p-0"
          id="logo"
        >
          <img src={Logo} alt="" />
        </Link>
        <button
          className="navbar-toggler col-md-1 col-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="nav-collapse"
        >
          <span class="material-symbols-outlined">menu</span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between col-lg-6 px-5"
          id="navbarNavAltMarkup"
        >
          <div className="col-12 navbar-nav d-flex justify-content-between">
            <Link
              to="/"
              className="nav-link active raleway-menu"
              aria-current="page"
            >
              Home
            </Link>
            <Link to="/products" className="nav-link raleway-menu">
              Products
            </Link>
            <Link to="/about-us" className="nav-link raleway-menu">
              About Us
            </Link>
            <Link to="/contact-us" className="nav-link raleway-menu">
              Contact Us
            </Link>
          </div>
        </div>
        <div
          className="search d-flex col-lg-3 col-md-2 col-sm-2 col-2 justify-content-end"
          id="nav-icons"
        >
          <span class="material-symbols-outlined pe-4">search</span>
          <span class="material-symbols-outlined">shopping_cart</span>
        </div>
      </Container>
    </nav>
  );
}

export default Header;
