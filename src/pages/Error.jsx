import React from "react";
import Layout from "../components/Layout";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <Layout>
      <section className="error ">
        <Container>
          <Row>
            <span class="material-symbols-outlined text-center">error</span>
            <h2 className="raleway-h2 text-center">
              Oops! Something went wrong.
            </h2>
            <p className="raleway-body text-center">
              It looks like we couldn’t complete your request. Please try the
              following:
            </p>
            <ul className="raleway-body">
              <li>Refresh the page and try again.</li>
              <li>Double-check your internet connection.</li>
              <li>If the problem persists, contact our support team.</li>
            </ul>
            <p className="raleway-body text-center">
              We apologize for the inconvenience and thank you for your
              patience.
            </p>
            <p className="raleway-body text-center">
              Need help? <Link to="/contact-us">Contact Us</Link>
            </p>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}
export default ErrorPage;
