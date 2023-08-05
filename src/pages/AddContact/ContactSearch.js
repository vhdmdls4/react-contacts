import React, { useEffect, useState } from "react";
import ContactCard from "../LandingPage/ContactCard";
import {
  Badge,
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

function ContactSearch({ setContact }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const storedContacts = localStorage.getItem("contacts");
    const existingContacts = storedContacts ? JSON.parse(storedContacts) : [];
    const contact = existingContacts.find(
      (contact) => contact.contact === searchQuery
    );

    if (contact) {
      setContact(contact);
      console.log(contact);
    } else {
      alert("Contact not found");
      setContact(null);
    }

    setIsLoading(false);
  };

  // useEffect(() => {
  //   setFoundContact();
  // }, [localStorage.getItem("contacts")]);

  return (
    <Card>
      <CardBody>
        <Form>
          <FormGroup>
            <h2>Search Contact</h2>
            <div className="d-flex gap-3">
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter contact"
              />
              <Button onClick={handleSearch} style={{ flex: "1 0 150px" }}>
                Search
              </Button>
            </div>

            {isLoading ? <Badge>Loading...</Badge> : ""}
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
}

export default ContactSearch;
