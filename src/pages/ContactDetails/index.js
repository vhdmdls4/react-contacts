import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert, Button } from "reactstrap";

import Layout from "../../components/Layout";
import ContactDetailsComponent from "./ContactDetailsComponent";

function ContactDetails() {
  return (
    <Layout>
      <Row>
        <Col>
          <ContactDetailsComponent />
        </Col>
      </Row>
    </Layout>
  );
}

export default ContactDetails;
