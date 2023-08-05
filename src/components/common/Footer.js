import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 fixed-bottom">
      {" "}
      <Container>
        <Row>
          <Col>
            <p>
              &copy; {new Date().getFullYear()} Victor Hugo Martins. All rights
              reserved.
            </p>
          </Col>
          <Col className="text-end">
            <Link to="/">Home</Link> | <Link to="/add">Add Contact</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
