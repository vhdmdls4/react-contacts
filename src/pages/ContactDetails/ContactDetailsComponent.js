import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardImg, CardTitle, Table } from "reactstrap";
import styles from "./assets/ContactDetails.module.css";

function ContactDetailsComponent() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts"));

    if (!contacts) return;

    const idAsString = id.toString();

    const matchedContact = contacts.find((contact) => contact.id == idAsString);

    if (matchedContact) {
      setContact(matchedContact);
    }
  }, [id]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Card className="horizontal-card">
        <div className="d-flex align-items-center">
          <CardImg
            src={contact.picture}
            alt={contact.name}
            className={styles.image}
          />
          <CardBody>
            <CardTitle className="mb-4" tag="h5">
              {contact.name}
            </CardTitle>
            <Table>
              <tbody>
                <tr>
                  <td>ID:</td>
                  <td>{contact.id}</td>
                </tr>
                <tr>
                  <td>Contact:</td>
                  <td>{contact.contact}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>{contact.email}</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </div>
      </Card>
    </div>
  );
}

export default ContactDetailsComponent;
