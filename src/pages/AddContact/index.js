import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import AddContactForm from "./AddContactForm";
import ContactSearch from "./ContactSearch";
import {
  Alert,
  Button,
  Card,
  Col,
  Collapse,
  Row,
  UncontrolledCollapse,
} from "reactstrap";
import EditContactForm from "./EditContactForm";
import ContactCard from "../LandingPage/ContactCard";

function AddContact() {
  const [contactReceived, setContactReceived] = useState();
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleContactEdit = (editedContact) => {
    setContactReceived(editedContact);
  };

  const handleContactDelete = (contactId) => {
    const localContacts = JSON.parse(localStorage.getItem("contacts"));
    if (!localContacts) return;

    const contactIndex = localContacts.findIndex(
      (item) => item.id === contactId
    );
    if (contactIndex === -1) return;

    localContacts.splice(contactIndex, 1);

    localStorage.setItem("contacts", JSON.stringify(localContacts));

    setContactReceived(null);
  };

  return (
    <Layout>
      <Row className="d-flex justify-content-center" md={1} lg={3}>
        <Col>
          <AddContactForm />
        </Col>
        {contactReceived && (
          <Col>
            <EditContactForm
              contact={contactReceived}
              onContactEdit={handleContactEdit}
            />
          </Col>
        )}
        <Col>
          <ContactSearch setContact={setContactReceived} />

          {contactReceived && (
            <div className="mt-2">
              <ContactCard
                contact={contactReceived}
                onDelete={handleContactDelete}
              />
            </div>
          )}
        </Col>
      </Row>
    </Layout>
  );
}

export default AddContact;
