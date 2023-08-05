import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { contactsData } from "../../data/contacts";
import ContactCard from "./ContactCard";

function LandingPage() {
  const [contacts, setContacts] = useState([]);

  const handleContactDelete = (contactId) => {
    const localContacts = JSON.parse(localStorage.getItem("contacts"));
    if (!localContacts) return;

    const contactIndex = localContacts.findIndex(
      (item) => item.id === contactId
    );
    if (contactIndex === -1) return;

    localContacts.splice(contactIndex, 1);

    localStorage.setItem("contacts", JSON.stringify(localContacts));

    setContacts(localContacts);
  };

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, [localStorage.getItem("contacts")]);

  return (
    <Layout>
      {contacts.length > 0 ? (
        <Row className="justify-content-center">
          {contacts.map((contact) => (
            <Col key={contact.id} sm="5" md="4" lg="3" className="mb-4">
              <ContactCard contact={contact} onDelete={handleContactDelete} />
            </Col>
          ))}
        </Row>
      ) : (
        <Row className="justify-content-center">
          <Col md="8" className="text-center">
            <Alert color="dark">
              There are no contacts in the server. Please add some contacts.
            </Alert>
            <Button tag={Link} to="/add" color="primary">
              Add Contact
            </Button>
          </Col>
        </Row>
      )}
    </Layout>
  );
}

export default LandingPage;
